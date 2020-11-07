import React from 'react';

class InfoPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      watched: this.props.movie.watched,
      buttonStyle: this.props.movie.buttonStyle,
    }

    this.toggleWatched = this.toggleWatched.bind(this);
  }



  toggleWatched () {
    if (this.state.watched === 'false') {
      this.setState ({
      watched: 'true'
      })
    } else {
      this.setState ({
        watched: 'false'
        })

    }

    if (this.state.watched === 'true') {
      this.setState ({
        buttonStyle: 'green_button'
      })
    } else {
      this.setState ({
        buttonStyle: 'white_button'
      })
    }

    var newMovieObj = {
      title: this.props.movie.title,
      year: this.props.movie.year,
      runtime: this.props.movie.runtime,
      imdbRating: this.props.movie.imdbRating,
      buttonStyle: this.state.buttonStyle,
      watched: this.state.watched
    }

    this.props.adjustWatched(newMovieObj)


  }

  render() {
    return (
      <div>
        <span>Year:{this.props.movie.year}</span><br/>
        <span>Runtime:{this.props.movie.runtime}</span><br/>
        <span>imdbRating:{this.props.movie.imdbRating}</span><br/>
        <span>Watched  <button className = {this.state.buttonStyle} onClick={this.toggleWatched} id='watched'></button>
        </span>
      </div>


    )
  }


}

export default InfoPanel;