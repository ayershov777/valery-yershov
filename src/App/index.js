import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from './Navbar';
import FrontPage from './FrontPage';
import CollectionPage from './CollectionPage';

import './index.css';

// import { isBrowser } from 'react-device-detect';
import { collections } from '../data';

function App() {
  return (
    <div className={window.innerWidth*window.devicePixelRatio > 960 ? "App" : "App-mobile"}>
      <div className="frost">
        <Router>
          <NavComponent />
          <Switch>
            <Route exact path={'/'} render={FrontPage} />
            <Route exact path={'/collections/:title'} render={props => {
              let title = props.match.params.title;
              return <CollectionPage collectionTitle={title} collection={collections[title]} />
            }} />
          </Switch>
        </Router>

      </div>
      {window.innerWidth*window.devicePixelRatio <= 960 && <div className="frost-footer" />}
    </div>
  );
}

export default App;
