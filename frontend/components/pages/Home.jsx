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
        <div className="main-content-container">

          <div className="inner-container">
            {/* Banner Section */}
            <div className="banner-container">
              <div className="banner-rectangle-1">
              </div>
              <div className="banner-rectangle-2">
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
          <div className="inner-container">
            <div className="card-list-container">
              <Card />
            </div>
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