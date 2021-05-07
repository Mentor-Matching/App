import React from 'react'

const SchoolForm = () => {


  return (
    <div>
      <Formik
        id="interest-form"
        initialValues={{
          file: '',
          name: '',
          school: '',
          academic: '',
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values))
          actions.setSubmitting(false)
        }}
      >
        <Form className="form"
          // onSubmit={props.handleSubmit}
          >
          <input
              name="profileImage"
              id="profileImage"
              className="profile-image-input"
              type="file"
              accept="image/jpg,image/jpeg,image/png"
              onChange={(e) => {
                setFieldValue('file', e.currentTarget.files[0]);
              }}
              style={{ display: 'none' }}
            />
          <label htmlFor="name">이름</label>
          <Field id="name" name="name" placeholder="" />
          <label htmlFor="school">학교</label>
          <Field id="school" name="school" placeholder="" />
          <label htmlFor="academic">희망전공</label>
          <Field id="academic" name="academic" placeholder="" />
          <button className="submit submit-half submit-color" type="submit">저장 후 다음 페이지</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SchoolForm;