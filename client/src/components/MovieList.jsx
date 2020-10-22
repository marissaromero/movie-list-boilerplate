import React from 'react';

class MovieList extends React.Component {

  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div >
        <div className="outer">
        {this.props.movies.map ((movie, idx) => (
        <p key={movie.title+idx} className="box">{movie.title}</p>
        ))}
        </div>
      </div>

    )
  }
}

export default MovieList;