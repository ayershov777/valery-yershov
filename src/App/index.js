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
        // {backgroundColor: 'black'}
        width <= 832 || (height >= 760 && width <= 1376)
        // ? { backgroundImage: '-webkit-linear-gradient(#999999, #eeeeee)' }
        ? { backgroundImage: 'linear-gradient(45deg, #E0E0E0, #E0E0E0 5%, white 5%, white 10%, #E0E0E0 10%, #E0E0E0 15%, white 15%, white 20%, #E0E0E0 20%, #E0E0E0 25%, white 25%, white 30%, #E0E0E0 30%, #E0E0E0 35%, white 35%, white 40%, #E0E0E0 40%, #E0E0E0 45%, white 45%, white 50%, #E0E0E0 50%, #E0E0E0 55%, white 55%, white 60%, #E0E0E0 60%, #E0E0E0 65%, white 65%, white 70%, #E0E0E0 70%, #E0E0E0 75%, white 75%, white 80%, #E0E0E0 80%, #E0E0E0 85%, white 85%, white 90%, #E0E0E0 90%, #E0E0E0 95%, white 95%, white)' }
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

export default App;
