import React from 'react';
import CarouselComponent from './Carousel';
import TimelapseComponent from './Timelapse';

const collectionCovers = {
  seaside: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna etiam tempor. Imperdiet sed euismod nisi porta lorem mollis.',
    source: process.env.PUBLIC_URL + '/images/collections/seaside/012.jpg'
  },
  dreams: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Lacus vestibulum sed arcu non odio.',
    source: process.env.PUBLIC_URL + '/images/collections/dreams/017.jpg'
  },
  underground: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in. Varius quam quisque id diam vel quam.',
    source: process.env.PUBLIC_URL + '/images/collections/underground/025.jpg'
  },
};

function FrontPage() {
  return (
    <div>
      <CarouselComponent />
      <TimelapseComponent />
      
      <div 
        style={{
          backgroundColor: 'rgba(52,58,64, 0.9)',
          width: '95%',
          margin: 'auto',
          padding: '1.25%',
          display: 'flex',
          flexDirection: 'vertical',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <h3 
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: '3vw',
            lineHeight: '2'
          }}
        >
          {/* Check out Valery's modern collections */}
          Valery is currently working on these three collections
        </h3>
        {Object.keys(collectionCovers).map((collection, idx) => {
          const image = (
            <img
              src={collectionCovers[collection].source}
              alt={`${collection} collection cover`}
              style={{
                width: "40%"
              }}>
            </img>
          );

          const description = (
            <div
              style={{
                width: '55%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'vertical',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                margin: 'auto 0',
                fontSize: '1.3vw',
                lineHeight: '1.5em',
                fontFamily: 'Mukta, sans-serif',
                color: '#343A40',
              }}
            >
              <h3
                style={{
                  width: '100%',
                  textTransform: 'capitalize',
                  fontSize: '3vw'
                }}
              > 
                {collection} 
              </h3>
              <p>{collectionCovers[collection].description}</p>
            </div>
          );
              
          return (
            <div
              style={{
                margin: "1.25%",
                width: '80%',
                borderRadius: '4px',
                background: 'rgb(255,235,205)',
                background: 'linear-gradient(90deg, rgba(255,235,205,1) 0%, rgba(255,255,255,1) 100%)',
                // border: '1px solid #1A1D20',
                padding: "2vh",
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              {idx % 2 === 0
              ? <> {image} {description} </>
              : <> {description} {image} </>}
            </div>
          );

        })}
      </div>

    </div>
  );
}

export default FrontPage;
