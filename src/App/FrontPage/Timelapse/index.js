import React from 'react'
import Button from 'react-bootstrap/Button'

import './index.css';

import { useWindowSize } from '../../../utils';

function TimelapseComponent(props) {
  let [width] = useWindowSize();
  return (
    <div className="Timelapse">
      <iframe title="timelapse" src={props.video.src} scrolling="no" frameBorder="0" allowtransparency="true" allowFullScreen={true} />
      <div>
        <p>{props.video.description}</p>
        {width > 640
        ? <Button variant="outline-dark">learn more</Button>
        : <Button variant="dark">learn more</Button>}
      </div>
    </div>
  );
}

export default TimelapseComponent;
