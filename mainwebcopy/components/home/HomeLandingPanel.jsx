import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typewriter from 'typewriter-effect';
import Section from '../Section';
import HomeEnterprisePanel from './HomeEnterprisePanel';
import HomeMainnetPanel from './HomeMainnetPanel';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    minWidth: '100vw',
    [theme.breakpoints.down('sm')]: {
      minHeight: '100vh',
      background: 'linear-gradient(0deg, #FFFFFF 10%, #546563 90%)',
    },

  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectFit: 'fill',
    zIndex: 0,
  },
  textContainer: {
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
    },
  },
  titleText: {
    color: 'white',
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      marginBottom: '10px',
    },
    zIndex: 1,
  },
  typewriterText: {
    color: 'white',
    fontWeight: '300',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '150px',
      height: '80px',
    },
    zIndex: 1,
  },
  subtitleText: {
    fontWeight: '100',
    color: 'white',
    marginTop: `${theme.spacing(2)}px`,
  },
}));

export default function HomeLandingPanel() {
  const theme = useTheme();
  const classes = useStyles();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const text = ['Tokenizing your business and assets', 'Real-time supply chain visibility', 'Tailor-made RegTech solutions for business compliance', 'FinTech and smart city applications', 'Protecting corporate and consumer data', 'Launching your start-up business', 'Running high-performance decentralized applications', ' Fast and reliable trade execution'];

  return (
    <div style={{ marginBottom: 0 }}>
      <Section
        spacingTop={20}
        className={classes.container}
      >
        {!sm && (
        <video autoPlay muted loop className={classes.video}>
          <source src="/images/index/animatedtopbg.mp4" type="video/mp4" />
        </video>
        )}

        {!sm && (
        <FadeIn variant="up" in className={classes.textContainer}>
          <Typography
            display="inline"
            variant="h1"
            classes={{
              root: classes.titleText,
            }}
          >
            Breakthrough blockchain for
          </Typography>

          <Typography
            display="inline"
            variant="h3"
            classes={{
              root: `${classes.titleText} ${classes.typewriterText}`,
            }}
          >
            <Typewriter
              options={{
                strings: text,
                autoStart: true,
                loop: true,
                delay: 1,
                deleteSpeed: 1,
                pauseFor: 3000,
              }}
            />
          </Typography>
        </FadeIn>
        )}
        {sm && (
        <FadeIn variant="up" in className={classes.textContainer}>
          <Typography
            display="inline"
            variant="h6"
            classes={{
              root: classes.titleText,
            }}
          >
            Breakthrough blockchain for
          </Typography>

          <Typography
            display="inline"
            variant="h6"
            classes={{
              root: `${classes.titleText} ${classes.typewriterText}`,
            }}
          >
            <Typewriter
              options={{
                strings: text,
                autoStart: true,
                loop: true,
                delay: 1,
                deleteSpeed: 1,
                pauseFor: 3000,
              }}
            />
          </Typography>
        </FadeIn>
        )}
        {sm && <HomeEnterprisePanel />}
        {sm && <HomeMainnetPanel />}
      </Section>
    </div>
  );
}
