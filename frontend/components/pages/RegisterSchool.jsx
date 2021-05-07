import React from 'react';
import axios from 'axios';
import Layout from '../Layout';
import { Formik, Field, Form } from 'formik';
import submissionIcon from '../../static/add-photo.png';
import InterestList from '../InterestList';

class RegisterSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 1,
      profileImage: '',
      name: '',
      school: '',
      academic: '',
      fieldInventory: ['교육', '비즈니스', '엔지니어', '빅데이터', '마케팅', '세일즈', '벤처', 'UX 디자인', '그래픽 디자인', '건강', 'IT', '요리', '음악', '방송', '운동', '영상디자인', '법률', '공학', '연기', '인공지능'],
      academicInventory: ['가정교육과', '간호과', '건축공학과', '경영학과', '게임공학과', '경제학과', '컴퓨터학과', '공연예술과', '고고학과', '공업디자인', '경호학과'],
      personalPreferenceInventory: ['미술', '독서', '음식', '운동', '영화', '게임', '패션', '건강', '주식', '환경', '우주', '파티', '경제', '낚시', '웹툰'],
      selectedField: [],
      selectedAcademic: [],
      selectedPreference: []
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.updateSelection = this.updateSelection.bind(this)
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

  submitSchool() {

  }

  nextPage(e) {
    e.preventDefault();
    let nextPageIndex = this.state.currPage + 1
    if (nextPageIndex === 2) {
      document.getElementById('basic-info-wrapper').classList.toggle('inactive')
      document.getElementById('interest-form-wrapper').classList.toggle('inactive')
    } else if (nextPageIndex === 3) {
      document.getElementById('interest-form-wrapper').classList.toggle('inactive')
      document.getElementById('special-interest-wrapper').classList.toggle('inactive')
    }
    this.setState({ currPage: nextPageIndex })
  }

  prevPage(e) {
    e.preventDefault();
    let prevPageIndex = this.state.currPage - 1
    if (prevPageIndex === 1) {
      document.getElementById('interest-form-wrapper').classList.toggle('inactive')
      document.getElementById('basic-info-wrapper').classList.toggle('inactive')
    } else if (prevPageIndex === 2) {
      document.getElementById('special-interest-wrapper').classList.toggle('inactive')
      document.getElementById('interest-form-wrapper').classList.toggle('inactive')
    }
    this.setState({ currPage: prevPageIndex })
  }

  updateSelection(e) {
    window.console.log('selection triggered')
    // e.prevendDefault();
    e.currentTarget.classList.toggle('selected')
    let data = e.target.children;

    console.log(data);
    // if (e.currentTarget === 'field') {
    //   this.setState(prevState => { selectedField: [...prevState.selectedField] })
    // }
  }

  render() {
    let display, prevButton, nextButton;

    return (
      <Layout>
        <div id="basic-info-wrapper">
          <Formik
            id="basic-info-form"
            initialValues={{
              file: '',
              name: '',
              school: '',
              academic: '',
            }}
            onSubmit={(values, actions) => {
              // alert(JSON.stringify(values))
              // actions.setSubmitting(false)
              this.nextPage()
            }}
          >
            {formProps => (
              <Form className="form"
                onSubmit={this.nextPage}
                >
                <div className="profile-image-wrapper">
                  <label className="profile-image-label" htmlFor="profileImage">
                    프로필
                    <div className="profile-image-label-inner">
                      <div className="orange-ellipse">
                        <img className="image-icon" src={submissionIcon} />
                      </div>
                    </div>
                  </label>
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
                </div>
                <label htmlFor="name">이름</label>
                <Field id="name" name="name" placeholder="" />
                <label htmlFor="school">학교</label>
                <Field id="school" name="school" placeholder="" />
                <label htmlFor="academic">희망전공</label>
                <Field id="academic" name="academic" placeholder="" />
                <button className="submit submit-full submit-color" type="submit">저장 후 다음 페이지</button>
              </Form>
            )}
          </Formik>
        </div>
        <div id="interest-form-wrapper" className="inactive">
          <div className="custom-form">
            <p>어떤 분야의 멘토를 만나고 싶나요?</p>
            <div className="interest-entry-listing">
              <InterestList 
                inventory={this.state.fieldInventory}
                type="field"
                updateSelection={this.updateSelection}/>
            </div>
            <p>어떤 학과에 관심이 있나요?</p>
            <div className="interest-entry-listing">
              <InterestList
                inventory={this.state.academicInventory}
                type="academic"
                updateSelection={this.updateSelection} />
            </div>
            <p>요즘 나의 최대 관심사</p>
            <div className="interest-entry-listing">
              <InterestList
                inventory={this.state.personalPreferenceInventory}
                type="interest"
                updateSelection={this.updateSelection} />
            </div>
            <div className="button-wrapper">
              <button className="submit submit-half submit-color" onClick={this.prevPage}>
                이전 페이지
              </button>
              <button className="submit submit-half submit-color" onClick={this.nextPage}>
                다음 페이지
              </button>
            </div>
          </div>
        </div>
        <div id="special-interest-wrapper" className="inactive">
          <Formik
            id="interest-form"
            initialValues={{
              project: '',
              specialInterest: ''
            }}
            onSubmit={(values, actions) => {
              alert("Under Development")
              // actions.setSubmitting(false)
              // window.location.href = '/mentee/profile'
            }}
          >
            {formProps => (
              <Form className="form"
                onSubmit={formProps.handleSubmit}
                >
                <label htmlFor="project">요즘 하고 있는 프로젝트가 있나요?</label>
                <Field id="project" name="project" placeholder="" className="input-textfield" type="text" />
                <label htmlFor="special-interest">나만의 덕질! 무언가를 깊이 파 본 경험이 있나요?</label>
                <Field id="special-interest" name="special-interest" placeholder="" className="input-textfield" type="text" />
                <div className="button-wrapper">
                  <button className="submit submit-half submit-color" onClick={this.prevPage}>이전 페이지</button>
                  <button className="submit submit-half submit-color" type="submit">다음 페이지</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    )
  }
}

export default RegisterSchool