import Sequelize from "sequelize";
import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import User from "./models/Users.js";

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
        if (username === storedUser.username && password === storedUser.password) {
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

const sessionOptions = {
  secret: "secret",
  resave: true,
  saveUninitialized: false
};

/* const db = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database.sqlite"
});

db.authenticate()
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error", err)); */

const app = express(); // You can also use Express

app.use(express.urlencoded());
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
app.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});
app.get("/api/database", (req, res) => {
  User.findAll().then((users) => console.log(JSON.stringify(users)));
  res.send("hello");
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
