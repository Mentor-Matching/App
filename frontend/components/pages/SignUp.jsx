import React from 'react';
import axios from 'axios';
import Layout from '../Layout';
import PopUp from '../PopUp';
import CredentialForm from '../CredentialForm';
import SchoolForm from '../SchoolForm';
import InterestForm from '../InterestForm';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 1,
      username: '',
      email: '',
      password: '',
      birthdate: '',
      phone: '',
      name: '',
      school: '',
      field: '',
      academic: '',
      interest: ''
    }

    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
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

  nextPage() {
    this.setState(prevState => { currPage: prevState.currPage + 1 })
  }

  prevPage() {
    this.setState(prevState => { currPage: prevState.currPage - 1 })
  }

  submitCredential() {

  }

  submitSchool() {

  }

  submitInterest() {

  }

  render() {
    let display, prevButton, nextButton;
    // if (this.state.currPage === 1) {
    //   display = <CredentialForm />
    // } else if (this.state.currPage === 2) {
    //   display = <SchoolForm />
    // } else if (this.state.currPage === 3) {
    //   display = <InterestForm/>
    // }

    return (
      <Layout>
        {/* <PopUp> */}
        {this.state.currPage === 1 ? <CredentialForm 
                                        nextPage={this.nextPage}
                                        prevPage={this.prevPage}
                                      /> : ''}
        {this.state.currPage === 2 ? <SchoolForm
                                        nextPage={this.nextPage}
                                        prevPage={this.prevPage}
                                      /> : ''}
        {this.state.currPage === 3 ? <InterestForm
                                        nextPage={this.nextPage}
                                        prevPage={this.prevPage}
                                      /> : ''}
        {/* </PopUp> */}
      </Layout>
    )
  }
}

export default SignUp