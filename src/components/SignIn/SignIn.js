import React from "react";
import Dialog from "@material-ui/core/Dialog";
import {
  Close,
  Facebook,
  Instagram,
  Twitter,
  Shop,
  AcUnit,
  Accessible
} from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";
import AlternativeSignInTile from "./AlternativeSignInTile/AlternativeSignInTile";

const SignIn = props => {
  const history = useHistory();

  const _logIn = () => {
    props.closeSignIn();
    history.push("/home");
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.closeSignIn}
      className={styles.signInDialog}
    >
      <Grid container>
        <Grid item xs={9}>
          <p className={styles.signInTitle}>Sign In as Fitness Club Member</p>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={1}>
          <button className={styles.cancelBtn} onClick={props.closeSignIn}>
            <Close className={styles.closeIcon} />
          </button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          E-mail Address
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <input type="text" style={{ width: "100%" }} />
        </Grid>
      </Grid>
      <Grid container className={styles.passwordRow}>
        <Grid item xs={4}>
          Password
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <input type="password" style={{ width: "100%" }} />
        </Grid>
      </Grid>
      <Grid container className={styles.rememberMeRow}>
        <Grid item xs={5} />
        <Grid item xs={5}>
          <input type="checkbox" /> Remember me
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5} />
        <Grid item xs={6}>
          <a href="/" className={styles.forgotPassword}>
            Forgot Your Password?
          </a>
        </Grid>
      </Grid>
      <Grid container className={styles.signInRow}>
        <Grid item xs={12}>
          <button onClick={_logIn}>Sign In</button>
        </Grid>
      </Grid>
      <Grid container className={styles.orRow}>
        <Grid item xs={5}>
          <hr />
        </Grid>
        <Grid item xs={2}>
          OR
        </Grid>
        <Grid item xs={5}>
          <hr />
        </Grid>
      </Grid>
      <Grid container className={styles.alternativeSignInLabelRow}>
        <Grid item xs={12}>
          Sign In using your account with
        </Grid>
      </Grid>
      <Grid container>
        <AlternativeSignInTile
          title={"Facebook"}
          icon={<Facebook className={styles.alternativeSignInIcon} />}
        />
        <AlternativeSignInTile
          title={"Twitter"}
          icon={<Twitter className={styles.alternativeSignInIcon} />}
        />
        <AlternativeSignInTile
          title={"Instagram"}
          icon={<Instagram className={styles.alternativeSignInIcon} />}
        />
      </Grid>
      <Grid container>
        <AlternativeSignInTile
          title={"Google"}
          icon={<Shop className={styles.alternativeSignInIcon} />}
        />
        <AlternativeSignInTile
          title={"AOL"}
          icon={<AcUnit className={styles.alternativeSignInIcon} />}
        />
        <AlternativeSignInTile
          title={"Yahoo"}
          icon={<Accessible className={styles.alternativeSignInIcon} />}
        />
      </Grid>
    </Dialog>
  );
};

export default SignIn;
