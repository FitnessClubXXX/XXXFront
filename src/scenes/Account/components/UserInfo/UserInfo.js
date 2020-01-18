import React from 'react'
import { Grid } from '@material-ui/core'

import styles from './styles.module.css'

const UserInfo = (props) => {
  return (
    <>
      <Grid container className={styles.nameContainer}>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <h2>{`${props.firstName} ${props.lastName}`}</h2>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <p>{props.email}</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <button
            onClick={props.onShowCarnetsClicked}
            className={styles.showCarnetsBtn}
            disabled={props.btnDisabled}
          >
            Show my carnets
          </button>
        </Grid>
      </Grid>
    </>
  )
}

export default UserInfo
