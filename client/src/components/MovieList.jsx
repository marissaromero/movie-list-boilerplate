import React from 'react';
import WatchedButton from './WatchedButton.jsx'
import Movie from './Movie.jsx'

class MovieList extends React.Component {

  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div >
        <div className="outer">
        {this.props.movies.map ((movie, index) => (
          <Movie movie={movie} index ={index} adjustWatched={this.props.adjustWatched}/>
        ))}
        </div>
      </div>

    )
  }
}

export default MovieList;