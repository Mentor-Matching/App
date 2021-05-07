import React from 'react';
import Layout from '../Layout'

class MenteeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Layout>
        <div className="mentee-profile-wrapper">
          <div className="profile-image-reviews-wrapper">
            <div className="profile-image-container">
              <img src className="profile-image" />
            </div>
            <div className="profile-reviews-container">
              <div className="profile-reviews">
                <span>리뷰보기</span>
              </div>
            </div>
          </div>
          <div className="profile-details-wrapper">
            <h2 className="profile-details-name">안녕하세요, 저는 김지원 입니다!</h2>
            <p className="profile-details-summary">
              기술과 인간 사이의 접점에 관심이 많습니다. 최근 인공지능에 대한 기사를 많이 접해 더 알아가고 싶습니다. 특히 인공지능 기술의 활용이 실제 우리 생활에 어떤 변화를 일으킬 수 있는지 궁금합니다.
            </p>
            <div className="profile-keywords-wrapper"></div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MenteeProfile;