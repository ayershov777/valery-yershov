import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from './Navbar';
import FrontPage from './FrontPage';

import './index.css';

const cover = process.env.PUBLIC_URL + '/images/misc/cover.png';

class App extends Component {
  render() {
    return (
      <div className="App"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingBottom: '100vh'
        }}
      >
        <Router>
          <NavComponent />
          <Switch>
            <Route exact path={'/'} render={FrontPage} />
          </Switch>
        </Router>

        <div id="contact" />
      </div>
    );
  }
}

export default App;
