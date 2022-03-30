import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import HomeLogosPanel from './HomeLogosPanel';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    marginBottom: `${theme.spacing(3)}px`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: '103%',
    pointerEvents: 'none',
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(4)}px`,
      width: '100%',
    },
  },
  body: {
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      paddingLeft: `${theme.spacing(4)}px`,
    },
  },
  body2: {
    marginTop: `${theme.spacing(2)}px`,
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      paddingLeft: `${theme.spacing(4)}px`,
    },
  },
  titleText: {
    // marginBottom: `${theme.spacing(2)}px`,
    textAlign: 'left',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      marginBottom: `${theme.spacing(-2)}px`,
      paddingLeft: `${theme.spacing(4)}px`,
    },

  },
  overtitle: {
    color: '#546563',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: `${theme.spacing(4)}px`,
    },
  },
}));

export default function FutureTeamPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section
      spacingTop={6}
    >
      <Grid container spacing={6} direction="row-reverse">
        <Grid item xs={12} lg={4} className={classes.textContainer}>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
                <Typography variant="h4" className={classes.overtitle}>
                  Why ParallelChain Lab
                </Typography>
                <Typography variant="h2" className={classes.titleText}>
                  Positioned to Disrupt
                </Typography>
              </FadeIn>
            )}
          />
          {smOrSmaller && (
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <img src="/images/index/parallelchain_team.png" alt="Parallel Chain Team" className={classes.image} />
                </FadeIn>
              )}
            />
          )}
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <Typography variant="h5" className={classes.body} style={{ color: 'black' }}>
                  ParallelChain is a base-layer technology infrastructure invented
                  to take blockchain out of the garage and thrust it into the mainstream.
                </Typography>
                <Typography variant="h5" className={classes.body2} style={{ color: 'black' }}>
                  With record-breaking scalability and high speeds, seamless
                  public-private integration and an architecture that focuses
                  on user privacy and accountability - ParallelChain creates a
                  global-scale blockchain ecosystem designed for the real world.
                </Typography>
              </FadeIn>
            )}
          />
        </Grid>
        {!smOrSmaller && (
          <Grid item xs={12} lg={8}>
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <img src="/images/index/parallelchain_team.png" alt="Parallel Chain Team" className={classes.image} />
                </FadeIn>
              )}
            />
          </Grid>
        )}
      </Grid>
      <HomeLogosPanel />
    </Section>
  );
}
