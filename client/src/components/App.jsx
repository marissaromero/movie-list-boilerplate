import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'


class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      movies: [],
    }
    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  filter(searchPhrase) {
    const filteredMovies = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].title.includes(searchPhrase)) {
        filteredMovies.push(this.state.movies[i]);
      }
    }
    this.setState({
      movies: filteredMovies,
    })
  }

  addMovie(movie) {
    var movieObj = {'title': movie}
    const newMovieList = [...this.state.movies]
    newMovieList.push(movieObj)
    this.setState({
      movies: newMovieList
    })
  }


  render () {
    return (
      <div>
      <h1>MovieList</h1>
      <AddMovie addMovie = {this.addMovie}/>
      <Search filter={this.filter}/>
      <br/>
      <MovieList movies = {this.state.movies}/>
      </div>

    )
  }

}

export default App;