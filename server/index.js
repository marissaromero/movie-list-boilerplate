const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db= require('../database')

//require middleware
const morgan = require('morgan')
const bodyParser = require('body-parser')

//run middleware
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(express.static('public'));



app.get('./movies', function (req, res) {
  const sql = `SELECT * FROM movies`
  dq.query(sql, (err, data) => {
    if (err) {
      console.log(err)
      res.send(500)
    } else {
      res.send(data)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})