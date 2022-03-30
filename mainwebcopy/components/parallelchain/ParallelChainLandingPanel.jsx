/* eslint-disable max-len */
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NextLink from 'next/link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import CodeIcon from '@material-ui/icons/Code';
import { useBackdrop } from 'use-backdrop';
import YouTube from 'react-youtube';
import { FutureButton, Overtitle } from 'dtl-react-components';
import Section from '../Section';

import ParallelChainWebDemoPopup from './ParallelChainWebDemoPopup';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    backgroundImage: 'url(\'/images/parallelchain/landing.jpg\')',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.dark,
  },
  emphasisText: {
    fontWeight: 500,
    background: '-webkit-linear-gradient(#01B6B8, #f15e5a)',
    WebkitBoxDecorationBreak: 'clone',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitleText: {
    marginTop: `${theme.spacing(2)}px`,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageContainerSmall: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      '& $logoImage': {
        height: '100px',
      },
    },
  },
  logoImage: {
    display: 'block',
    height: '270px',
    pointerEvents: 'none',
  },
  logoImageSmall: {
    display: 'block',
    height: '160px',
    margin: '0 auto',
    marginBottom: `${theme.spacing(5)}px`,
    pointerEvents: 'none',
  },
  close: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    top: `${theme.spacing(1)}px`,
    left: '50vw',
    marginLeft: '-20px',
    zIndex: 100000,
    color: theme.palette.neutral.darkerGray,
    backgroundColor: theme.palette.neutral.darkestGray,
    opacity: 0.5,
    transition: 'opacity 300ms ease',
    '&:hover': {
      color: theme.palette.neutral.darkestGray,
      backgroundColor: theme.palette.neutral.darkerGray,
      opacity: 0.9,
    },
  },
  video: {
    height: '100vh',
    width: '100vw',
  },
  videoIcon: {
    marginRight: `${theme.spacing(2)}px`,
    width: '64px',
    height: '64px',
  },
  videoTitle: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem !important',
    },
  },
  videoButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: `${theme.spacing(3)}px`,
    padding: `${theme.spacing(2)}px`,
    color: theme.palette.primary.dark,
  },
  parallelChainExperienceContainer: {
    display: 'flex',
    textAlign: 'left',
    cursor: 'pointer',
    marginTop: `${theme.spacing(3)}px`,
    padding: `${theme.spacing(2)}px`,
    color: theme.palette.primary.dark,
  },
}));
export default function ParallelChainLandingPanel() {
  const classes = useStyles();
  const { displayBackdrop } = useBackdrop();
  const theme = useTheme();
  const smallOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => displayBackdrop((closeBackdrop) => (
    <>
      <IconButton onClick={closeBackdrop} classes={{ root: classes.close }}>
        <CloseIcon />
      </IconButton>
      <YouTube videoId="ebgDzEB4v24" allowFullscreen="true" className={classes.video} />
    </>
  ));

  const displayWebDemo = () => displayBackdrop((closeBackdrop) => (
    <>
      <ParallelChainWebDemoPopup closeBackdrop={closeBackdrop} />
    </>
  ));

  return (
    <Section
      spacingTop={12}
      className={classes.container}
    >
      { smallOrSmaller && (
        <img
          className={classes.logoImageSmall}
          src="/images/parallelchain/parallelchain-logo.svg"
          alt="ParallelChain"
        />
      )}
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <Typography variant="h3">
            Blockchain done right.
            {' '}
          </Typography>
          <Typography display="inline" variant="h3">
            Meet
            {' '}
          </Typography>
          <Typography display="inline" variant="h3" classes={{ root: classes.emphasisText }}>
            <b>ParallelChain®</b>
          </Typography>
          <Typography display="inline" variant="h3">
            <br/> Your <b>public+private</b> blockchain
            {' '}
          </Typography>
          <Typography variant="body1" classes={{ root: classes.subtitleText }}>
            ParallelChain® can be seamlessly configured into:
            <br />
            • A lightning-fast <b>public</b> distributed ledger that guarantees high performance with no compromises.
            <br />
            •	A <b>private</b> blockchain focused on enterprise agility and privacy
          </Typography>
          <FutureButton className={classes.videoButtonContainer} onClick={handleClick}>
            <SlowMotionVideoIcon classes={{ root: classes.videoIcon }} />
            <Typography variant="subtitle1" className={classes.videoTitle}>
              Watch the
              {' '}
              <br />
              {' '}
              ParallelChain® Video
            </Typography>
          </FutureButton>
          <FutureButton
            className={classes.videoButtonContainer}
            onClick={displayWebDemo}
          >
            <BubbleChartIcon classes={{ root: classes.videoIcon }} />
            <Typography variant="h6" className={classes.videoTitle}>
              Feel the Speed!
            </Typography>
          </FutureButton>
          <NextLink href="/technology/demo">
            <a>
              <FutureButton className={classes.parallelChainExperienceContainer}>
                <CodeIcon classes={{ root: classes.videoIcon }} />
                <div>
                  <Overtitle>
                    New
                  </Overtitle>
                  <Typography variant="h6" className={classes.videoTitle}>
                    Demo ParallelChain® on your local machine
                  </Typography>
                </div>
              </FutureButton>
            </a>
          </NextLink>
        </Grid>
        <Grid item xs={12} sm={12} md={5} className={classes.imageContainer}>
          <img
            className={classes.logoImage}
            src="/images/parallelchain/parallelchain-logo.svg"
            alt="ParallelChain"
          />
        </Grid>
      </Grid>
    </Section>
  );
}
