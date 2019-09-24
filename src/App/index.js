import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from './Navbar';
import FrontPage from './FrontPage';

import './index.css';

import { app as data } from '../data';
import { useWindowSize } from '../utils';

const backgroundImage = `url(${process.env.PUBLIC_URL + data.backgroundImage})`;

function App() {
  const [width, height] = useWindowSize();
  return (
    <div className="App" 
      style= {
        width <= 832 || (height >= 760 && width <= 1376)
        ? { backgroundImage: '-webkit-linear-gradient(#999999, #eeeeee)' }
        : { backgroundImage }
      }
    >
      <div style= {{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
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

export default App;
