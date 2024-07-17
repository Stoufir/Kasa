import React, { useState } from "react";
import rightArrow from '../assets/Arrow-right.png';
import leftArrow from '../assets/Arrow-left.png';

function ImageSlider({ logement }) {
  const [pictureIndex, setPictureIndex] = useState(0);

  const nextPicture = () => {
    setPictureIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const prevPicture = () => {
    setPictureIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
  };

  return (
    <div className="carousel-container">
      <button className="left-arrow" onClick={prevPicture}>
        <img src={leftArrow} alt="Previous" />
      </button>
      <img 
        src={logement.pictures[pictureIndex]} 
        className="logement-img" 
        alt={`Aperçu ${pictureIndex + 1}`} 
      />
      <div className="counter">
          {pictureIndex + 1}/{logement.pictures.length}
        </div>
      <button className="right-arrow" onClick={nextPicture}>
        <img src={rightArrow} alt="Next" />
      </button>
    </div>
  );
}

export default ImageSlider;
