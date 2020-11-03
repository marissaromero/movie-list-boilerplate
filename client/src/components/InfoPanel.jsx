import React from 'react';

class InfoPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      watched: this.props.watched,
      buttonStyle: 'white_button',
    }

    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched () {
    //toggle true of false
    this.setState ({
      watched: !this.state.watched
    })
    if (this.state.watched) {
      this.setState ({
        buttonStyle: 'green_button'
      })
    } else {
      this.setState ({
        buttonStyle: 'white_button'
      })
    }

    var newMovieObj = {title: this.props.title, watched: this.state.watched, runtime: this.props.runtime, metascore: this.props.metascore, imdbRating: this.props.imdbRating, year: this.props.year}
    this.props.adjustWatched(newMovieObj, this.props.index)
  }

  render() {
    return (
      <div>
        <span>Year:{this.props.year}</span><br/>
        <span>Runtime:{this.props.runtime}</span><br/>
        <span>Metascore:{this.props.metascore}</span><br/>
        <span>imdbRating:{this.props.imdbRating}</span><br/>
        <span>Watched  <button className = {this.state.buttonStyle} onClick={this.toggleWatched}id='watched'></button>
        </span>
      </div>


    )
  }


}

export default InfoPanel;