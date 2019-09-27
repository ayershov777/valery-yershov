import React from 'react';

import './index.css';

export default function CollectionPage(props) {

  return (
    <div className="WorkCovers">
      <h3>{props.collectionTitle} Collection</h3>
      {Object.keys(props.collection.works).map((work, idx) => {
        work = props.collection.works[work];
        const image = <img src={work.photos[0].src} alt={work.photos[0].alt} />
        const description = (
          <div>
            <h3>“{work.title}”</h3>
            <div class="details">
              <p>{work.description}</p>
              <br />
              <p>Medium: {work.medium}</p>
              <p>Year: {work.year}</p>
              <p>Size: {work.size}</p>
            </div>
          </div>
        );
  
        return (
          <>
            <div className="work-cover" key={`cover-${idx}`}>
              {idx % 2 === 0
              ? <> {image} {description} </>
              : <> {description} {image} </>}
            </div>
            <br />
          </>
        );  
      })}
    </div>
  )
}
