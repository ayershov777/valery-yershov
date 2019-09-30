import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './index.css';

export default function MobileCovers(props) {
  return (
    props.covers.map((cover, idx) => (
      <Link to={`/collections/${cover.title}`}>
        <Card key={`cover-${idx}`}>
          <Card.Img src={process.env.PUBLIC_URL + cover.photo.src} alt={cover.photo.alt} />
          <Card.ImgOverlay>
            <Card.Title>{cover.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    ))
  );
}
