import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInformation from "./ProductInformations/ProductInformations";
import { CarnetAPI } from "../../services/api";

import styles from "./styles.module.css";

class Product extends Component {
  state = {
    fitnessClass: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    CarnetAPI.all()
      .then(res => {
        const fitnessClass = res.data.find(
          fClass => fClass.id === parseInt(id)
        );
        if (fitnessClass) {
          this.setState({ fitnessClass });
        } else {
          this.props.history.push("/home");
        }
      })
      .catch(err => console.log(err))
  }

  _handleProductOrder = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/orders/${id}`)
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
            onProductOrder={this._handleProductOrder}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Product;
