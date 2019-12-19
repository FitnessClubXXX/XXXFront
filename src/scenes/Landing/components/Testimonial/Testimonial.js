import React from 'react'
import { Grid } from '@material-ui/core'
import { Person } from '@material-ui/icons'

import styles from './styles.module.css'

const Testimonial = ({ testimonial, name }) => (
  <Grid item xs={6}>
    <Person className={styles.personIcon} />
    <div className={styles.testimonialParagraph}>
      { testimonial }
      <br />
      ~ { name }
    </div>
  </Grid>
)

export default Testimonial
