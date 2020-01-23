import React from 'react'
import { Grid } from '@material-ui/core'

import { CarnetAPI } from "../../../../services/api";
import styles from './styles.module.css'

class Cart extends React.Component {
  state = {
    fitnessClass: null,
    loading: true
  }

  componentDidMount() {
    const { productId } = this.props;
    CarnetAPI.all()
      .then(res => {
        const fitnessClass = res.data.find(
          fClass => fClass.id === parseInt(productId)
        );
        if (fitnessClass) {
          this.setState({ fitnessClass, loading: false });
        }
      })
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.props.onChange(
      parseInt(event.target.value) * this.props.price
    );
  }

  handleSubmit = () => {
    this.props.onSubmit('customerInfo')
  }
  
  render() {
    if (this.state.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }

    return(
      <Grid container className={styles.cartWrapper}>
        <Grid item xs={12}>
          <h2>Your Cart</h2>
          <hr/>
        </Grid>
        <Grid item xs={7}>
          Item
          <hr/>
          <img className={styles.productImg} src={this.state.fitnessClass.photos[0]} alt="Product" />
          <div className={styles.productName}>{this.state.fitnessClass.name}</div>
        </Grid>
        <Grid item xs={3}>
          Price
          <hr/>
          <div className={styles.productPrice}>{'$' + this.props.price}</div>
        </Grid>
        <Grid item xs={2}>
          Quantity
          <hr/>
          <select 
            className={styles.quantitySelector}
            onChange={this.handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </Grid>
        <Grid item className={styles.subtotalValue} xs={12}>
          <hr/>
          Subtotal:
          {' $' + this.props.subtotal}
          <hr/>
          <button onClick={this.handleSubmit} className={styles.checkoutBtn}>Checkout</button>
        </Grid>
      </Grid>
    )
  }
}

export default Cart
