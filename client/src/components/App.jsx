import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import WatchFilters from './WatchFilters.jsx'
import axios from 'axios';



class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      movies: [],
      movieId: ''
    }
    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.adjustWatched = this.adjustWatched.bind(this);
    this.watchFilter= this.watchFilter.bind(this);
    this.findMovie = this.findMovie.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

componentDidMount() {
  this.fetchMovies();
}
//QUESTION: is it possible to chain get requests?  YES, but they still must be embedded
//QUESTION: josh mentioned not having get requetsts on the client side, why is this so and should this go on server index.js or an entirely new file? this axios file should live in the server since on the client side, only a get/post request to the database should be occuring.
  findMovie(movie) {
    console.log('inside find movie', movie)
    axios.get (`https://api.themoviedb.org/3/search/movie?api_key=7fdb726f9ddada6e78cdde82cb44be0b&language=en-US&query=${movie}`)
      .then(({data}) => {
        axios.get(`https://api.themoviedb.org/3/movie/${data.results[0].id}?api_key=7fdb726f9ddada6e78cdde82cb44be0b&language=en-US`)
        .then(({data}) => {
          var movieObj = {
            title: data.title,
            year: parseInt(data.release_date.substring(0,4)),
            runtime: data.runtime,
            imdbRating: data.vote_average,
            buttonStyle: 'white_button',
            watched: 'false',
          }
          this.addMovie(movieObj)
        })
      })
      .catch(function (error) {
        console.log(error)
      });

  }

  addMovie(movie) {
    axios.post('/api/movies', movie)
      .then(() => {
        this.fetchMovies()
      })
  }

  fetchMovies() {
    axios.get('/api/movies')
      .then(({data}) => {
        this.setState({
          movies: data
        })
      })
    console.log(this.state.movies)
  }

  filter(searchPhrase) {

    console.log('i am right before search', searchPhrase)

    axios.post('/api/movies/search', searchPhrase)
    .then(({data}) => {
      this.setState({
        movies: data
      })
    })
  }

  //takes in true or false
  watchFilter(watched) {
    console.log('i made it into watch filter with:', watched)

    if (watched.term === 'true') {
      axios.get('/api/movies/watched')
      .then(({data}) => {
        this.setState({
          movies: data
        })
        console.log(this.state.movies)
      });

    } else {
      axios.get('/api/movies/toWatch')
      .then(({data}) => {
        this.setState({
          movies: data
        })
        console.log(this.state.movies)
      });

    }





  }

  adjustWatched (movie) {
    axios.put('/api/movies', movie)
      .then(() => {
        this.fetchMovies()
      })
  }


  render () {
    return (
      <div>
      <h1>MovieList</h1>
      <AddMovie findMovie = {this.findMovie}/>
      <WatchFilters watchFilter = {this.watchFilter}/>
      <Search filter={this.filter}/>
      <br/>
      <MovieList movies = {this.state.movies} adjustWatched={this.adjustWatched}/>
      </div>

    )
  }

}

export default App;

//QUESTION: is this the proper way to get API information or should I use axios?
//QUESTION: how to be able to access get results without using states?
  // addMovie(movie) {

  //   //search for movie ID
  //   var urlMovieId = `https://api.themoviedb.org/3/search/movie?api_key=7fdb726f9ddada6e78cdde82cb44be0b&language=en-US&query=${movie}`
  //   fetch(urlMovieId)
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       this.setState ({
  //         movieId: result.results[0].id
  //       }, () => {
  //         var urlMovieDetails = `https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=7fdb726f9ddada6e78cdde82cb44be0b&language=en-US`
  //         fetch(urlMovieDetails)
  //         .then(res => res.json())
  //         .then( (result) => {

  //           var movieObj = {
  //             title: result.title,
  //             watched: 'false',
  //             year: result.release_date.substring(0,4),
  //             runtime: result.runtime,
  //             metascore: 12.3,
  //             imdbRating: result.vote_average,
  //             buttonStyle: 'white_button'
  //           }
  //           const newMovieList = [...this.state.movies]
  //           newMovieList.push(movieObj)
  //           this.setState({
  //             movies: newMovieList
  //           })
  //         })
  //       })
  //   },
  //     (error) => {
  //       console.log(error)
  //     }
  //   )
  // }