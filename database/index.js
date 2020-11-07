const mysql = require('mysql');

const connection = mysql.createConnection({
  hostname: 'localhost',
  user: 'student',
  password: 'student',
  database: 'movies'
});


connection.connect(err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to mysql')
  }
})

module.exports = connection;