import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./scenes/Landing/Landing";
import Home from "./scenes/Home/Home";
import Product from "./scenes/Product/Product";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";

import styles from "./styles.module.css";

const App = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  const openSignIn = () => setSignInOpen(true);

  const closeSignIn = () => setSignInOpen(false);

  return (
    <Router>
      <div className={styles.appContainer}>
        <Navigation openSignIn={openSignIn} />
        <SignIn open={signInOpen} closeSignIn={closeSignIn} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products/:id" component={Product} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
