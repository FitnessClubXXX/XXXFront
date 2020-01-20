import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

class Navigation extends Component {
  render() {
    return (
      <Grid container className={styles.navigationWrapper}>
        <Grid item xs={1} />
        <Grid
          item
          xs={2}
          className={[styles.titleElement, styles.title].join(" ")}
        >
          <Link to="/" className={styles.logoNavOption} id="logoBtn">
            Fitness Club XXX
          </Link>
        </Grid>
        <Grid item xs={6} className={styles.navElement}>
          <p
            id="loginBtn"
            onClick={this.props.openSignIn}
            className={styles.navOptionParagraph}
          >
            Log in
          </p>
          {`|`}
          <Link id="accountBtn" to="/account" className={styles.navOption}>
            Account
          </Link>
          {`|`}
          <Link id="classesBtn" to="/classes" className={styles.navOption}>
            Classes
          </Link>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} className={styles.searchElement}>
          <Search className={styles.searchIcon} />
        </Grid>
      </Grid>
    );
  }
}

export default Navigation;
