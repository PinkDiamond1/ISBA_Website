import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.products.preventiveChainDark,
  },
  titleText: {
    marginBottom: `${theme.spacing(6)}px`,
    color: '#2B0000'
  },
  image: {
    display: 'block',
    height: '50px',
    [theme.breakpoints.up('sm')]: {
      height: '55px',
    },
    [theme.breakpoints.up('md')]: {
      height: '70px',
    },
    pointerEvents: 'none',
  },
  featureTitleText: {
    marginTop: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(1)}px`,
  },
  featureContentText: {
    color: 'black'
  }
}));

export default function PreventiveChainFeaturesPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={2}
      spacingBottom={15}
      subContainerClassName={classes.container}
    >
      <Typography variant="h2" classes={{ root: classes.titleText }}>
        Features
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={6} md={3}>
          <img src="/images/preventivechain/multi-factor.svg" alt="Multi factor" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Multi-factor User Authentication
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureContentText }}
          >
            Multiple layers of protection to secure user account. Failing to meet any
            requirement: no access.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="/images/preventivechain/facial-recognition.svg" alt="Facial recognition" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Facial Recognition with 2D/3D anti-spoofing
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureContentText }}
          >
            Distinguishes between real persons and printed graphics.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="/images/preventivechain/restricted-access.svg" alt="Restricted access rights" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Restricted Access Rights
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureContentText }}
          >
            Exposes different subsets of the filesystem to users in different permission
            levels.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="/images/preventivechain/realtime-tracking.svg" alt="Real-time tracking" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Real-time tracking of user behaviour
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureContentText }}
          >
            AI models monitors the user&apos;s behaviour for suspicious activity, and
            automatically logs them out if need be.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="/images/preventivechain/user-control.svg" alt="User control" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Control override
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureContentText }}
          >
            Administrators can forcibly take control of installed devices in the event of
            an attack.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="/images/preventivechain/watermarks.svg" alt="Security watermarks" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Security watermarks
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureContentText }}
          >
            Deters screen capture by making the potentially malicious user&apos;s identity visible
            in screenshots.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="/images/preventivechain/recording-activities.svg" alt="User activities recording" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Immutable persisting of captured data
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureContentText }}
          >
            Everything the system monitors is stored on ParallelChain®, making evidence tampering
            impossible.
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <img src="/images/preventivechain/restricted-drives.svg" alt="Restricted drives" className={classes.image} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Restricted external & network drives
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureContentText }}
          >
            Selectively blocks use of USB, Bluetooth, Network Storage, and other external
            peripherals.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
