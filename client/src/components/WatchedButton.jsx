import React from 'react';

class WatchedButton extends React.Component {
  constructor (props) {
    super(props)
    //errors if i pass in this.props.watched
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
      console.log('i made it pass here')
    } else {
      this.setState ({
        buttonStyle: 'white_button'
      })
    }

    var newMovieObj = {'title': this.props.title, 'watched' : this.state.watched}
    this.props.adjustWatched(newMovieObj, this.props.index)
  }

  render ()  {
    return (
      <button className={this.state.buttonStyle} onClick={this.toggleWatched}>
        Watched
      </button>
    )
  }

}


export default WatchedButton