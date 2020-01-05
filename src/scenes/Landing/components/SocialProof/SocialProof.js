import React from 'react'
import { Grid } from '@material-ui/core'
import {
  Twitter,
  Instagram,
  Facebook,
  WhatsApp,
  Pinterest,
  Whatshot
} from '@material-ui/icons'

import styles from './styles.module.css'

const SocialProof = () => (
  <>
    <Grid item xs={12} className={styles.heading}>
      <h2>Social Proof Heading</h2>
    </Grid>
    <Grid item xs={2} className={styles.iconWrapper}>
      <Facebook className={styles.icon} />
    </Grid>
    <Grid item xs={2} className={styles.iconWrapper}>
      <Instagram className={styles.icon} />
    </Grid>
    <Grid item xs={2} className={styles.iconWrapper}>
      <Twitter className={styles.icon} />
    </Grid>
    <Grid item xs={2} className={styles.iconWrapper}>
      <WhatsApp className={styles.icon} />
    </Grid>
    <Grid item xs={2} className={styles.iconWrapper}>
      <Pinterest className={styles.icon} />
    </Grid>
    <Grid item xs={2} className={styles.iconWrapper}>
      <Whatshot className={styles.icon} />
    </Grid>
  </>
)

export default SocialProof
