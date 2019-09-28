import React from 'react';
import DesktopCollection from './DesktopCollection';
import MobileCollection from './MobileCollection';

import './index.css';
import { useWindowSize } from '../../utils';

export default function CollectionPage(props) {
  const [width] = useWindowSize();
  return (
    <div className="WorkCovers">
      <h3>{props.collectionTitle} Collection</h3>
      {width > 640
      ? <DesktopCollection collection={props.collection} />
      : <MobileCollection collection={props.collection} />}     
    </div>
  )
}
