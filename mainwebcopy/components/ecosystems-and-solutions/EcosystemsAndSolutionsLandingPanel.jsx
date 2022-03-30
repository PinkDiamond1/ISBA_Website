import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Overtitle } from 'dtl-react-components';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
  overTitleText: {
    marginTop: `${theme.spacing(16)}px`,
  },
  titleText: {
    color: theme.palette.neutral.dark,
    marginBottom: `${theme.spacing(3)}px`,
    lineHeight: 1.4,
  },
  titleContainer: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  cardGridContainer: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  card: {
    borderRadius: '4px',
    boxShadow: 'none',
    backgroundColor: '#2f3663',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${theme.spacing(5)}px ${theme.spacing(3)}px`,
    transition: 'all 300ms',
    '&:hover': {
      backgroundColor: '#5862a6',
    },
  },
  logo: {
    height: '50px',
    marginRight: `${theme.spacing(2)}px`,
    pointerEvents: 'none',
  },
  cardTitleText: {
    color: `${theme.palette.neutral.white}`,
  },
  emphasisContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '4px',
  },
  emphasisText: {
    textAlign: 'center',
    color: `${theme.palette.neutral.white}`,
    marginBottom: `${theme.spacing(1)}px`,
    fontSize: '0.95em',
  },
  emphasisTitle: {
    color: `${theme.palette.neutral.white}`,
    textAlign: 'center',
    marginBottom: `${theme.spacing(3)}px`,
    fontWeight: '550',
  },
  startButton: {
    marginTop: `${theme.spacing(2)}px`,
    backgroundColor: 'white',
    border: '4px',
    borderRadius: '16px',
    color: 'linear-gradient(45deg, rgba(214,214,214,0.4) 0%, rgba(180,255,133,0.85) 140%)',
    alignSelf: 'center',
  },
  line: {
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${theme.spacing(7)}px`,
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    },
  },
  smartCityContentBox: {
    height: '100%',
    backgroundImage: 'url(\'/images/ecosystems-and-solutions/smart_city_bg.jpg\')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '5px',
  },
  fintechContentBox: {
    height: '100%',
    backgroundImage: 'url(\'/images/ecosystems-and-solutions/fintech_bg.png\')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '5px',
  },
  smartCityOverlay: {
    height: '100%',
    background: 'linear-gradient(45deg, rgba(214,214,214,0.6) -20%, rgba(40,115,46,0.95) 130%)',
    padding: `${theme.spacing(4)}px`,
    display: 'flex',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
  },
  fintechOverlay: {
    height: '100%',
    background: 'linear-gradient(45deg, rgba(214,214,214,0.4) -20%, rgba(109,111,255,0.95) 130%)',
    padding: `${theme.spacing(4)}px`,
    display: 'flex',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
  },
}));

export default function EcosystemsAndSolutionsLandingPanel() {
  const classes = useStyles();

  return (
    <Section className={classes.container}>
      <Overtitle className={classes.overTitleText}>
        Unleashing blockchain&apos;s potential
      </Overtitle>
      <Typography
        variant="h3"
        classes={{
          root: classes.titleText,
        }}
      >
        Build custom applications on the world’s fastest, most privacy compliant blockchain platform
      </Typography>
      <Grid container spacing={2} className={classes.cardGridContainer}>
        <Grid item xs={12} md={6} className={classes.emphasisContainer}>
          <div className={classes.smartCityContentBox}>
            <div className={classes.smartCityOverlay}>
              <div className={classes.line}>
                <Typography variant="h4" className={classes.emphasisTitle}>
                  Smart City
                </Typography>
                <Typography variant="subtitle1" className={classes.emphasisText}>
                  A smart city's success rests on real-time, trustworthy and transparent data sharing between every infrastructure,
                  device and network without compromising on privacy and security. A hybrid blockchain that can be simultaneously
                  configured into all four modes is essential in making this happen.
                </Typography>
                <Typography variant="subtitle1" className={classes.emphasisText}>
                  Click start to see what a ParallelChain®-powered smart city looks like:
                </Typography>
                <Button
                  variant="contained"
                  classes={{
                    root: classes.startButton,
                    label: classes.label,
                  }}
                  href="https://prezi.com/view/VpThYTxMjvvAGpILSI1Z/"
                  target="_blank"
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.emphasisContainer}>
          <div className={classes.fintechContentBox}>
            <div className={classes.fintechOverlay}>
              <div className={classes.line}>
                <Typography variant="h4" className={classes.emphasisTitle}>
                  FinTech and CBDC
                </Typography>
                <Typography variant="subtitle1" className={classes.emphasisText}>
                  Many countries are exploring or launching trials for their Central Bank Digital Currency (CBDC),
                  and blockchain is the only technology that has the capacity to support widescale CBDC deployment.
                  The underlying blockchain must be one that is agile enough to operate in all 4 modes: public, private,
                  permissioned and permissionless.
                </Typography>
                <Typography variant="subtitle1" className={classes.emphasisText}>
                  Click start to see how ParallelChain® supports FinTech and CBDC initiatives:
                </Typography>
                <Button
                  variant="contained"
                  classes={{
                    root: classes.startButton,
                    label: classes.label,
                  }}
                  href="https://prezi.com/view/I07LoNM3SayQSTpqn7Uc/"
                  target="_blank"
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}
