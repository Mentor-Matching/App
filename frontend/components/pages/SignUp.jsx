import React from 'react';
import axios from 'axios';
import Layout from '../Layout'

class SignUp extends React.Component {
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
      <Layout>
        <h1>Sign Up page</h1>
        <p>{test}</p>
        <p>updates</p>
      </Layout>
    )
  }
}

export default SignUp