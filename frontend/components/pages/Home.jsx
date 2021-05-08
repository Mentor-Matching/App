import React from 'react';
import axios from 'axios';
import Layout from '../Layout';
// import MentorCard from '../MentorCard';
import MentorCardListing from '../MentorCardListing'
import dalme from '../../static/dalme.png';
import dosan from '../../static/DoSan.png';
import injae from '../../static/InJae.jpg';
import JiPyeong from '../../static/JiPyeong.jpg';
import Saha from '../../static/Saha.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [
        {
          header: "좋은 기술로 일상의 문제 해결하기",
          name: "서달미",
          position: "삼산텍 CEO",
          interests: "채용, 투자유치, IR 등",
          image: dalme
        },
        {
          header: "인공지능 & 사물인식",
          name: "남도산",
          position: "삼산텍 CTO",
          interests: "기술 및 개발 총괄 리드",
          image: dosan
        },
        {
          header: "직원들의 업무 환경 향상",
          name: "원인재",
          position: "모닝네이처 CEO",
          interests: "경영 총괄",
          image: injae
        },
        {
          header: "투자한 기업이 잘 되게 서포트",
          name: "한지평",
          position: "SH 벤처캐피털 - 수석 팀장",
          interests: "기업가치평가 및 투자",
          image: JiPyeong
        },
        {
          header: "사용자를 위한 프로덕트 디자인",
          name: "정사하",
          position: "삼산텍 UX 디자이너",
          interests: "사용자 리서치 & 디자인",
          image: Saha
        }
      ]
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
        <div className="main-content-container">

          <div className="inner-container">
            {/* Banner Section */}
            <div className="banner-container">
              <div className="banner-rectangle-wrapper">
                <div className="banner-rectangle--top">
                </div>
                <div className="banner-rectangle--bottom">
                </div>
              </div>
              <div className="banner-content-wrapper">
                <h3 className="banner-title">
                  학생 주도 멘토 연결 웹 플랫폼
                </h3>
                <p className="banner-text">
                  "인간의 삶에서 가장 거대한 변수는 주변 사람, 주변 사람이 무엇을 하고 무엇을 하지 않느냐가 우리 행동에 결정적인 영향을 끼친다"
                </p>
                <p className="banner-text">
                  - 쿠르트 레빈, 심리학자
                </p>
              </div>
            </div>
            {/* Search Box Section */}
            <div className="searchbox-container">
              <div className="search-box">
                <input className="search-input" placeholder="멘토, 직업 또는 회사로 검색어를 입력하세요.">
                </input>
                <button className="search-button">
                  멘토 찾기
                </button>
              </div>
            </div>
          </div>

          {/* Card List Section */}
          <div className="inner-container full-width">
            <MentorCardListing mentors={this.state.mentors} />
          </div>

        </div>
        {/* Banner */}
        {/* Search */}
        {/* Card List */}
      </Layout>
    )
  }
}

export default Home;