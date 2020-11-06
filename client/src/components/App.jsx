import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import WatchFilters from './WatchFilters.jsx'

var movies = [
  {title: "Mean Girls1", watched: 'false', year: '1995', runtime: '107 min' , metascore: 46, imdbRating: 6.2, buttonStyle: 'white_button'},
  {title: "The Outsiders", watched: 'false', year: '1995', runtime: '107 min' , metascore: 46, imdbRating: 6.2, buttonStyle: 'white_button'},
  {title: "Home Alone", watched: 'false', year: '1995', runtime: '107 min' , metascore: 46, imdbRating: 6.2, buttonStyle: 'white_button'}
]



class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      movies: movies,
      renderedMovies: movies,
      movieId: '',
    }
    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.adjustWatched = this.adjustWatched.bind(this);
    this.watchFilter= this.watchFilter.bind(this);
  }






//is this the proper way to get API information
//how to be able to access without using states?
  addMovie(movie) {

    //search for movie ID
    var urlMovieId = `https://api.themoviedb.org/3/search/movie?api_key=7fdb726f9ddada6e78cdde82cb44be0b&language=en-US&query=${movie}`
    fetch(urlMovieId)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState ({
          movieId: result.results[0].id
        }, () => {
          var urlMovieDetails = `https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=7fdb726f9ddada6e78cdde82cb44be0b&language=en-US`
          fetch(urlMovieDetails)
          .then(res => res.json())
          .then( (result) => {

            var movieObj = {
              title: result.title,
              watched: 'false',
              year: result.release_date.substring(0,4),
              runtime: result.runtime,
              metascore: 12.3,
              imdbRating: result.vote_average,
              buttonStyle: 'white_button'
            }
            const newMovieList = [...this.state.movies]
            newMovieList.push(movieObj)
            this.setState({
              movies: newMovieList
            })
          })
        })
    },
      (error) => {
        console.log(error)
      }
    )






  }





  filter(searchPhrase) {
    const filteredMovies = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].title.includes(searchPhrase)) {
        filteredMovies.push(this.state.movies[i]);
      }
    }
    this.setState({
      renderedMovies: filteredMovies,
    })
  }

  //takes in true or false
  watchFilter(watched) {
    const filteredMovies = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].watched.toString() === watched) {
        filteredMovies.push(this.state.movies[i]);
      }
    }
    this.setState({
      renderedMovies: filteredMovies,
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