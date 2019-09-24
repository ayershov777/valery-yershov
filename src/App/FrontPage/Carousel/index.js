import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './index.css';

function CarouselComponent(props) {
  return (
    <Carousel className="Carousel" interval="3000">
      {props.slideshow.map((photo, idx) => {
        console.log(photo);
        return (
        <Carousel.Item key={`carousel-image-${idx}`}>
          <img src={process.env.PUBLIC_URL + photo.src} alt={photo.alt} />
        </Carousel.Item>
      )})}
    </Carousel>
  );
}

export default CarouselComponent;
