import React from 'react';
import Layout from '../Layout'
import InterestList from '../InterestList'
// import smsIcon from '../../static/sms_outlined.svg'
// import mentee from '../../static/Mentee.jpg'

class MenteeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '김지원',
      summary: '기술과 인간 사이의 접점에 관심이 많습니다. 최근 인공지능에 대한 기사를 많이 접해 더 알아가고 싶습니다. 특히 인공지능 기술의 활용이 실제 우리 생활에 어떤 변화를 일으킬 수 있는지 궁금합니다.',
      interests: ['인공지능', '마케팅', '공상과학소설', '수학', '환경', '게임', '독서', '우주', '여행'],
      image: 'https://lh3.google.com/u/0/d/1L7HXSFb8QZSTQXmmRWSMiwiqdvnCz1HP=w1746-h1683-iv2'
    }
  }

  render() {

    return (
      <Layout>
        <div className="mentee-profile-wrapper">
          <div className="profile-image-reviews-wrapper">
            <div className="profile-image-container">
              <div className="circular-image-format">
                <img src={this.state.image} className="profile-image" />
              </div>
              <p className="temp-cred">
                <span>Photo by </span>
                <a href="https://unsplash.com/@leeminfu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Le Minh Phuong
                </a> 
                <span> on </span> 
                <a href="https://unsplash.com/s/photos/asian-woman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </div>
            <div className="profile-reviews-container">
              <div className="profile-reviews">
                <a className="profile-reviews-button" href="#">
                  <span className="profile-reviews-span">
                    <img className="sms-icon" src="https://lh3.google.com/u/0/d/1EwIb2f9rhtoTg3-c2_2_o2ef2cxu98yZ=w1746-h1683-iv1"/> 
                    리뷰보기
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="profile-details-wrapper">
            <div className="banner-container">
              <div className="banner-rectangle-wrapper">
                <div className="banner-rectangle--top">
                </div>
                <div className="banner-rectangle--bottom">
                </div>
              </div>
              <div className="banner-content-wrapper">
                <h3 className="banner-title">
                  안녕하세요, 저는 김지원 입니다!
                </h3>
                <p className="banner-text">
                  기술과 인간 사이의 접점에 관심이 많습니다. 최근 인공지능에 대한 기사를 많이 접해 더 알아가고 싶습니다. 특히 인공지능 기술의 활용이 실제 우리 생활에 어떤 변화를 일으킬 수 있는지 궁금합니다.
                </p>
                {/* <p className="banner-text">
                    - 쿠르트 레빈, 심리학자
                    </p> */}
                <div className="profile-keywords-wrapper">
                  <InterestList inventory={this.state.interests} />
                </div>
              </div>
            </div>
            {/* <h2 className="profile-details-name"></h2>
            <p className="profile-details-summary">
              
            </p> */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default MenteeProfile;