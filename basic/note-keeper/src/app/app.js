const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");``
const app = express();
const sql = require('../libs/database/db.connect');

// middleware

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// database

// route
//Route
app.get('/',(req,res)=>{
  const sqlString = ` SELECT * FROM note_list;`
sql.query(sqlString,(error,result)=>{
  if(error) throw error;
  console.log('Execute successful')
  console.log(result);
  res.status(200).json(result)
})
})

//handleError

module.exports = app;
