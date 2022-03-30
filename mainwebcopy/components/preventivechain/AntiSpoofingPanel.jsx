import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FutureButton } from 'dtl-react-components';
import Section from '../Section';
import { Overtitle }from 'dtl-react-components';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.products.preventiveChainDark,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleText: {
    color: '#F16A21',
    marginBottom: `${theme.spacing(2.5)}px`,
  },
  subtitleText: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  bodyText: {
    marginBottom: `${theme.spacing(2)}px`,
    color: 'black',
    fontWeight: '400'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    display: 'block',
    width: '100%',
    pointerEvents: 'none',
  },
  iconButton: {
    width: '80px',
    height: '80px',
    marginRight: '8px',
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
}));

export default function AntiSpoofingPanel() {
  const classes = useStyles();

  return (
    <Section component="section" subContainerClassName={classes.container} spacingBottom={3}>
      <Grid container spacing={6} direction="row-reverse">
        <Grid item xs={12} md={6} classes={{ root: classes.imageContainer }}>
          <img
            src="/images/preventivechain/anti-spoofing.png"
            alt="Dynamic watermarks"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.textContainer }}>
          <Typography variant="h3" classes={{ root: classes.titleText }}>
            Biometric authentication
          </Typography>
          <Typography variant="h2" classes={{ root: classes.subtitleText }}>
            2D/3D anti-spoofing
          </Typography>
          <Typography variant="h3" classes={{ root: classes.bodyText }}>
            A weakness with run-of-the-mill face recognition solutions is that
            they often cannot distinguish between three-dimensional faces and
            two-dimensional prints.
          </Typography>
          <Typography variant="h3" classes={{ root: classes.bodyText }}>
            PreventiveChain&apos;s biometric authentication is intended to be
            paired with dual-sensor webcams, with one sensor capturing visible light,
            and another capturing infrared. The information this setup captures
            allows us to distinguish prints from real human beings, not only by
            analyzing depth information, but also by detecting the user&apos;s pulse.
          </Typography>
          <Link style={{ textDecoration: 'none' }} href="https://antispoofdemo.digital-transaction.net/webcamcapture6">
            <FutureButton
              className={classes.videoButtonContainer}
            >
              <img className={classes.iconButton} src="/images/preventivechain/antispoof-icon.png" alt="antispoof" />
              <div>
                <Typography variant="subtitle1" className={classes.videoTitle}>
                  Try our Anti-Spoofing now! (beta)
                </Typography>
                <Typography variant="subtitle2" className={classes.videoTitle}>
                  *webcam required
                </Typography>
              </div>
            </FutureButton>
          </Link>
        </Grid>
      </Grid>
    </Section>
  );
}
