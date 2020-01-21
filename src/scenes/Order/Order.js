import React from 'react'
import {Grid} from '@material-ui/core'

import Cart from './components/Cart/Cart'
import CustomerInfo from './components/CustomerInfo/CustomerInfo'
import Summary from './components/Summary/Summary'
import ShippingMethod from './components/ShippingMethod/ShippingMethod'
import PaymentMethod from './components/PaymentMethod/PaymentMethod'
import Success from './components/Success/Success'

import { fitnessClasses } from "../../services/data/fitnessClasses.json"

import styles from './styles.module.css'

class Order extends React.Component {

  productId = this.props.match.params.id
  price = parseInt(fitnessClasses[this.productId].price.substr(1))

  state = {
    orderProcessStep: 'cart',
    subtotal: this.price,
    shipping: '',
    shippingCost: '-',
    estTaxes: '-',
    total: '-',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    addressState: '',
    zip: '',
    cardNumber: '',
    discount: 1,
    orderId: ''
  }

  subtotalInfo = (subtotal) =>{
    this.setState({
      subtotal: (subtotal * this.state.discount).toFixed(2)
    })
  }

  processStep = (orderProcessStep) =>{
    this.setState({
      orderProcessStep: orderProcessStep
    })
  }

  customerInfo = (email, firstName, lastName, address, city, country, addressState, zip, orderProcessStep) => {
    this.setState({
      email: email,
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      country: country,
      addressState: addressState,
      zip: zip,
      orderProcessStep: orderProcessStep
    })

  }

  grantDiscount = (granted) =>{
    if(granted === "yes")
      this.setState({
        discount: 0.8,
        subtotal: (this.state.subtotal * 0.8).toFixed(2)
      })
  }

  shippingCostInfo = (shippingCost, shippingMethodName) =>{
    const tax = (0.23 * (parseFloat(shippingCost) + parseFloat(this.state.subtotal))).toFixed(2)
    const total = (parseFloat(shippingCost) + parseFloat(tax) + parseFloat(this.state.subtotal)).toFixed(2)
    this.setState({
      shippingCost: shippingCost,
      estTaxes: tax,
      total: total,
      shipping: shippingMethodName
    })
  }

  paymentMethodInfo = (cardNumber, processStep) =>{
    const rand = Math.ceil(Math.random() * 10000)

    this.setState({
      orderId: rand,
      cardNumber: cardNumber,
      orderProcessStep: processStep
    })
    console.log(rand)


    //tutaj request na BE i jeśli feedback jest gitara przekierowanie na processStep "success"
  }

  render(){
    let content = null
    const { 
      orderProcessStep,
      subtotal, 
      shippingCost, 
      shipping,
      total, 
      estTaxes, 
      firstName, 
      lastName, 
      address, 
      city, 
      country, 
      zip, 
      orderId, 
      cardNumber 
    } = this.state

    let addressInfo = ` ${address} , ${city} , ${country} ${zip}`
    let userFullName = `${firstName} ${lastName}`

    switch(this.state.orderProcessStep) {
      case 'cart':
        content =(
          <Cart 
          onSubmit={this.processStep} 
          onChange={this.subtotalInfo} 
          subtotal={subtotal} 
          price={this.price} 
          imageId={this.props.match.params.id}/>
        )
        break;
      case 'customerInfo':
        content = (
          <CustomerInfo 
          onReturnBtn={this.processStep} 
          onSubmit={this.customerInfo} />
        )
        break;
      case 'shippingMethod':
        content = (
          <ShippingMethod 
          onChange={this.shippingCostInfo} 
          address={addressInfo.toUpperCase()} 
          onSubmit={this.processStep}/>
        )
        break;
      case 'paymentMethod':
        content = (
          <PaymentMethod 
          onSubmit={this.paymentMethodInfo} 
          address={addressInfo.toUpperCase()} 
          shippingMethodName={shipping}
          />
        )
        break;
      case 'success':
        content = (
          <Success
          orderId={orderId}
          userName={userFullName.toUpperCase()}
          address={addressInfo.toUpperCase()}
          cardNumber={cardNumber}
          shippingMethod={shipping}
          total={total}  />
        )
        break;
      default:
       
    }

    return(
      <>
      <Grid container className={styles.orderProcessWrapper}>
        <Grid item xs={7}>
          {content}
        </Grid>
        <Grid item xs={3}>
          <Summary 
            subtotal={subtotal} 
            shipping={shippingCost} 
            estTaxes={estTaxes}
            total={total}
            onSubmit={this.grantDiscount}
            step={orderProcessStep}
          />
        </Grid>
      </Grid>
      </>
    )
  }
}

export default Order;