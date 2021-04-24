import React from 'react';

const Loader = () => {
  return (
    <div id="building" style={{ fontSize: '12px' }}>
      <div id="blocks">
        <div className="b" id="b1" />
        <div className="b" id="b2" />
        <div className="b" id="b3" />
        <div className="b" id="b4" />
      </div>
      <div id="caption">Your product is almost ready...</div>
    </div>
  );
};

export default Loader;
