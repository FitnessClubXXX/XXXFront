import React from 'react'
import { Grid } from '@material-ui/core'

import googlePlay from '../../../../assets/photos/googlePlay.png'
import appStore from '../../../../assets/photos/appStore.png'

import styles from './styles.module.css'

const CallToAction = () => (
  <>
    <Grid item xs={12} className={styles.headerWrapper}>
      <h1>Heading for Call To Action Bottom</h1>
      <p className={styles.callToActionParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Grid>
    <Grid item xs={4} />
    <Grid item xs={2} className={styles.iconWrapper}>
      <img src={appStore} alt={"App Store"} className={styles.storeIcon} />
    </Grid>
    <Grid item xs={2} className={styles.iconWrapper}>
      <img src={googlePlay} alt={"Google Play"} className={styles.storeIcon} />
    </Grid>
  </>
)

export default CallToAction
