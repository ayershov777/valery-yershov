import React from 'react';

import './index.css';

export default function DesktopCovers(props) {
  return (
    props.covers.map((cover, idx) => {
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
  )
}
