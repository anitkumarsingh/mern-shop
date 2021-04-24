import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text, color }) => {
  return (
    <div>
      <span style={{ color }}>
        {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : FaRegStar}
      </span>
      <span style={{ color }}>
        {value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : FaRegStar}
      </span>
      <span style={{ color }}>
        {value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : FaRegStar}
      </span>
      <span style={{ color }}>
        {value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : FaRegStar}
      </span>
      <span style={{ color }}>
        {value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : FaRegStar}
      </span>
      <span> {text}</span>
    </div>
  );
};
Rating.defaultProps = {
  color: '#FFD700'
};
export default Rating;
