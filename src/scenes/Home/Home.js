import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import home from "../../assets/photos/home.jpg";
import { fitnessClasses } from "../../services/data/fitnessClasses.json";

import styles from "./styles.module.css";
import ClassTile from "./components/ClassTile/ClassTile";

class Home extends Component {
  _classTiles = () =>
    fitnessClasses.map(fitnessClass => {
      return (
        <ClassTile
          key={fitnessClass.id}
          name={fitnessClass.name}
          image={fitnessClass.photos[0]}
          price={fitnessClass.price}
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
              <img src={home} className={styles.homePhoto} alt="Landing" />
              <p className={styles.capturePictureHeading}>
                Captured Picture of a facility
              </p>
              <p className={styles.unassignedLinkParagraph}>
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
            <div className={styles.featureMessageWrapper}>
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
