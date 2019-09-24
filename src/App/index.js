import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from './Navbar';
import FrontPage from './FrontPage';

import './index.css';

import { app as data } from '../data';

const backgroundImage = `url(${process.env.PUBLIC_URL + data.backgroundImage})`;

function App() {
  return (
    <div className="App" style={{ backgroundImage }} >
      <div style= {{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <Router>
          <NavComponent />
          <Switch>
            <Route exact path={'/'} component={FrontPage} />
          </Switch>
        </Router>
      </div>
      <div className="fade-footer" />      
    </div>
  );
}

export default App;
