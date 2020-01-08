import React, { Component } from "react";
import styles from "./styles.module.css";

class ProductGallery extends Component {
  state = {
    mainImg: this.props.images[0]
  };

  _handleClick = name => {
    this.setState({
      mainImg: name
    });
  };

  _renderPhotos = () => {
    const photoTiles = this.props.images.filter(
      image => image !== this.state.mainImg
    );
    return photoTiles.map(tile => (
      <img
        src={tile}
        alt={tile}
        key={tile}
        onClick={() => this._handleClick(tile)}
      />
    ));
  };

  render() {
    return (
      <>
        <div className={styles.mainImg}>
          <img src={this.state.mainImg} alt={"Product"} />
        </div>
        <div className={styles.productGallery}>{this._renderPhotos()}</div>
      </>
    );
  }
}
export default ProductGallery;
