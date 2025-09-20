const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const app = express();

// Middleware
app.use(session({ secret: "secretKey", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.send("Backend running"));

app.listen(5000, () => console.log("Server running on port 5000"));
