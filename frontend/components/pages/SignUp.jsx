import React from 'react';
import axios from 'axios';
import Layout from '../Layout';
import { Formik, Field, Form } from 'formik'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      birthdate: '',
      phone: ''
    }

    this.submitCredential = this.submitCredential.bind(this)
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

  submitCredential(e) {
    e.preventDefault();
    console.log(e.target)
  }

  validatePassword(value) {

  }

  render() {

    return (
      <Layout>
        {/* <PopUp> */}
        <div>
          <Formik
            id="credential-form"
            initialValues={{
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
              birthdate: '',
              phone: ''
            }}
            onSubmit={(values, actions) => {
              // alert(JSON.stringify(values))
              // console.log(JSON.stringify(values))
              // axios.post('/api/profile/registration')
              window.location.href = '/sign-up/basic-info'
            }}
            // onSubmit={(values, actions, props) => {
              // if (values.password !== values.confirmPassword) {
              //   return "비밀번호가 일치하지 않습니다. 다시 입력해주세요"
              // }
              // alert(JSON.stringify(values))
              // props.nextPage();
            // }}
          >
            {formProps => (
              <Form className="form"
                onSubmit={formProps.handleSubmit}
                >
                <label htmlFor="username">아이디</label>
                <Field id="username" name="username" placeholder=""
                  // onChange={formik.handleChange}
                  // value={formik.values.username} />
                  />
                <label htmlFor="password">비밀번호</label>
                <Field id="password" name="password" type="password" placeholder="" 
                  // onChange={formik.handleChange}
                  // value={formik.values.password} />
                  />
                <label htmlFor="confirmPassword">비밀번호 재확인</label>
                <Field id="confirmPassword" name="confirmPassword" type="password" placeholder=""
                  // onChange={formik.handleChange}
                  // value={formik.values.confirmPassword} />
                  />
                <label htmlFor="birthdate">생년월일</label>
                <Field id="birthdate" name="birthdate" type="date" placeholder="" 
                  // onChange={formik.handleChange}
                  // value={formik.values.birthdate} />
                  />
                <label htmlFor="phone">휴대전화</label>
                <Field id="phone" name="phone" placeholder="111-1111-1111" 
                  // onChange={formik.handleChange}
                  // value={formik.values.phone}/>
                  />
                <button className="submit submit-full submit-color" 
                  type="submit" 
                  // onClick={props.nextPage}>
                  >
                    가입하기
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    )
  }
}

export default SignUp