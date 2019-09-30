import React from 'react';

export default function MobileCollection(props) {
  return (
    Object.keys(props.collection.works).map((work, idx) => {
      work = props.collection.works[work];
      return (  
        <div>
          <br />
          <div
            style={{
              borderBottom: '1px dotted gray'
            }} 
          />
          <h3
            style={{
              textAlign: 'center',
              color: 'white',
              textShadow: '0 0 2px white',
              padding: '4% 0',
              fontSize: '7vw'
            }}
          >
            {work.title}
          </h3>
          <img src={work.photos[0].src} alt={work.photos[0].alt}
            style={{
              width: '100%'
            }}
          />
          <div
            style={{
              color: 'white',
              textShadow: '0 0 1px white',
              padding: '2%'
            }}
          >
            <p style={{ fontSize: '1.2em', textAlign: 'center' }}>{work.description}</p>
            <br />
            <p style={{ marginLeft: '4%' }}>Medium: {work.medium}</p>
            <p style={{ marginLeft: '4%' }}>Year: {work.year}</p>
            <p style={{ marginLeft: '4%' }}>Size: {work.size}</p>
          </div>
        </div>
      )
    })
  );
}
