import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Landing from './scenes/Landing/Landing';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
