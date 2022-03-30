/* eslint-disable max-len */
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from '@material-ui/core';
import { useBackdrop } from 'use-backdrop';
import YouTube from 'react-youtube';
import Section from '../Section';
import BreadCrumbsLocator from '../BreadCrumbsLocator';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    backgroundImage: 'url(\'/images/chattelchain/landing.jpg\')',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.products.chattelChainDark,
  },
  titleText: {
    color: 'black',
    marginBottom: `${theme.spacing(3.5)}px`,
    fontWeight: '400'
  },
  subtitleText: {
    marginBottom: `${theme.spacing(3.5)}px`,
  },
  emphasisText: {
    color: '#01B6B8',
    marginBottom: `${theme.spacing(3.5)}px`,
  },
  contentText: {
    color: 'black',
    fontWeight: '400'
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
    height: '240px',
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
  videoTitle: {
    marginLeft: `${theme.spacing(1)}px`,
  },
  videoButtonContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: `${theme.spacing(4)}px`,
    color: theme.palette.products.chattelChainDark,
    transition: 'color 300ms ease',
    '&:hover': {
      color: theme.palette.products.chattelChain,
    },
  },
}));

export default function ChattelChainLandingPanel() {
  const theme = useTheme();
  const classes = useStyles();
  const { displayBackdrop } = useBackdrop();
  const smallOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => displayBackdrop((closeBackdrop) => (
    <>
      <IconButton onClick={closeBackdrop} classes={{ root: classes.close }}>
        <CloseIcon />
      </IconButton>
      <YouTube videoId="g2h4nkUmt9k" allowFullscreen="true" className={classes.video} />
    </>
  ));

  return (
    <Section
      spacingTop={12}
      className={classes.container}
      subContainerClassName={classes.subContainer}
    >
      { smallOrSmaller && (
      <img
        className={classes.logoImageSmall}
        src="/images/chattelchain/chattelchain-logo.svg"
        alt="ChattelChain"
      />
      )}
      <Grid container>
        <Grid item xs={12} md={7}>
          <BreadCrumbsLocator
            breadCrumbLeftText="Products"
            breadCrumbRightText="Chattel-Chain"
            linkForBreadCrumb="/parallelchain/enterprise"
          />
          <Typography variant="h3" classes={{ root: classes.subtitleText }}>
            High-Performing Asset Tokenization With
          </Typography>
          <Typography variant="h1" classes={{ root: classes.emphasisText }}>
            Instant Settlement
          </Typography>
          <Typography variant="subtitle1" classes={{ root: classes.contentText }}>
            ChattelChain is a fast asset tokenization platform built upon the high-performing
            ParallelChain® to create asset-backed tokens. ChattelChain offers instantaneous cryptocurrency trading,
            insider fraud prevention and integration with the
            unhackable+unforgettable <a href="/parallelwallet" style={{ color: 'inherit', textDecoration: 'underline' }}>ParallelWallet</a>.
          </Typography>
          {/* <div className={classes.videoButtonContainer}>
            <SlowMotionVideoIcon
              style={{ fontSize: 70 }}
              onClick={handleClick}
            />
            <Typography variant="subtitle1" classes={{ root: classes.videoTitle }}>
              Watch the
              {' '}
              <br />
              {' '}
              ChattelChain Video
            </Typography>
          </div> */}
        </Grid>
        <Grid item xs={12} sm={12} md={5} className={classes.imageContainer}>
          <img className={classes.logoImage} src="/images/chattelchain/chattelchain-logo.svg" alt="ChattelChain" />
        </Grid>
      </Grid>
    </Section>
  );
}
