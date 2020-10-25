import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.filter(this.state.value)
    //event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
      <input type="submit" value="Go!" />
      </form>
    )
  }

}

export default Search;