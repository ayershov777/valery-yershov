import React from 'react';
import CarouselComponent from './Carousel';
import TimelapseComponent from './Timelapse';
import CoversComponent from './CollectionCovers';

import {frontPage as data} from '../../data';

function FrontPage() {
  return (
    <div>
      <CarouselComponent slideshow={data.slideshow} />
      <TimelapseComponent video={data.video} />
      <CoversComponent covers={data.covers} />
    </div>
  );
}

export default FrontPage;
