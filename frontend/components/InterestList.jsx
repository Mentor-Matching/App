import React from 'react';
import InterestEntry from './InterestEntry';

const InterestList = (props) => {
  // let updateSelection = props.updateSelection;
  return (
    <div className="interest-entry-listing">
      {props.inventory.map((item, index) => {
        return <InterestEntry key={index}
          type={props.type}
          updateSelection={props.updateSelection}
          item={item} />
      })}
    </div>
  )
}

export default InterestList;