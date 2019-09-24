import React from 'react'
import Button from 'react-bootstrap/Button'

import './index.css';

function TimelapseComponent(props) {
  return (
    <div className="Timelapse">
      <iframe title="timelapse" src={props.video.src} scrolling="no" frameBorder="0" allowtransparency="true" allowFullScreen={true} />
      <div>
        <p>{props.video.description}</p>
        <Button variant="outline-dark">learn more</Button>
      </div>
    </div>
  );
}

export default TimelapseComponent;
