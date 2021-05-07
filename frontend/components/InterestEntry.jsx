import React from 'react';

const InterestEntry = (props) => (
  <div className="interest-entry" onClick={props.updateSelection}>
    <span>{ props.item }</span>
    <span style={{ display: 'none' }}>{ props.type }</span>
  </div>
)

export default InterestEntry;