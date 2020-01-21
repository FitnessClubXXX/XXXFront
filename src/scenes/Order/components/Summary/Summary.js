import React from 'react'
import {Grid} from '@material-ui/core'

import styles from './styles.module.css'

class CustomerInfo extends React.Component{

  state = {
    discountCode: '',
    discountInfo: '',
    discountInfoStyling: '',
  }

  handleChange = (event) => {
    this.setState({
      discountCode: event.target.value
    })
  }

  handleDiscount = () =>{
    if(this.state.discountCode === "FITNESS20"){
      this.props.onSubmit(true);
      this.setState({
        discountInfo: 'Your discount: -20%',
        discountInfoStyling: styles.correctDiscountCode
      })
      document.getElementById("ApplyBtn").disabled = true;
      document.getElementById("DiscountInput").disabled = true;
    }else{
      this.setState({
        discountInfo: 'Wrong discount code. Try another one.',
        discountInfoStyling: styles.wrongDiscountCode
      })
    }
  }

  render(){

    if(this.props.step === "success"){
      document.getElementById("ApplyBtn").disabled = true;
      document.getElementById("DiscountInput").disabled = true;
    }

    return(
      <Grid container className={styles.summaryWrapper}>
        <Grid item xs={12}>
          <h3>Summary</h3>
        </Grid>
        <Grid item xs={6}>
          Subtotal
          <br/>
          Shipping
          <br/>
          Est. Taxes
        </Grid>
        <Grid item xs={6}>
          {'$' + this.props.subtotal}
          <br/>
          {this.props.shipping !== '-' ? '$' + this.props.shipping: '-'}
          <br/>
          {this.props.estTaxes !== '-' ? '$' + this.props.estTaxes: '-'}
        </Grid>
        <Grid item xs={12}>
          <hr/>
          Gift card or discount code
          <br/>
          <input
              type="text" 
              name="discountCode"
              id="DiscountInput"
              className={styles.inputDiscountCode} 
              placeholder="Your discount code"
              value={this.state.discountCode} 
              onChange={this.handleChange} 
          />
          <button id="ApplyBtn" className={styles.codeApplyBtn} onClick={this.handleDiscount}>Apply</button>
          <div className={this.state.discountInfoStyling}>{this.state.discountInfo}</div>
          <hr/>
        </Grid>
        <Grid item className={styles.totalText} xs={6}>
          Total
        </Grid>
        <Grid item xs={6}>
          {this.props.total !== '-' ? '$' + this.props.total: '-'}
        </Grid>
      </Grid>
    )
  }
}

export default CustomerInfo;
