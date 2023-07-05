const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");``
const app = express();

// middleware

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// database

// route
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

//handleError

module.exports = app;
