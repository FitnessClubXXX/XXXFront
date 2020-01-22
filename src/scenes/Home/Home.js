import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import home from "../../assets/photos/home.jpg";

import styles from "./styles.module.css";
import ClassTile from "./components/ClassTile/ClassTile";
import { CarnetAPI } from "../../services/api";

class Home extends Component {
  state = {
    loading: true,
    carnets: []
  }

  _redirectToClass = id => {
    this.props.history.push(`/products/${id}`);
  };

  componentDidMount() {
    CarnetAPI.all()
      .then(res => {
        this.setState({
          carnets: res.data,
          loading: false
        })
      })
      .catch(err => console.log(err))
  }

  _classTiles = () =>
    this.state.carnets.map(fitnessClass => {
      return (
        <ClassTile
          key={fitnessClass.id}
          id={fitnessClass.id}
          name={fitnessClass.name}
          image={fitnessClass.photos[0]}
          price={fitnessClass.price}
          onClassOpen={this._redirectToClass}
        />
      );
    });

  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <div className={styles.imageWrapper}>
              <img src={home} className={styles.homePhoto} alt="Landing" id="homePhoto" />
              <p className={styles.capturePictureHeading} id="capturePictureHeading">
                Captured Picture of a facility
              </p>
              <p className={styles.unassignedLinkParagraph} id="unassignedLink">
                A <b>paragraph</b> of a text with an{" "}
                <a href="/home">unassigned link</a>
                <br />A second row of text with a <a href="/home">web link</a>
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <div className={styles.featureMessageWrapper} id="featureMessage">
              <p>Feature message</p>
            </div>
          </Grid>
        </Grid>
        <Grid container className={styles.tilesContainer}>
          {this._classTiles()}
        </Grid>
      </>
    );
  }
}

export default Home;
