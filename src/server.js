import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "./models/Users.js";
const SQLiteStore = require("connect-sqlite3")(session);

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

passport.use(
  new LocalStrategy(async function(username, password, done) {
    try {
      const dbres = await User.findOne({
        where: { username },
        attributes: ["username", "password"]
      });
      if (!dbres) {
        return done(null, false);
      } else {
        const storedUser = dbres.dataValues;
        const pwdMatch = await bcrypt.compare(password, storedUser.password);
        if (pwdMatch) {
          return done(null, { username });
        } else {
          return done(null, false);
        }
      }
    } catch (err) {
      // database error
      console.log("database error", err);
      return done(err, false);
    }
  })
);

const bcryptOpt = {
  saltRounds: 10
};

const sessionOptions = {
  store: new SQLiteStore(),
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 1
  }
};

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(session(sessionOptions));
app.use(compression({ threshold: 0 }));
app.use(sirv("static", { dev }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.username);
});
passport.deserializeUser(function(user, done) {
  done(null, { username: user });
});

app.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/about"
  })
);
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const notUnique = await User.findOne({ where: { username } });
    if (!notUnique) {
      const hash = await bcrypt.hash(password, bcryptOpt.saltRounds);
      await User.create({ username, password: hash });
      res.redirect("/login");
    } else {
      // this response is for when the username is taken
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
    res.send("something went wrong", err);
  }
});

app.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.use(
  sapper.middleware({
    session: (req, res) => {
      return { user: req.user };
    }
  })
);
app.listen(PORT, (err) => {
  if (err) console.log("error", err);
});
