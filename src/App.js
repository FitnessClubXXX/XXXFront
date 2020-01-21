import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./scenes/Landing/Landing";
import Home from "./scenes/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Order from "./scenes/Order/Order";

const App = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  const openSignIn = () => setSignInOpen(true);

  const closeSignIn = () => setSignInOpen(false);

  return (
    <Router>
      <Navigation openSignIn={openSignIn} />
      <SignIn open={signInOpen} closeSignIn={closeSignIn} />
      <Switch>
        <Route path="/order/:id" component={Order} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
