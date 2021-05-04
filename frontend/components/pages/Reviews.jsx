import React from 'react';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    }
  }

  componentDidMount() {
    axios
      .get('/test')
      .then(data => {
        this.setState({ test: data.data })
      })
      .catch(err => {
        this.setState({ test: err })
      })
  }

  render() {
    let test = this.state.test;
    console.log(test)

    return (
      <>
        <h1>Reviews page</h1>
        <p>{test}</p>
      </>
    )
  }
}

export default Reviews