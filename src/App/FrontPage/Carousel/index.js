import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './index.css';

function CarouselComponent(props) {
  return (
    <Carousel className="Carousel" interval={false}>
      {props.slideshow.map((photo, idx) => (
        <Carousel.Item key={`carousel-image-${idx}`}>
          {idx > 0
          ? <img src={process.env.PUBLIC_URL + photo.src} alt={photo.alt} />
          : <video controls={true} autoplay="true" muted>
              <source src={photo} type="video/mp4" />
            </video>}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
