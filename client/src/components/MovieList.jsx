import React from 'react';
import WatchedButton from './WatchedButton.jsx'

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
        <p key={movie.title+idx} className="box" id="divLeft"> {movie.title}
        <WatchedButton id="divRight" watched={movie.watched} adjustWatched = {this.props.adjustWatched} title = {movie.title} index = {idx}/>
        </p>
        </div>
        ))}
        </div>
      </div>

    )
  }
}

export default MovieList;