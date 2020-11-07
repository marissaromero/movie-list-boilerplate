DROP DATABASE movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  year INT,
  runtime INT,
  imdbRating INT,
  buttonStyle VARCHAR(20),
  watched VARCHAR(40)
)
