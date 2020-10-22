import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }


  handleSubmit(event) {
    this.props.addMovie(this.state.value)
    event.preventDefault();
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add movie title here"/>
      <input type="submit" value="Add" />
      </form>
    )
  }

}

export default AddMovie;