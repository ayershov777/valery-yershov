import React from 'react';
import DesktopCollection from './DesktopCollection';
import MobileCollection from './MobileCollection';

import './index.css';
import { useWindowSize } from '../../utils';

export default function CollectionPage(props) {
  window.scrollTo(0,0);
  const [width] = useWindowSize();
  return (
    <div className="CollectionPage">
      <div>
        <h3>{props.collectionTitle} Collection</h3>
      </div>
      {width > 640
      ? <DesktopCollection collection={props.collection} />
      : <MobileCollection collection={props.collection} />}     
    </div>
  )
}
