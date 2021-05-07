import React, { useEffect } from 'react'
import { Formik, Field, Form, useFormik } from 'formik';
import axios from 'axios';
import { SignUpContext } from './SignUpContext'

const CredentialForm = (props) => {
  const { nextPage } = props;
  console.log(props)
  console.log('test')
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthdate: '',
      phone: ''
    },
    onSubmit: values => {
      console.log(JSON.stringify(values))
      props.nextPage()
    }
  })
  return (
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
        // onSubmit={props.nextPage}
        // onSubmit={(values, actions, props) => {
          // if (values.password !== values.confirmPassword) {
          //   return "비밀번호가 일치하지 않습니다. 다시 입력해주세요"
          // }
          // alert(JSON.stringify(values))
          // props.nextPage();
        // }}
      >
        {/* {formProps => { */}
        {/* <SignUpContext.consumer> */}
          <Form className="form"
            onSubmit={formik.handleSubmit}
            >
            <label htmlFor="username">아이디</label>
            <input id="username" name="username" placeholder=""
              onChange={formik.handleChange}
              value={formik.values.username} />
            <label htmlFor="password">비밀번호</label>
            <input id="password" name="password" type="password" placeholder="" 
              onChange={formik.handleChange}
              value={formik.values.password} />
            <label htmlFor="confirmPassword">비밀번호 재확인</label>
            <input id="confirmPassword" name="confirmPassword" type="password" placeholder=""
              onChange={formik.handleChange}
              value={formik.values.confirmPassword} />
            <label htmlFor="birthdate">생년월일</label>
            <input id="birthdate" name="birthdate" type="date" placeholder="" 
              onChange={formik.handleChange}
              value={formik.values.birthdate} />
            <label htmlFor="phone">휴대전화</label>
            <input id="phone" name="phone" placeholder="111-1111-1111" 
              onChange={formik.handleChange}
              value={formik.values.phone}/>
            <button className="submit submit-full submit-color" 
              type="submit" 
              onClick={props.nextPage}>
                가입하기
            </button>
          {/* </form> */}
        {/* </SignUpContext.consumer> */}
          </Form>
        {/* }} */}
      </Formik>
    </div>
  )
}

export default CredentialForm