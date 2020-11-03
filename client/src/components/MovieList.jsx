import React from 'react';
import WatchedButton from './WatchedButton.jsx'
import InfoPanel from './InfoPanel'

class MovieList extends React.Component {

  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div >
        <div className="outer">
        {this.props.movies.map ((movie, idx) => (
        <div>
        <h5 key={movie.title+idx} className="box" id="divLeft"> {movie.title}
        <InfoPanel id="divRight" watched={movie.watched} adjustWatched = {this.props.adjustWatched} title = {movie.title} index = {idx} year={movie.year} runtime={movie.runtime} metascore={movie.metascore} imdbRating = {movie.imdbRating}/>
        </h5>
        </div>
        ))}
        </div>
      </div>

    )
  }
}

export default MovieList;