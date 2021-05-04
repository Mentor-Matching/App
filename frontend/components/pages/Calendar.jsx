import React from 'react';
import axios from 'axios';

class Calendar extends React.Component {
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
        <h1>Calendar page</h1>
        <p>{test}</p>
      </>
    )
  }
}

export default Calendar