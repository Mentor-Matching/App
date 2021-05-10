import React from 'react';
import MentorCard from './MentorCard';

const MentorCardListing = (props) => (
  <div className="mentor-card-listing-wrapper">
    {props.mentors.map((data, index) => {
      return <MentorCard mentors={data} key={index} />
    })}
  </div>
)

export default MentorCardListing;