import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import Typography from '@material-ui/core/Typography';
import { useBackdrop } from 'use-backdrop';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import YouTube from 'react-youtube';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { FutureButton, Overtitle } from 'dtl-react-components';
import { Fingerprint } from '@material-ui/icons';
import Section from '../Section';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#27496D',
    padding: 0,
  },
  iconButton: {
    width: '40px',
    height: '40px',
    marginRight: `${theme.spacing(2)}px`,
  },
  videoButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    color: 'theme.palette.primary.dark',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  videoButtonContainer2: {
    marginTop: '2rem',
    minWidth: '270px',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    color: '#0c2454',
    border: '1px solid #f15e5a',
    borderRadius: '50px',
    boxShadow: 'none',
  },
  bioButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    color: 'theme.palette.primary.dark',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  bioButtonContainer2: {
    marginTop: '1rem',
    minWidth: '270px',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    color: '#0c2454',
    border: '1px solid #f15e5a',
    borderRadius: '50px',
    boxShadow: 'none',
  },
  iconButton: {
    width: '40px',
    height: '40px',
    marginRight: `${theme.spacing(2)}px`,
  },
  videoButton: {
    border: 2,
  },
  videoTitle: {
    textAlign: 'center',
    fontSize: 20,
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
}));

export default function ParallelwalletButtonBar() {
  const classes = useStyles();

  const { displayBackdrop } = useBackdrop();
  const handlePromo = () => displayBackdrop((closeBackdrop) => (
    <>
      <IconButton onClick={closeBackdrop} classes={{ root: classes.close }}>
        <CloseIcon />
      </IconButton>
      <YouTube videoId="AmaV4jcVY64" allowFullscreen="true" className={classes.video} />
    </>
  ));

  const handleBio = () => displayBackdrop((closeBackdrop) => (
    <>
      <IconButton onClick={closeBackdrop} classes={{ root: classes.close }}>
        <CloseIcon />
      </IconButton>
      <YouTube videoId="QyYTz0hlw-Y" allowFullscreen="true" className={classes.video} />
    </>
  ));

  return (
    <MagicBox
      render={(boxIn, boxRef) => (
        <FadeIn
          variant="up"
          in={boxIn}
          boxRef={boxRef}
        >
          <Section subContainerClassName={classes.root}>
            <Grid container style={{ maxWidth: '500px' }}>
              <Grid item xs={12} md={12} classes={{ root: classes.videoButtonContainer }}>
                <FutureButton className={classes.videoButtonContainer2} onClick={handlePromo}>
                  <SlowMotionVideoIcon classes={{ root: classes.iconButton }} />
                  <Typography variant="subtitle1" className={classes.videoTitle}>
                    Promo Video
                  </Typography>
                </FutureButton>
              </Grid>
              <Grid item xs={12} md={12} classes={{ root: classes.bioButtonContainer }}>
                <FutureButton
                  className={classes.bioButtonContainer2}
                  onClick={handleBio}
                >
                  <Fingerprint classes={{ root: classes.iconButton }} />
                  <Typography variant="subtitle1" className={classes.videoTitle}>
                    Biometrics Demo
                  </Typography>
                </FutureButton>
              </Grid>
              <Grid item xs={12} md={12} classes={{ root: classes.videoButtonContainer }}>
                <a
                  href="/parallelwallet/get"
                >
                  <FutureButton className={classes.bioButtonContainer2}>
                    {/* <SlowMotionVideoIcon classes={{ root: classes.iconButton }} /> */}
                    <Typography variant="subtitle1" className={classes.videoTitle}>
                      Sign up for Closed-Beta
                    </Typography>
                  </FutureButton>
                </a>
              </Grid>
            </Grid>
          </Section>
        </FadeIn>
      )}
    />
  );
}
