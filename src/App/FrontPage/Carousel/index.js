import React from 'react';
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const slideshow = {
  seahorse: process.env.PUBLIC_URL + '/images/collections/seaside/seahorse.png',
  chameleon: process.env.PUBLIC_URL + '/images/collections/seaside/014.jpg',
  octopus: process.env.PUBLIC_URL + '/images/collections/seaside/020.jpg',
  fish: process.env.PUBLIC_URL + '/images/collections/seaside/023.jpg',
  battle: process.env.PUBLIC_URL + '/images/collections/dreams/016.jpg',
};

function CarouselComponent() {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      padding: '30px',
      // marginTop: '5vh'
    }}>
      <Carousel infinite responsive={responsive}>
        {Object.keys(slideshow).map(image => (
          <div
            key={image} 
            style={{
              display: 'flex',
              flexDirection: 'vertical',
              justifyContent: 'center',
              height: '100%',
              // backgroundColor: 'black',
            }}
          >
            <img
              src={slideshow[image]}
              alt={`3D painting of ${pickAOrAn(image)} ${image}`}
              style={{
                display: 'block',
                margin: 'auto',
                width: '70%',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

// if the word starts with a vowel besides Y then pick 'an', otherwise pick 'a'
function pickAOrAn(word) {
  const firstLetter = word.charAt(0).toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(firstLetter) ? 'an' : 'a';
}

export default CarouselComponent;
