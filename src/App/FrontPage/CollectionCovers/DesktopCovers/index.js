import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function DesktopCovers(props) {
  return (
    props.covers.map((cover, idx) => {
      const image = (
        <Link to={`/collections/${cover.title}`}>
          <img src={cover.photo.src} alt={cover.photo.alt} />
        </Link>
      );
      const description = (
        <div>
          <h3>“{cover.title}”</h3>
          <p>{cover.description}</p>
        </div>
      );
          
      return (
        <>
          <div className="cover" key={`cover-${idx}`}>
            {idx % 2 === 0
            ? <> {image} {description} </>
            : <> {description} {image} </>}
          </div>
          <br />
        </>
      );
    })
  );
}
