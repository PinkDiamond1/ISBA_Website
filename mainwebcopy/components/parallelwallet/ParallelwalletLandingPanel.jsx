/* eslint-disable max-len */
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FutureButton } from 'dtl-react-components';
import { useBackdrop } from 'use-backdrop';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import YouTube from 'react-youtube';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    backgroundImage: 'url(\'/images/parallelwallet/back_top.png\')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.products.chattelChainDark,
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
    },
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 36,
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
  videoButton: {
    borderRadius: 100,
  },
  video: {
    height: '100vh',
    width: '100vw',
  },
}));

export default function ParallelwalletLandingPanel() {
  const classes = useStyles();

  const { displayBackdrop } = useBackdrop();
  const handleBio = () => displayBackdrop((closeBackdrop) => (
    <>
      <IconButton onClick={closeBackdrop} classes={{ root: classes.close }}>
        <CloseIcon />
      </IconButton>
      <YouTube videoId="QyYTz0hlw-Y" allowFullscreen="true" className={classes.video} />
    </>
  ));

  return (
    <Section
      spacingTop={8}
      className={classes.container}
      subContainerClassName={classes.subContainer}
    >
      <div className={classes.gradient} />
      <Typography variant="h2" className={classes.heroText}>
        A Blockchain In Your Pocket.
      </Typography>
      <FutureButton dark onClick={handleBio} className={classes.videoButton}>
        <Typography
          display="block"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
          variant="h6"
        >
          <PlayArrowIcon style={{ marginRight: '8px' }} />
          Watch the biometrics demo
        </Typography>
      </FutureButton>
    </Section>
  );
}
