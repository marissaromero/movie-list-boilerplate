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

//QUESTION: how does changing it to api/movies affect mysql schema page location?? it does not affect it. the naming is merely there to distringuish between different get requests.
app.get('/api/movies', (req, res) => {
  const sql = `SELECT * FROM movies`;

  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})

app.get('/api/movies/watched', (req, res) => {
  const sql = `SELECT * FROM movies WHERE watched = 'true'`;

  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})

app.get('/api/movies/toWatch', (req, res) => {

  const sql = `SELECT * FROM movies WHERE watched = 'false'`;

  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})

app.post('/api/movies/search', (req, res) => {

  console.log('i have made it to search', req.body.search)


  const sql = `SELECT * FROM movies WHERE title LIKE '%${req.body.search}%'`;

  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})
//

app.post('/api/movies', (req, res) => {

  const movie = [req.body.title, req.body.year, req.body.runtime, req.body.imdbRating, req.body.buttonStyle, req.body.watched]
  console.log(movie)

  const sql = `INSERT INTO movies (title, year, runtime, imdbRating, buttonStyle, watched) VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, movie, (err) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(201);
    }
  })

})

app.put('/api/movies', (req, res) => {
  console.log('i am req.body within put',req.body)


  const sql = `UPDATE movies SET watched = '${req.body.watched}' WHERE title = '${req.body.title}'`;

  db.query(sql, (err) => {
    if (err) {
      console.log('error inside app.put /api/movies', err);
      res.send(500);
    } else {
      res.send(201);
    }
  })

})




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})