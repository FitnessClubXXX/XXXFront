import React from 'react'
import {Grid} from '@material-ui/core'

import { fitnessClasses } from "../../../../services/data/fitnessClasses.json"

import styles from './styles.module.css'

class Cart extends React.Component{

  handleChange = (event) => {
    this.props.onChange(
      parseInt(event.target.value) * this.props.price
    );
  }

  handleSubmit = () => {
    this.props.onSubmit(
      'customerInfo'
    );
  }
  
  render(){
    return(
      <Grid container className={styles.cartWrapper}>
      <Grid item xs={12}>
        <h2>Your Cart</h2>
        <hr/>
      </Grid>
      <Grid item xs={7}>
        Item
        <hr/>
        <img className={styles.productImg} src={fitnessClasses[this.props.imageId].photos[0]} alt="Product" />
        <div className={styles.productName}>{fitnessClasses[this.props.imageId].name}</div>
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

export default Cart;
