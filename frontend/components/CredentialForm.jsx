import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const CredentialForm = (props) => {

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
        onSubmit={(values, actions) => {
          if (values.password !== values.confirmPassword) {
            return "비밀번호가 일치하지 않습니다. 다시 입력해주세요"
          }
          alert(JSON.stringify(values))
          actions.setSubmitting(false)
        }}
      >
        <Form className="form"
          // onSubmit={props.handleSubmit}
          >
          <label htmlFor="username">아이디</label>
          <Field id="username" name="username" placeholder="" />
          <label htmlFor="password">비밀번호</label>
          <Field id="password" name="password" type="password" placeholder="" />
          <label htmlFor="confirmPassword">비밀번호 재확인</label>
          <Field id="confirmPassword" name="confirmPassword" type="password" placeholder="" />
          <label htmlFor="birthdate">생년월일</label>
          <Field id="birthdate" name="birthdate" type="date" placeholder="" />
          <label htmlFor="phone">휴대전화</label>
          <Field id="phone" name="phone" placeholder="111-1111-1111" />
          <button className="submit submit-full submit-color" type="submit">가입하기</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CredentialForm