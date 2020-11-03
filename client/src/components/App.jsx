import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import WatchFilters from './WatchFilters.jsx'

var movies = [
  {title: "Mean Girls", watched: 'false', year: '1995', runtime: '107 min' , metascore: 46, imdbRating: 6.2},
  {title: "The Outsiders", watched: 'false', year: '1995', runtime: '107 min' , metascore: 46, imdbRating: 6.2},
  {title: "Home Alone", watched: 'false', year: '1995', runtime: '107 min' , metascore: 46, imdbRating: 6.2}
]



class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      movies: movies,
    }
    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.adjustWatched = this.adjustWatched.bind(this);
    this.watchFilter= this.watchFilter.bind(this);
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
  //takes in true or false
  watchFilter(watched) {
    const filteredMovies = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].watched.toString() === watched) {
        console.log('inside filtered movies')
        filteredMovies.push(this.state.movies[i]);
      }
    }
    this.setState({
      movies: filteredMovies,
    })
  }


  addMovie(movie) {
    var movieObj = {title: movie, watched: false, runtime: 112, imdbRating: 12, year: 1995}
    const newMovieList = [...this.state.movies]
    newMovieList.push(movieObj)
    this.setState({
      movies: newMovieList
    })
  }

  adjustWatched (movie, index) {
    const newMovieList  = [...this.state.movies]
    newMovieList.splice(index, 1, movie)
    this.setState({
      movies: newMovieList
    })
  }


  render () {
    return (
      <div>
      <h1>MovieList</h1>
      <AddMovie addMovie = {this.addMovie}/>
      <WatchFilters watchFilter = {this.watchFilter}/>
      <Search filter={this.filter}/>
      <br/>
      <MovieList movies = {this.state.movies} adjustWatched={this.adjustWatched}/>
      </div>

    )
  }

}

export default App;