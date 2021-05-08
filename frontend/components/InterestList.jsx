import React from 'react';
import InterestEntry from './InterestEntry';

const InterestList = (props) => (
  <div className="interest-entry-listing">
    {props.inventory.map((item, index) => {
      return <InterestEntry key={index}
        type={props.type ? props.type : 'general'}
        updateSelection={props.updateSelection ? props.updateSelection : ''}
        item={item} />
    })}
  </div>
)

export default InterestList;