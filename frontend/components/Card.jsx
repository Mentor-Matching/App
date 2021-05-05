import React from 'react';
import dalme from '../static/mentor_seodalme.png'; // TODO: Get image source from backend

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
              <div className="card-wrapper">
                  <a href="/mentor">
                      <img className="card-image" src={mentor.imageSource} />
                      <div className="card-description">
                        DALME
                      </div>
                  </a>
              </div>
    )
  }
}   

export default Card;

