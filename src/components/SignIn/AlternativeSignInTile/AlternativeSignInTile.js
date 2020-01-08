import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./styles.module.css";

const AlternativeSignInTile = props => {
  return (
    <Grid item xs={4}>
      <div className={styles.tileWrapper}>
        {props.icon}
        <p className={styles.titleLine}>{props.title}</p>
      </div>
    </Grid>
  );
};

export default AlternativeSignInTile;
