const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");``
const app = express();
const mysql = require('../libs/database/db.connect');
const taskRote = require('./router/Task.router');

// middleware

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// database

//Route
app.use('/task',taskRote);


//handleError

module.exports = app;
