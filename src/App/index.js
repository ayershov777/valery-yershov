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
        ? { backgroundImage: 'linear-gradient(10deg, #DDDDFF, #DDDDFF 5%, white 5%, white 10%, #DDDDFF 10%, #DDDDFF 15%, white 15%, white 20%, #DDDDFF 20%, #DDDDFF 25%, white 25%, white 30%, #DDDDFF 30%, #DDDDFF 35%, white 35%, white 40%, #DDDDFF 40%, #DDDDFF 45%, white 45%, white 50%, #DDDDFF 50%, #DDDDFF 55%, white 55%, white 60%, #DDDDFF 60%, #DDDDFF 65%, white 65%, white 70%, #DDDDFF 70%, #DDDDFF 75%, white 75%, white 80%, #DDDDFF 80%, #DDDDFF 85%, white 85%, white 90%, #DDDDFF 90%, #DDDDFF 95%, white 95%, white)' }
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
