import React from 'react'
import MobileCovers from './MobileCovers';
import DesktopCovers from './DesktopCovers';

import { useWindowSize } from '../../../utils';

import './index.css'

export default function CoversComponent(props) {
  let [width] = useWindowSize();
  return (
    <div className="Covers">
      <h3>Collections</h3>
      {width > 640
      ? <DesktopCovers covers={props.covers} />
      : <MobileCovers covers={props.covers} />}
    </div>
  );
}
