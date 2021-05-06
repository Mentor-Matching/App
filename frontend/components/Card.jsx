import React from 'react';
import dalme from '../static/dalme.png'; // TODO: Get image source from backend
import favIcon from '../static/favorite_icon.png';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
      mentor: {
        imageSource: dalme
      }
    }
  }
    
  componentDidMount() {
  }

  componentWillReceiveProps(props) {
    this.setState({ mentor: props.mentor });  
  }

  render() {
    let mentor = this.state.mentor

    return (
              <div className="card-container">
                  <a className="card-container" href="/mentor">
                      <h4 className="card-header">
                        좋은 기술로 일상의 문제 해결하기
                      </h4>
                      <div className="card-image-container">
                        <img className="fav-icon" src={favIcon} />
                        <div className="card-frame-circle">
                          <img className="card-image" src={mentor.imageSource} />
                        </div>
                      </div>
                      <div className="card-description">
                        <p className="mentor-name">서달미</p>
                        <p className="mentor-position">삼산텍 CEO</p>
                        <p className="mentor-interests">채용, 투자유치, IR 등</p>
                      </div>
                  </a>
              </div>
    )
  }
}   

export default Card;

