import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Landing from "./scenes/Landing/Landing";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  const openSignIn = () => setSignInOpen(true);

  const closeSignIn = () => setSignInOpen(false);

  return (
    <Router>
      <Navigation openSignIn={openSignIn} />
      <SignIn open={signInOpen} closeSignIn={closeSignIn} />
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
