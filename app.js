const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to db
const db = process.env.DB_URL;

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDb connected.");
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
*/

app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const salesRouter = require("./api/routes/sales");
app.use("/sales", salesRouter);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
});

/***************************** HANDLE PRODUCTION *******************************/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
