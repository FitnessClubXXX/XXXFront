import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./styles.module.css";

const ClassTile = props => {
  return (
    <Grid item xs={3}>
      <div className={styles.tileWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={props.image}
            alt={props.name}
            className={styles.tileImage}
          />
          <p className={styles.name}>{props.name}</p>
        </div>
        <div className={styles.classInformation}>
          <p>Attributes</p>
          <p>{props.price}</p>
        </div>
      </div>
    </Grid>
  );
};

export default ClassTile;
