import React from 'react';
import dalme from '../static/dalme.png'; // TODO: Get image source from backend
import favIcon from '../static/favorite_icon.png';

const MentorCard = (props) => {
  const { header, name, position, interests, image } = props.mentors;
  
  return (
    <div className="card-container">
      <a className="card-container" href="/mentor">
        <h4 className="card-header">
          {header}
        </h4>
        <div className="card-image-container">
          <img className="fav-icon" src={favIcon} />
          <div className="card-frame-circle">
            <img className="card-image" src={image} />
          </div>
        </div>
        <div className="card-description">
          <p className="mentor-name">{name}</p>
          <p className="mentor-position">{position}</p>
          <p className="mentor-interests">{interests}</p>
        </div>
      </a>
    </div>
  )
}   

export default MentorCard;

