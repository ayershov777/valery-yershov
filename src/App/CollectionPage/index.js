import React, { useState } from 'react';
import DesktopCollection from './DesktopCollection';
import MobileCollection from './MobileCollection';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './index.css';
import { useWindowSize } from '../../utils';

export default function CollectionPage(props) {
  window.scrollTo(0,0); // <-- this doesn't work!
  const [width] = useWindowSize();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (work) => setShow(work);

  return (
    <div className="CollectionPage">
      {!!show &&
        <Modal show={!!show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{show.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <video controls={true} autoplay="true" muted>
              <source src={show.videos[0]} type="video/mp4" />
            </video>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      }

      <div>
        <h3>{props.collectionTitle} Collection</h3>
      </div>

      {width > 640
      ? <DesktopCollection show={show} handleShow={handleShow} handleClose={handleClose} collection={props.collection} />
      : <MobileCollection show={show} handleShow={handleShow} handleClose={handleClose} collection={props.collection} />}     
    </div>
  )
}
