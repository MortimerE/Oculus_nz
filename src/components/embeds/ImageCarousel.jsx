import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageCarousel = ({ images }) => {
  return (
    <Carousel autoPlay interval={3000} infiniteLoop useKeyboardArrows dynamicHeight>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="Carousel slide" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;


