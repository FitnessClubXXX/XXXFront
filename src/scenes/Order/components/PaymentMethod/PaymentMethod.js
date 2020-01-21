import React from 'react'
import {Grid} from '@material-ui/core'

import cards from '../../../../assets/photos/cards.png'

import styles from './styles.module.css'

class PaymentMethod extends React.Component{

  state={
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    cvv: '',
    cardNumberErr: '',
    nameOnCardErr: '',
    expirtaionDateErr: '',
    cvvErr: ''
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const {
      cardNumber,
      nameOnCard,
      expirationDate,
      cvv
    } = this.state

    let allFieldsValid = true;

    const numbers = new RegExp(/^[0-9]+$/)
    const expirationD = new RegExp(/^\d{2}\/\d{2}$/)

    if(cardNumber.length > 0){
      if(cardNumber.length >= 16 && cardNumber.length <= 19 && numbers.test(cardNumber)){
        this.setState({cardNumberErr: ""})
      }else{
        this.setState({cardNumberErr: "Incorrect card number format"})
        allFieldsValid = false;
      }
    }else{
      this.setState({cardNumberErr: "Card Number is required"})
      allFieldsValid = false;
    }

    if(nameOnCard.length > 0){
      this.setState({nameOnCardErr: ""})
    }else{
      this.setState({nameOnCardErr: "Name is required"})
      allFieldsValid = false;
    }

    if(expirationDate.length > 0){
      if(expirationDate.length === 5 && expirationD.test(expirationDate)){
        this.setState({expirtaionDateErr: ""})
      }else{
        this.setState({expirtaionDateErr: "Incorrect Expiration Date format"})
        allFieldsValid = false;
      }
    }else{
      this.setState({expirtaionDateErr: "Expiration Date is required"})
      allFieldsValid = false;
    }

    if(cvv.length > 0){
      if(cvv.length === 3 && numbers.test(cvv)){
        this.setState({cvvErr: ""})
      }else{
        this.setState({cvvErr: "Incorrect CVV format"})
        allFieldsValid = false;
      }
    }else{
      this.setState({cvvErr: "CVV is required"})
      allFieldsValid = false;
    }

    if(event.target.name === "success"){
      if(allFieldsValid){
        this.props.onSubmit(
          this.state.cardNumber,
          event.target.name
        );
      }
    }else{
      this.props.onSubmit(
        this.state.cardNumber,
        event.target.name
      );
    }
  }

  render(){
    const {
      cardNumber,
      nameOnCard,
      expirationDate,
      cvv,
      cardNumberErr,
      nameOnCardErr,
      expirtaionDateErr,
      cvvErr
    } = this.state
    return(
      <Grid container className={styles.paymentMethodWrapper}>
        <Grid item xs={12}>
          <h2>Shipping Address</h2>
          {this.props.address}
          <hr/>
        </Grid>
        <Grid item xs={12}>
          <h2>Shipping Method</h2>
          {this.props.shippingMethodName}
          <hr/>
        </Grid>
        <Grid item className={styles.cardFormWrapper} xs={12}>
          <h2>Payment Method</h2>
          <img src={cards} className={styles.acceptedCards} alt="Accepted cards"/>
          <form>
            <input
              type="text" 
              name="cardNumber"
              placeholder="Card number"
              value={cardNumber} 
              onChange={this.handleChange} 
              required
              maxlength="19"
            />
          </form>
          <div className={styles.errorTxt}>{cardNumberErr}</div>
        </Grid>
        <Grid item xs={5}>
          <form>
            <input
              type="text" 
              name="nameOnCard"
              placeholder="Name on card"
              value={nameOnCard} 
              onChange={this.handleChange} 
              required
              maxlength="20"
            />
          </form>
          <div className={styles.errorTxt}>{nameOnCardErr}</div>
        </Grid>
        <Grid item xs={5}>
          <form>
            <input
              type="text" 
              name="expirationDate"
              placeholder="MM/YY"
              value={expirationDate} 
              onChange={this.handleChange} 
              required
              maxlength="5"
            />
          </form>
          <div className={styles.errorTxt}>{expirtaionDateErr}</div>
        </Grid>
        <Grid item xs={2}>
          <form>
            <input
              type="text" 
              name="cvv"
              placeholder="CVV"
              value={cvv} 
              onChange={this.handleChange}
              maxlength="3" 
              required
            />
          </form>
          <div className={styles.errorTxt}>{cvvErr}</div>
        </Grid>
        <Grid item className={styles.payMethodBtnWrapper} xs={12}>
          <hr/>
          <button
          name="shippingMethod"
          className={styles.returnToShipMethBtn}
          onClick={this.handleSubmit}>
            {'<Return to Shipping Method'}
            </button>
          <button 
          name="success" 
          className={styles.completeOrderBtn}
          onClick={this.handleSubmit}>
            Complete Order
          </button>
        </Grid>
      </Grid>
    )
  }
}

export default PaymentMethod;
