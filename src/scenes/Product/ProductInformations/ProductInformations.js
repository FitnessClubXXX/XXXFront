import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./styles.module.css";

const ProductInformation = props => (
  <>
    <Grid container>
      <Grid item xs={12} className={styles.nameContainer}>
        <div className={styles.spaceAroundWrapper}>
          <p className={styles.headLabel} id="name">{props.name}</p>
          <p className={styles.headLabel} id="price">{props.price}</p>
        </div>
        <hr />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <div className={styles.spaceAroundWrapper}>
          <p>Size</p>
          <p className={styles.sizingChartLabel}>Sizing Chart</p>
        </div>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6}>
        <button className={styles.sizingButton}>Women</button>
      </Grid>
      <Grid item xs={6}>
        <button
          className={[styles.sizingButton, styles.rightSizingButton].join(" ")}
        >
          Men
        </button>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <select className={styles.selector}>
          <option value="">Choose Training</option>
        </select>
        <hr />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={3}>
        <p className={styles.quantityLabel}>Quantity</p>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={4}>
        <select className={styles.selector}>
          <option value="1">1</option>
        </select>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <hr />
        <button className={styles.addToCartBtn}>Add To Cart</button>
        <hr />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <p className={styles.descriptionLabel} id="description">{props.description}</p>
      </Grid>
    </Grid>
  </>
);

export default ProductInformation;
