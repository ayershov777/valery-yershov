import React from 'react'
import Card from 'react-bootstrap/Card';

import { useWindowSize } from '../../../utils';

import './index.css'

function CoversComponent(props) {
  let [width] = useWindowSize();
  return (
    <div className="Covers">
      <h3>Collections</h3>
      {width >= 512
// desktop and tablet
      ?  props.covers.map((cover, idx) => {
          const image = <img src={process.env.PUBLIC_URL + cover.photo.src} alt={cover.photo.alt} />
          const description = (
            <div>
              <h3>“{cover.title}”</h3>
              <p>{cover.description}</p>
            </div>
          );
              
          return (
            <div className="cover" key={`cover-${idx}`}>
              {idx % 2 === 0
              ? <> {image} {description} </>
              : <> {description} {image} </>}
            </div>
          );
        })
// mobile
      : props.covers.map((cover, idx) => (
          <Card className="mobile-cover" key={`cover-${idx}`} style={{ margin: '1vh 0' }}>
            <Card.Img src={process.env.PUBLIC_URL + cover.photo.src} alt={cover.photo.alt} />
            <Card.ImgOverlay 
              style={{
                backgroundColor: 'rgba(32, 32, 32, 0.3)',
                color: '#FFFFFF',
                textShadow: '0 0 10px'
              }}
            >
              <Card.Title style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20pt', fontStyle: 'italic', textTransform: 'capitalize' }}>{cover.title}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        ))}
    </div>
  );
}

export default CoversComponent;
