import React from 'react'

export default function MobileCollection(props) {
  return (
    Object.keys(props.collection.works).map((work, idx) => {
      work = props.collection.works[work];
      return <div>
        <h3 style={{
          textAlign: 'center',
          color: 'white',
          textShadow: '0 0 2px white'
        }}>{work.title}</h3>
        <img src={work.photos[0].src} alt={work.photos[0].alt}
          style={{
            width: '100%'
          }}
        />
        <div
          style={{
            color: 'white',
            textShadow: '0 0 1px white'
          }}
        >
          <p>{work.description}</p>
          <p>Medium: {work.medium}</p>
          <p>Year: {work.year}</p>
          <p>Size: {work.size}</p>
        </div>
      </div>
    })
  );
}
