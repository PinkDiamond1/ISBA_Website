/* eslint-disable max-len */
import { makeStyles } from '@material-ui/core/styles';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import CodeIcon from '@material-ui/icons/Code';
import { useBackdrop } from 'use-backdrop';
import YouTube from 'react-youtube';
import { FutureButton } from 'dtl-react-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@mdi/react';
import { mdiBookOpenOutline, mdiLaptop } from '@mdi/js';
import Section from '../Section';

const ParallelChainWebDemoPopup = dynamic(() => import('./ParallelChainWebDemoPopup'));
const InteroperabilityPopup = dynamic(() => import('./interoperability/InteroperabilityPopup'));

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    backgroundImage: 'url(\'/images/parallelchain/landing.svg\')',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.dark,
    backgroundColor: '#f15e5a',
    // background: 'linear-gradient(22deg, rgba(241,94,90,1) 50%, rgba(241,164,164,1) 100%)',
  },
  emphasisText: {
    color: '#003D61',
  },
  subtitleText: {
    color: 'black',
    fontWeight: '400',
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
    width: '25px',
    height: '25px',
    color: 'black',
  },
  mdIcon: {
    width: '25px',
    height: '25px',
    color: 'black',
  },
  githubLogo: {
    width: '25px',
    height: '25px',
  },
  videoTitle: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem !important',
    },
  },
  buttonText: {
    marginLeft: `${theme.spacing(2)}px`,
  },
  videoButtonContainer: {
    borderRadius: '10px',
    minWidth: '365px',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: `${theme.spacing(3)}px`,
    marginLeft: '0',
    marginRight: 'auto',
    padding: `${theme.spacing(1)}px 0`,
    color: 'black',
    backgroundColor: '#fafafa',
    '&:hover': {
      color: 'white',
      backgroundColor: '#678783',
      boxShadow: `0 3px 15px 0 ${theme.palette.primary.white}`,
    },
    '&:hover $githubLogo': {
      color: 'white',
    },
    '&:hover $videoIcon': {
      color: 'white',
    },
    '&:hover $mdIcon': {
      color: 'white',
    },
    border: '2px solid black',
  },
}));

export default function TechnologyLandingPanel() {
  const classes = useStyles();
  const { displayBackdrop } = useBackdrop();
  const showPopup = () => displayBackdrop((closeBackdrop) => (
    <InteroperabilityPopup closeBackdrop={closeBackdrop} />
  ));

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
      spacingTop={16}
      className={classes.container}
    >
      <Grid container>
        <Grid item xs={12} style={{ textAlign: 'left' }}>
          <Typography variant="h1" classes={{ root: classes.emphasisText }}>
            Lightning fast, secure and interoperable suite of blockchains
          </Typography>
          <Typography variant="h3" classes={{ root: classes.subtitleText }}>
            Designed to bring speedy, performant and reliable blockchains to enterprises for the digital economy.
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: '3rem' }}>
          <Grid item xs={12} md={6} lg={4}>
            <FutureButton className={classes.videoButtonContainer} onClick={handleClick}>
              <SlowMotionVideoIcon classes={classes.videoIcon} />
              <Typography variant="h6" classes={{ root: classes.buttonText }}>
                ParallelChain® Private Demo Video
              </Typography>
            </FutureButton>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FutureButton
              className={classes.videoButtonContainer}
              onClick={displayWebDemo}
            >
              <BubbleChartIcon classes={classes.videoIcon} />
              <Typography variant="h6" classes={{ root: classes.buttonText }}>
                Feel the Speed!
              </Typography>
            </FutureButton>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <NextLink href="/reports-and-whitepapers">
              <a>
                <FutureButton className={classes.videoButtonContainer}>
                  <Icon path={mdiBookOpenOutline} className={classes.mdIcon} />
                  <Typography variant="h6" classes={{ root: classes.buttonText }}>
                    Reports & Whitepapers
                  </Typography>
                </FutureButton>
              </a>
            </NextLink>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <a
              style={{ textDecoration: 'none' }}
              href="https://github.com/digital-transaction/parallelcore-client-sdk-go"
              target="_blank"
              rel="noreferrer"
            >
              <FutureButton className={classes.videoButtonContainer}>
                <GitHubIcon className={classes.githubLogo} />
                <Typography variant="h6" classes={{ root: classes.buttonText }}>
                  ParallelChain® Private SDK
                </Typography>
              </FutureButton>
            </a>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FutureButton
              className={classes.videoButtonContainer}
              onClick={showPopup}
            >
              <CodeIcon classes={classes.videoIcon} />
              <Typography variant="h6" classes={{ root: classes.buttonText }}>
                ParallelChain® Private Smart Contracts
              </Typography>
            </FutureButton>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <NextLink href="/technology/demo">
              <FutureButton className={classes.videoButtonContainer}>
                <Icon path={mdiLaptop} className={classes.mdIcon} />
                <Typography variant="h6" classes={{ root: classes.buttonText }}>
                  Test ParallelChain® Private
                </Typography>
              </FutureButton>
            </NextLink>
          </Grid>
        </Grid>

      </Grid>
    </Section>
  );
}
