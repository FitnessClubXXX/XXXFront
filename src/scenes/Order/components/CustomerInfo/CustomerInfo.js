import React from 'react'
import { Grid } from '@material-ui/core'

import styles from './styles.module.css'

class CustomerInfo extends React.Component{
  
  state = {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    addressState: '',
    zip: '',
    emailErr: '',
    firstNameErr: '',
    lastNameErr: '',
    addressErr: '',
    cityErr: '',
    countryErr: '',
    addressStateErr: '',
    zipErr: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = () => {
    const { 
      email, 
      firstName, 
      lastName,  
      address, 
      city, 
      country, 
      addressState, 
      zip
    } = this.state

    let allFieldsValid = true;

    const emailPattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ;

    if(email.length > 0){
      if(emailPattern.test(email)){
        this.setState({emailErr: ""})
      }else{
        this.setState({emailErr: "Incorrect email format"})
        allFieldsValid = false;
      }
    }else{
      this.setState({emailErr: "Email is required"})
      allFieldsValid = false;
    }

    if(firstName.length > 0 && firstName.length < 20){
      this.setState({firstNameErr: ""})
    }else{
      this.setState({firstNameErr: "First Name is required"})
      allFieldsValid = false;
    }

    if(lastName.length > 0 && lastName.length < 20){
      this.setState({lastNameErr: ""})
    }else{
      this.setState({lastNameErr: "Last Name is required"})
      allFieldsValid = false;
    }

    if(address.length > 0 && address.length < 40){
      this.setState({addressErr: ""})
    }else{
      this.setState({addressErr: "Address is required"})
      allFieldsValid = false;
    }

    if(city.length > 0 && city.length < 20){
      this.setState({cityErr: ""})
    }else{
      this.setState({cityErr: "City is required"})
      allFieldsValid = false;
    }

    if(country !== ""){
      this.setState({countryErr: ""})
    }else{
      this.setState({countryErr: "Country is required"})
      allFieldsValid = false;
    }

    if(addressState !== ""){
      this.setState({addressStateErr: ""})
    }else{
      this.setState({addressStateErr: "State is required"})
      allFieldsValid = false;
    }

    if(zip.length > 0){
      if(zip.length > 4 && zip.length < 7){
        this.setState({zipErr: ""})
      }else{
        this.setState({zipErr: "Incorrect zip format"})
        allFieldsValid = false;
        console.log(allFieldsValid)
      }
    }else{
      this.setState({zipErr: "Zip is required"})
      allFieldsValid = false;
    }

    if(allFieldsValid){
      this.props.onSubmit(
        email, 
        firstName, 
        lastName,
        address,
        city,
        country,
        addressState,
        zip,
        'shippingMethod'
        );
    }
  }

  handleReturn = () => {
    this.props.onReturnBtn('cart')
  }

  render(){
    const { 
      email, 
      firstName, 
      lastName,  
      address, 
      city, 
      country, 
      addressState, 
      zip,
      emailErr, 
      firstNameErr, 
      lastNameErr, 
      addressErr, 
      cityErr, 
      countryErr, 
      addressStateErr, 
      zipErr 
    } = this.state

    return(
      <Grid container className={styles.customerInfoWrapper}>
        <Grid item xs={12}>
          <h2>Customer Information</h2>
          <form>
            <input
              type="email" 
              name="email"
              placeholder="Email"
              value={email} 
              onChange={this.handleChange} 
              required
            />
          </form>
          <div className={styles.errorTxt}>{emailErr}</div>
          <hr/>
        </Grid>
        <Grid item xs={12}>
          <h2>Shipping Address</h2>
        </Grid>
        <Grid item xs={6}>
          <form>
            <input
              type="text" 
              name="firstName"
              placeholder="First Name"
              value={firstName} 
              onChange={this.handleChange}
              required
            />
          </form>
          <div className={styles.errorTxt}>{firstNameErr}</div>
        </Grid>
        <Grid item xs={6}>
          <form>
            <input
              type="text" 
              name="lastName"
              placeholder="Last Name"
              value={lastName} 
              onChange={this.handleChange} 
              required
            />
          </form>
          <div className={styles.errorTxt}>{lastNameErr}</div>
        </Grid>
        <Grid item xs={9}>
          <form>
            <input
              type="text" 
              name="address"
              placeholder="Address"
              value={address} 
              onChange={this.handleChange} 
              required
            />
          </form>
          <div className={styles.errorTxt}>{addressErr}</div>
        </Grid>
        <Grid item xs={3}>
          <form>
            <input
              type="text" 
              name="city"
              placeholder="City"
              value={city} 
              onChange={this.handleChange} 
              required
            />
          </form>
          <div className={styles.errorTxt}>{cityErr}</div>
        </Grid>
        <Grid item xs={5}>
          <select
            name="country"
            value={country} 
            className={styles.quantitySelector}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled hidden>Country</option>
            <option value={"Poland"}>Poland</option>
          </select>
          <div className={styles.errorTxt}>{countryErr}</div>
        </Grid>
        <Grid item xs={5}>
          <select
            name="addressState" 
            value={addressState}
            className={styles.quantitySelector}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled hidden>State</option>
            <option value={"Dolnośląskie"}>Dolnośląskie</option>
            <option value={"Kujawsko-pomorskie"}>Kujawsko-pomorskie</option>
            <option value={"Lubelskie"}>Lubelskie</option>
            <option value={"Lubuskie"}>Lubuskie</option>
            <option value={"Łódzkie"}>Łódzkie</option>
            <option value={"Mazowieckie"}>Mazowieckie</option>
          </select>
          <div className={styles.errorTxt}>{addressStateErr}</div>
        </Grid>
        <Grid item xs={2}>
         <form onSubmit={this.handleSubmit} noValidate>
            <input
              type="number" 
              name="zip"
              placeholder="Zip"
              value={zip} 
              onChange={this.handleChange} 
              required
            />
          </form>
          <div className={styles.errorTxt}>{zipErr}</div>
        </Grid>
        <Grid item className={styles.custInfoBtnWrapper} xs={12}>
          <hr/>
          <button className={styles.returnToCartBtn} onClick={this.handleReturn}>{'< Return to cart'}</button>
          <button className={styles.continueBtn} onClick={this.handleSubmit}>Continue to Shipping Method</button>
        </Grid>
      </Grid>
    )
  }
}
export default CustomerInfo;