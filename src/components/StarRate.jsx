import React from 'react';

const StarRate = ({ rating }) => {
  const maxRating = 5;
  const fullStars = rating;
  const emptyStars = maxRating - fullStars;

  return (
    <div className="rate-container">
      {[...Array(fullStars)].map((_, index) => (
        <i key={index} className="fa-solid fa-star star full"></i>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className="fa-solid fa-star star"></i>
      ))}
    </div>
  );
};

export default StarRate;
