import React from 'react'
import InfoPanel from './InfoPanel.jsx'


class Movie extends React.Component {

  constructor(props) {
    super(props)

    this.state = {showInfo: false};

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(state => ({
      showInfo: !state.showInfo
    }));
  }

  render() {
    return (
      <div className = "box">
        <h5 key = {this.props.movie.title+this.props.index}
         onClick={this.handleClick}> {this.props.movie.title} </h5>
        {
          this.state.showInfo &&
          <InfoPanel
          adjustWatched = {this.props.adjustWatched}
          movie = {this.props.movie}
          index = {this.props.index}
          />
        }
      </div>
    )
  }
}

export default Movie