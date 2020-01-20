import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInformation from "./ProductInformations/ProductInformations";

import styles from "./styles.module.css";

import { fitnessClasses } from "../../services/data/fitnessClasses.json";

class Product extends Component {
  state = {
    fitnessClass: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const fitnessClass = fitnessClasses.find(
      fClass => fClass.id === parseInt(id)
    );
    if (fitnessClass) {
      this.setState({ fitnessClass });
    } else {
      this.props.history.push("/home");
    }
  }

  render() {
    const { fitnessClass } = this.state;

    if (!fitnessClass) {
      return <div>Loading...</div>;
    }

    return (
      <Grid container className={styles.productContainer}>
        <Grid item xs={6} className={styles.productGalleryWrapper} id={"gallery"}>
          <ProductGallery images={fitnessClass.photos} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <ProductInformation
            name={fitnessClass.name}
            price={fitnessClass.price}
            description={fitnessClass.description}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Product;
