import React from 'react'
import {Grid} from '@material-ui/core'

import styles from './styles.module.css'

class ShippingMethod extends React.Component{
  state = {
    error: ""
  }

  handleChange = ({ target }) => {
    this.props.onChange(
      target.value,
      target.id
    );
  }

  handleSubmit = (event) => {
    const check = (
    document.getElementById('UPS Ground').checked || 
    document.getElementById('UPS 3 Day Select').checked || 
    document.getElementById('UPS 2nd Day Air').checked || 
    document.getElementById('UPS Next Day Air').checked) 

    const { target } = event 
    if(target.name === "paymentMethod"){
      if(check){
        this.props.onSubmit(
          target.name
        );
        this.setState({error: ""})
      }else{
        this.setState({error: "Shipping Method is required"})
      }
    }else{
      this.props.onSubmit(
        target.name
      );
    }
    
  }

  render() {
    const {error} = this.state

    return (
      <Grid container className={styles.shippingMethodWrapper}>
        <Grid item xs={12}>
          <h2>Shipping Address</h2>
          {this.props.address}
          <hr/>
          <h2>Shipping Method</h2>
          <hr/>
        </Grid>
        <Grid item xs={8}>
          <input onChange={this.handleChange} type="radio" id="UPS Ground" name="method" value={2.20}/> UPS Ground <br/>
          <input onChange={this.handleChange} type="radio" id="UPS 3 Day Select" name="method" value={5.50}/> UPS 3 Day Select <br/>
          <input onChange={this.handleChange} type="radio" id="UPS 2nd Day Air" name="method" value={9.50}/> UPS 2nd Day Air <br/>
          <input onChange={this.handleChange} type="radio" id="UPS Next Day Air" name="method" value={12.50}/> UPS Next Day Air <br/>
          <div className={styles.errorTxt}>{error}</div>
        </Grid>
        <Grid item className={styles.priceList} xs={4}>
          $ 2.20 <br/>
          $ 5.50 <br/>
          $ 9.50 <br/>
          $ 12.50 <br/>
        </Grid>
        <Grid item className={styles.shippMethodBtnWrapper} xs={12}>
          <hr/>
          <button 
            name="customerInfo" 
            className={styles.returnToCustInfBtn}
            onClick={this.handleSubmit}
          >
            {'< Return to Customer Information'}
          </button>
          <button 
            name="paymentMethod" 
            className={styles.contToPaymentMethodBtn} 
            onClick={this.handleSubmit}
          >
            Continue to Payment Method
          </button>
        </Grid>
      </Grid>
    )
  }
}

export default ShippingMethod;
