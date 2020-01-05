import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import Testimonial from './components/Testimonial/Testimonial'
import Feature from './components/Feature/Feature'
import SocialProof from './components/SocialProof/SocialProof'
import CallToAction from './components/CallToAction/CallToAction'

import landing from '../../assets/photos/landing.jpg'
import feature1 from '../../assets/photos/feature1.jpg'
import feature2 from '../../assets/photos/feature2.jpg'
import feature3 from '../../assets/photos/feature3.jpg'

import styles from './styles.module.css'

class Landing extends Component {
  render() {
    return (
      <div className={styles.pageWrapper}>
        <Grid container>
          <Grid item xs={12} className={styles.landingPhotoWrapper}>
            <img src={landing} className={styles.landingPhoto} alt="Landing" />
            <p className={styles.landingPictureHeading}>Landing Page Picture Heading</p>
            <p className={styles.landingPictureParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className={[styles.landingButton, styles.reservationBtn].join(' ')}>
              Reservation
            </button>
            <button className={[styles.landingButton, styles.loginBtn].join(' ')}>
              Login
            </button>
            <button className={[styles.landingButton, styles.coachingBtn].join(' ')}>
              Coaching
            </button>
            <button className={[styles.landingButton, styles.pricingBtn].join(' ')}>
              Pricing
            </button>
          </Grid>
        </Grid>
        <Grid container className={styles.testimonialsWrapper}>
          <Testimonial
            testimonial={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            name={"Kenny Bostic"}
          />
          <Testimonial
            testimonial={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            name={"Brad Harris"}
          />
        </Grid>
        <Grid container>
          <Feature
            featureName={"Feature 2"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            photo={feature1}
            photoAlt={"Feature 2"}
          />
          <Feature
            featureName={"Feature 2"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            photo={feature2}
            photoAlt={"Feature 2"}
          />
          <Feature
            featureName={"Feature 3"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            photo={feature3}
            photoAlt={"Feature 3"}
          />
        </Grid>
        <Grid container className={styles.socialWrapper}>
          <SocialProof />
        </Grid>
        <Grid container className={styles.callToActionWrapper}>
          <CallToAction />
        </Grid>
      </div>
    )
  }
}

export default Landing
