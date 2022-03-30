import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Grid from '@material-ui/core/Grid';
import { useBackdrop } from 'use-backdrop';
import YouTube from 'react-youtube';
import Link from '@material-ui/core/Link';
import { FutureButton } from 'dtl-react-components';
import Section from '../Section';
import BreadCrumbsLocator from '../BreadCrumbsLocator';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    backgroundImage: 'url(\'/images/preventivechain/landing.jpg\')',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.products.preventiveChainDark,
  },
  emphasisText: {
    color: theme.palette.products.preventiveChain,
  },
  titleText: {
    color: 'black',
    marginBottom: `${theme.spacing(4)}px`,
    fontWeight: '400'
  },
  subtitleText: {
    marginBottom: `${theme.spacing(4)}px`,
  },
  contentText: {
    marginTop: `${theme.spacing(2)}px`,
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
        height: '85px',
      },
    },
  },
  iconButton: {
    width: '64px',
    height: '64px',
    marginRight: `${theme.spacing(2)}px`,
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
  videoButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: `${theme.spacing(3)}px`,
    padding: `${theme.spacing(2)}px`,
    borderRadius: '16px',
    transition: 'color 300ms ease-in-out',
    color: theme.palette.products.preventiveChainDark,
    '&:hover': {
      color: theme.palette.products.preventiveChain,
    },
    border: '2px solid black'
  },
  videoTitle: {
    textAlign: 'left',
  },
  video: {
    height: '100vh',
    width: '100vw',
  },
}));

export default function PreventiveChainLandingPanel() {
  const classes = useStyles();
  const { displayBackdrop } = useBackdrop();
  const theme = useTheme();
  const smallOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  const DemoClick = () => displayBackdrop((closeBackdrop) => (
    <>
      <IconButton onClick={closeBackdrop} classes={{ root: classes.close }}>
        <CloseIcon />
      </IconButton>
      <YouTube videoId="m3_wZ2XPS7o" allowFullscreen="true" className={classes.video} />
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
          src="/images/preventivechain/preventivechain-logo.svg"
          alt="PreventiveChain"
        />
      )}

      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <BreadCrumbsLocator
            breadCrumbLeftText="Products"
            breadCrumbRightText="EKYC-CHAIN"
            linkForBreadCrumb="/parallelchain/enterprise"
          />
          <Typography variant="h3" classes={{ root: classes.subtitleText }}>
            Groundbreaking Cybersecurity For
          </Typography>
          <Typography display="inline" variant="h1" classes={{ root: classes.emphasisText }}>
            Insider Monitoring
          </Typography>
          <div />
          <Typography variant="h3" classes={{ root: classes.contentText }}>
            PreventiveChain is a unique security management system built upon
            Digital Transaction's high-performing ParallelChain® platform. This biometric system
            incorporates cameras to help businesses monitor user patterns
            and pre-empt improper use and leakage of the organization-critical
            data.
          </Typography>

          <FutureButton
            className={classes.videoButtonContainer}
            onClick={DemoClick}
          >
            <SlowMotionVideoIcon classes={{ root: classes.iconButton }} />
            <Typography variant="subtitle1" className={classes.videoTitle}>
              Watch the PreventiveChain Video
            </Typography>
          </FutureButton>

          <div />

          <a
            href="https://cms.parallelchain.io/uploads/Preventive_Chain_Brochure_9621949f40.pdf"
            target="_blank"
          >
            <FutureButton
              className={classes.videoButtonContainer}
            >
              <ImportContactsIcon classes={{ root: classes.iconButton }} />
              <Typography variant="subtitle1" className={classes.videoTitle}>
                Read the PreventiveChain Brochure
              </Typography>
            </FutureButton>
          </a>

          <Link style={{ textDecoration: 'none' }} href="https://antispoofdemo.digital-transaction.net/webcamcapture6">
            <FutureButton
              className={classes.videoButtonContainer}
            >
              <img className={classes.iconButton} src="/images/preventivechain/antispoof-icon.png" alt="Antispoof" />
              <Typography variant="subtitle1" className={classes.videoTitle}>
                Try our Anti-Spoofing now! (beta)
              </Typography>
              <Typography variant="subtitle2" className={classes.videoTitle}>
                *webcam required
              </Typography>
            </FutureButton>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={5} className={classes.imageContainer}>
          <img className={classes.logoImage} src="/images/preventivechain/preventivechain-logo.svg" alt="PreventiveChain" />
        </Grid>

      </Grid>
    </Section>
  );
}
