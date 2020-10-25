import React from 'react';

class WatchFilters extends React.Component {
  constructor (props) {
    super(props)

    this.runFilter = this.runFilter.bind(this)

  }

  runFilter (event) {
    this.props.watchFilter1(event.target.value)
  }


  render () {
    return (
      <div>
      <button className='watched' onClick={this.runFilter} value = 'true'>
      Watched
      </button>
      <button className='toWatch' onClick={this.runFilter} value = 'false'>
      To Watched
      </button>
      </div>
    )
  }


}

export default WatchFilters