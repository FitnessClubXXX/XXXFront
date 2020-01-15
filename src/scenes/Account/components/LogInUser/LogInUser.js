import React from 'react'
import { Grid } from '@material-ui/core'

import styles from './styles.module.css'

const LogInUser = (props) => {
  return (
    <>
      <Grid container className={styles.emailContainer}>
        <Grid item xs={4} />
        <Grid item xs={2}>
          <p className={styles.label}>E-mail Address</p>
        </Grid>
        <Grid item xs={2}>
          <input
            className={styles.credentialsInput}
            type="text"
            value={props.email}
            onChange={props.onEmailChanged}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={2}>
          <p className={styles.label}>Password</p>
        </Grid>
        <Grid item xs={2}>
          <input
            className={styles.credentialsInput}
            type="password"
            value={props.password}
            onChange={props.onPasswordChanged}
          />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '1rem' }}>
        <Grid item xs={5} />
        <Grid item xs={2}>
          <button
            onClick={props.onUserLogIn}
            className={styles.logInBtn}
          >
            Log In
          </button>
        </Grid>
      </Grid>
    </>
  )
}

export default LogInUser
