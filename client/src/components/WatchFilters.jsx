import React from 'react';

class WatchFilters extends React.Component {
  constructor (props) {
    super(props)

    this.runFilter = this.runFilter.bind(this)

  }

  runFilter (event) {
    var filter = {term: event.target.value}
    this.props.watchFilter(filter)
  }


  render () {
    return (
      <div>
      <button className='watched' onClick={this.runFilter} value = 'true'>
      Watched
      </button>
      <button className='toWatch' onClick={this.runFilter} value = 'false'>
      To Watch
      </button>
      </div>
    )
  }


}

export default WatchFilters