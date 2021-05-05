import React from 'react';
import axios from 'axios';
import Layout from '../Layout';
import Card from '../Card';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: []
    }
  }

  componentDidMount() {
    // TODO: Get mentor info
    axios
      .get('/mentors/recommended')
      .then(data => {
        this.setState(prevState => ({
          mentors: [...prevState.mentors, data.data]
        }))
      })
      .catch(err => {
        console.debug("ERROR: ", err)
      })
  }

  render() {
    return (
      <Layout>
        <h1>Home page</h1>
        <Card />
      </Layout>
    )
  }
}

export default Home;