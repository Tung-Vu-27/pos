const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json);
app.use(cors);

// Connect to database

const db = process.env.DB_URL;

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.once("open",() => {
    console.log("Mongoose connected.")
});

/******************** FORCE HTTPS (UNCOMMENT WHEN DEPLOY) *********************

app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https") {
      res.redirect(`https://${req.header("host")}${req.url}`);
    } else {
      next();
    }
  });
  app.use(express.static("build"));
  app.use(function(req, res, next) {
    var sslUrl;
  
    if (
      process.env.NODE_ENV === "production" &&
      req.headers["x-forwarded-proto"] !== "https"
    ) {
      sslUrl = ["https://b1nari.herokuapp.com/", req.url].join("");
      return res.redirect(sslUrl);
    }
  
    return next();
  });
  var https_redirect = function(req, res, next) {
    if (process.env.NODE_ENV === "production") {
      if (req.headers["x-forwarded-proto"] != "https") {
        return res.redirect("https://" + req.headers.host + req.url);
      } else {
        return next();
      }
    } else {
      return next();
    }
  };
  app.use(https_redirect);

  /*******************************************************************************/

  // Set up static public folder
  app.use(express.static(path.join(__dirname, 'public')));

  // Routes
  const salesRoute = require("./backend/routes/sales");