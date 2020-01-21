import React from 'react'
import { Grid } from '@material-ui/core'

import successImg from './images/successImg.png'
import card from './images/card.png'

import styles from './styles.module.css'

const Success = (props) => {
  return(
    <Grid container className={styles.successWrapper}>
      <Grid item xs={12}>
        <img src={successImg} className={styles.successImg} alt="ok" />
        Order {props.orderId}
        <h2>Thank You, {props.userName}</h2>
        <hr/>
        Your order is confirmed.
        <p className={styles.welcomeText}>You are welcome to come to our gym and try our facilities</p>
        <hr/>
        <h2>Customer Information</h2>
      </Grid>
      <Grid item xs={6}>
        <h5>Shipping Address</h5>
        {props.userName}
        <br/>
        {props.address}
        <h5>Shipping Method</h5>
        {props.shippingMethod}
      </Grid>
      <Grid item xs={6}>
        <h5>Billing Address</h5>
        {props.userName}
        <br />
        {props.address}
        <h5>Payment Method</h5>
        <p><img src={card} className={styles.miniCard} alt="Visa" align="middle"/>
        Ending in {props.cardNumber.substring(11,15)} - {'$' + props.total}</p>
      </Grid>
      <Grid item xs={12}>
        <hr/>
      </Grid>
    </Grid>
  )
}

export default Success;
