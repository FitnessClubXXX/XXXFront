import React from 'react'
import { Grid } from '@material-ui/core'

import Cart from './components/Cart/Cart'
import CustomerInfo from './components/CustomerInfo/CustomerInfo'
import Summary from './components/Summary/Summary'
import ShippingMethod from './components/ShippingMethod/ShippingMethod'
import PaymentMethod from './components/PaymentMethod/PaymentMethod'
import Success from './components/Success/Success'

import { fitnessClasses } from "../../services/data/fitnessClasses.json"

import styles from './styles.module.css'

class Order extends React.Component {

  state = {
    orderProcessStep: 'cart',
    subtotal: null,
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
    orderId: '',
    price: null
  }

  componentDidMount() {
    const productId = this.props.match.params.id
    const price = parseInt(fitnessClasses[productId].price.substr(1))
    this.setState({ subtotal: price, price })
  }

  subtotalInfo = (subtotal) => {
    this.setState({
      subtotal: (subtotal * this.state.discount).toFixed(2)
    })
  }

  processStep = (orderProcessStep) => {
    this.setState({ orderProcessStep })
  }

  customerInfo = (
    email,
    firstName, 
    lastName, 
    address, 
    city, 
    country, 
    addressState, 
    zip,
    orderProcessStep) => {
      this.setState({
        email,
        firstName,
        lastName,
        address,
        city,
        country,
        addressState,
        zip,
        orderProcessStep
      })
    }

  grantDiscount = (granted) => {
    if (granted) {
      this.setState({
        discount: 0.8,
        subtotal: (this.state.subtotal * 0.8).toFixed(2)
      })
    }
  }

  shippingCostInfo = (shippingCost, shippingMethodName) => {
    const subtotal = parseFloat(this.state.subtotal)
    const parsedShippingCost = parseFloat(shippingCost)

    const tax = (0.23 * (parsedShippingCost + subtotal)).toFixed(2)
    const total = (parsedShippingCost + tax + subtotal).toFixed(2)

    this.setState({
      shippingCost: parsedShippingCost,
      estTaxes: tax,
      total,
      shipping: shippingMethodName
    })
  }

  paymentMethodInfo = (cardNumber, processStep) => {
    const rand = Math.ceil(Math.random() * 10000)

    this.setState({
      orderId: rand,
      cardNumber,
      orderProcessStep: processStep
    })
    console.log(rand)


    //tutaj request na BE i jeśli feedback jest gitara przekierowanie na processStep "success"
  }

  render() {
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
      cardNumber,
      price 
    } = this.state

    let addressInfo = ` ${address} , ${city} , ${country} ${zip}`
    let userFullName = `${firstName} ${lastName}`

    return (
      <Grid container className={styles.orderProcessWrapper}>
        <Grid item xs={7}>
          {orderProcessStep === 'cart' && (
            <Cart 
              onSubmit={this.processStep} 
              onChange={this.subtotalInfo} 
              subtotal={subtotal} 
              price={price} 
              imageId={this.props.match.params.id}
            />
          )}
          {orderProcessStep === 'customerInfo' && (
            <CustomerInfo 
              onReturnBtn={this.processStep} 
              onSubmit={this.customerInfo}
            />
          )}
          {orderProcessStep === 'shippingMethod' && (
            <ShippingMethod 
              onChange={this.shippingCostInfo} 
              address={addressInfo.toUpperCase()} 
              onSubmit={this.processStep}
            />
          )}
          {orderProcessStep === 'paymentMethod' && (
            <PaymentMethod 
              onSubmit={this.paymentMethodInfo} 
              address={addressInfo.toUpperCase()} 
              shippingMethodName={shipping}
            />
          )}
          {orderProcessStep === 'success' && (
            <Success
              orderId={orderId}
              userName={userFullName.toUpperCase()}
              address={addressInfo.toUpperCase()}
              cardNumber={cardNumber}
              shippingMethod={shipping}
              total={total}
            />
          )}
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
    )
  }
}

export default Order;
