import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ImageSlider({ logement }) {
    
  return (
    
    <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
      {logement.pictures.map((picture, index) => (
        <div key={index}>
          <img src={picture} className='logement-img' alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default ImageSlider;
