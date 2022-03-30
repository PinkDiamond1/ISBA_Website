import Icon from '@mdi/react';
import {
  mdiFaceRecognition, mdiMicrophoneSettings, mdiSignatureFreehand, mdiUpdate, mdiShieldKeyOutline,
} from '@mdi/js';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Grid } from '@material-ui/core';
import Slide from 'react-reveal/Slide';
import Section from '../../Section';
import AppFeatureLarge from './AppFeatureLarge';

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  iphoneFrame: {
    height: '55vh',
    pointerEvents: 'none',
  },
  displayText: {
    color: '#fff',
    textAlign: 'center',
  },
}));

export default function AppShowcaseLarge() {
  const classes = useStyles();

  return (
    <div>
      <Section subContainer>
        <Grid container spacing={0}>
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={0}>
              <Slide bottom>
                <Grid item xs={12} md={10} style={{ marginBottom: 16 }}>
                  <Typography variant="h6" className={classes.displayText}>
                    Secure assets with your biometrics.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <div className={classes.itemContainer}>
                    <img
                      src="/images/parallelwallet/mock/Home.svg"
                      alt="iPhone frame"
                      className={classes.iphoneFrame}
                    />
                  </div>
                </Grid>
              </Slide>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={0}>
              <Slide top>
                <Grid item md={1} style={{ marginBottom: 40 }} />
                <Grid item md={10}>
                  <div className={classes.itemContainer}>
                    <img
                      src="/images/parallelwallet/mock/Onboarding.svg"
                      alt="iPhone frame"
                      className={classes.iphoneFrame}
                    />
                  </div>
                </Grid>
                <Grid item md={1} style={{ marginBottom: 40 }} />
              </Slide>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={0}>
              <Slide bottom>
                <Grid item xs={12} md={10} style={{ marginBottom: 40 }}>
                  <div className={classes.itemContainer}>
                    <img
                      src="/images/parallelwallet/mock/Setup Account.svg"
                      alt="iPhone frame"
                      className={classes.iphoneFrame}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={10} style={{ marginTop: 16 }}>
                  <Typography variant="h6" className={classes.displayText}>
                    Take full control over your own privacy.
                  </Typography>
                </Grid>
              </Slide>
            </Grid>

          </Grid>
        </Grid>
      </Section>
    </div>
  );
}
