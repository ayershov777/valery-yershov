import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from './Navbar';
import FrontPage from './FrontPage';

import './index.css';

import { app as data } from '../data';
import { useWindowSize } from '../utils';

const backgroundImage = `url(${process.env.PUBLIC_URL + data.backgroundImage})`;
const backgroundGradient = generateStripedGradient('15deg', 'white', 'lightgray', 30);

function App() {
  const [width, height] = useWindowSize();

  return (
    <div className="App" 
      style= {
        // {backgroundColor: 'black'}
        width <= 832 || (height >= 760 && width <= 1376)
        // ? { backgroundImage: '-webkit-linear-gradient(#999999, #eeeeee)' }
        ? { backgroundImage: backgroundGradient }//
        : { backgroundImage }
      }
    >
      <div style= {{ backgroundColor: 'rgba(255, 255, 255, .5)' }}>
        <Router>
          <NavComponent />
          <Switch>
            <Route exact path={'/'} render={FrontPage} />
          </Switch>
        </Router>
      </div>
      {width > 832 && (height < 760 || width > 1376) && <div className="fade-footer" />}
    </div>
  );
}

function generateStripedGradient(angle, color1, color2, reps) {
  const colors = [color1, color2];
  let colorStream = [];
  for(let i=0; i<reps; i++) {
    let offset1 = `${i/reps*100}`;
    let offset2 = `${(i+1)/reps*100}`;
    if(offset1.includes('.')) {
      offset1 = offset1.split('.');
      offset1 = offset1[0] + '.' + offset1[1].substr(0, 2);
    }
    if(offset2.includes('.')) {
      offset2 = offset2.split('.');
      offset2 = offset2[0] + '.' + offset2[1].substr(0, 2);
    }
    colorStream.push(`${colors[i%2]} ${offset1}%, ${colors[i%2]} ${offset2}%`);
  }
  colorStream = colorStream.join(', ');
  return `linear-gradient(${angle}, ${colorStream})`;
}

export default App;
