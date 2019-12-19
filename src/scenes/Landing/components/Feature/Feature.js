import React from 'react'
import { Grid } from '@material-ui/core'

import styles from './styles.module.css'

const Feature = ({ featureName, description, photo, photoAlt }) => (
  <Grid item xs={12} className={styles.featureWrapper}>
    <Grid container>
      <Grid item xs={4} className={styles.descriptionWrapper}>
        <h1>{featureName}</h1>
        <p className={styles.descriptionParagraph}>{description}</p>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={6}>
        <img src={photo} alt={photoAlt} style={{ maxWidth: '100%' }} />
      </Grid>
    </Grid>
  </Grid>
)

export default Feature
