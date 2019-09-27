import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from './Navbar';
import FrontPage from './FrontPage';

import './index.css';

function App() {
  return (
    <div className="App" >
      <div className="frost">
        <Router>
          <NavComponent />
          <Switch>
            <Route exact path={'/'} render={FrontPage} />
          </Switch>
        </Router>
      </div>
      {CSS.supports('background-attachment', 'fixed') && <div className="frost-footer" />}
    </div>
  );
}

export default App;
