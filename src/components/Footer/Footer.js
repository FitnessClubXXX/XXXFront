import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from "react-router-dom";

import cards from '../../assets/photos/cards.png'

import styles from './styles.module.css'

class Footer extends Component {
  render() {
    return (
      <Grid container className={styles.footerWrapper}>
        <Grid item xs={1} />
        <Grid item xs={1}>
          <p className={styles.siteTitle}>Fitnes Club XXX</p>
          <img src={cards} alt="payment cards" className={styles.cards} />
        </Grid>
        <Grid item xs={4} className={styles.footerOptionsWrapper}>
          <Link to="/" className={styles.footerOption}>Category X</Link>{`|`}
          <Link to="/" className={styles.footerOption}>Category Y</Link>{`|`}
          <Link to="/" className={styles.footerOption}>Category Z</Link>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={2} className={styles.newsletterWrapper}>
          <p className={styles.newsletterInfo}>Stay In Touch! Join our Newsletter</p>
          <input type="text" placeholder="Enter email" className={styles.newsletterInput} />
          <button className={styles.newsletterBtn}>Subscribe</button>
        </Grid>
      </Grid>
    )
  }
}

export default Footer
