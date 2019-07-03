import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log(username, password);
    if (username === "admin" && password === "password") {
      console.log("if statement succeeded");
      return done(null, { username: "admin" });
    } else {
      return done(null, false);
    }
  })
);

const sessionOptions = {
  secret: "secret",
  resave: true,
  saveUninitialized: false
};

const app = express(); // You can also use Express

app.use(express.urlencoded());
app.use(session(sessionOptions));
app.use(compression({ threshold: 0 }));
app.use(sirv("static", { dev }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log("inside serialize user");
  console.log(user);
  done(null, user.username);
});
passport.deserializeUser(function(user, done) {
  console.log("inside deserialize user");
  console.log(user);
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

app.use(
  sapper.middleware({
    session: (req, res) => {
      console.log("inside sapper middleware", req.user);
      return { user: req.user };
    }
  })
);
app.listen(PORT, (err) => {
  if (err) console.log("error", err);
});
