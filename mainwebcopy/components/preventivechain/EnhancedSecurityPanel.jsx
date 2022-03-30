import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

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
    fontWeight: '400',
    color: 'black'
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
}));

export default function EnhancedSecurityPanel() {
  const classes = useStyles();

  return (
    <Section component="section" subContainerClassName={classes.container} spacingBottom={3}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} classes={{ root: classes.imageContainer }}>
          <img
            src="/images/preventivechain/preventivechain-login.png"
            alt="PreventiveChain Login"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6} classes={{ root: classes.textContainer }}>
          <Typography variant="h3" classes={{ root: classes.titleText }}>
            A proprietary layer of protection
          </Typography>
          <Typography variant="h2" classes={{ root: classes.subtitleText }}>
            Enhanced security, at every point of interaction.
          </Typography>
          <Typography variant="h3" classes={{ root: classes.bodyText }}>
            PreventiveChain logs and protects the safety of all user interaction with
            the system.
          </Typography>
          <Typography variant="h3" classes={{ root: classes.bodyText }}>
            And by all, we mean everything. From something as mundane as opening a website,
            to something less clear-cut and possibly malicious as I/O traffic between the computer
            and the outside world.
          </Typography>
          <Typography variant="h3" classes={{ root: classes.bodyText }}>
            Logged data is not only persisted on ParallelChain® for investigation in the event of
            a data leak, it is analyzed in close to real-time. Suspicious patterns of behavior are
            flagged, and if need be, will lock the computer.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
