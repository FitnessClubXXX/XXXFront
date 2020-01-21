import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-table-6/react-table.css'

import Landing from "./scenes/Landing/Landing";
import Home from "./scenes/Home/Home";
import Product from "./scenes/Product/Product";
import Account from "./scenes/Account/Account";
import Classes from "./scenes/Classes/Classes";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Order from "./scenes/Order/Order";

import styles from "./styles.module.css";

const App = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  const _openSignIn = () => setSignInOpen(true);

  const _closeSignIn = () => setSignInOpen(false);

  return (
    <Router>
      <div className={styles.appContainer}>
        <Navigation openSignIn={_openSignIn} />
        <SignIn open={signInOpen} closeSignIn={_closeSignIn} />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/orders/:id" component={Order} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/classes" component={Classes} />
          <Route
            path='/'
            render={(props) => <Landing {...props} openSignIn={_openSignIn} />}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
