import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '80%',
      zIndex: 200,
      left: 0,
      right: 0,
      width: '350px',
      margin: 'auto',
      backgroundImage: 'url(\'/images/parallelchain/mainnet/mainnetbg.gif\')',
    },
  },
  outer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      backgroundColor: '#546563',
    },

  },
  panelContainer: {
    width: '100vh',
    backgroundColor: '#546563',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'transparent',
      width: '0vh',
      marginBottom: '30rem',

    },
  },
  titleContainer: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    pointerEvents: 'none',
  },
  logoImage: {
    width: '90%',
    pointerEvents: 'none',
    margin: 'auto auto',
  },
  button: {
    marginTop: `${theme.spacing(2)}px`,
  },
  title: {
    fontWeight: '100',
  },
  body: {
    fontWeight: '100',
    color: 'white',
  },
  body2: {
    marginTop: `${theme.spacing(2)}px`,
    fontWeight: '100',

  },
  imageContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 'auto',
  },
  sourceImage: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(2)}px`,
    display: 'block',
    padding: 2,
    [theme.breakpoints.up('xs')]: {
      width: '120px',
      height: '70px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '140px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '175px',
      height: '80px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '75px',
      height: '70px',
    },
    pointerEvents: 'none',
  },
  bitcoinist: {
    width: '300px',
    height: '45px',
    [theme.breakpoints.down('md')]: {
      width: '230px',
      height: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '110px',
      height: '40px',
    },
  },
  vf: {
    paddingTop: 2,
    width: '90px',>
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.fonts.poppins,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    marginBottom: `${theme.spacing(1)}px`,
  },
  subSectionLabel2: {
    color: '#009883',
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.fonts.poppins,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    marginBottom: `${theme.spacing(1)}px`,
  },
}));

export default function HomeMainnetPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section
      spacingTop={2}
      spacingBottom={12}
      className={classes.panelContainer}
    >
      <Link href="/parallelchain/mainnet">
        <Grid container spacing={6} direction="row-reverse" spacingBottom={0} className={classes.card}>
          <Grid item xs={12} lg={6} className={classes.textContainer}>
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
                  <Typography variant="h4" style={{ color: 'white' }}>
                    ParallelChain Mainnet
                  </Typography>
                </FadeIn>
              )}
            />
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <Typography variant="body2" className={classes.body}>
                    ParallelChain Mainnet is a layer-1 open-source blockchain technology that can perform at an optimal speed of 80,000 TPS, providing the most powerful smart contract platform for decentralised applications
                  </Typography>
                  <br />
                  <Typography variant="body2" className={classes.body}>
                    The network is secured by ParallelBFT, a unique proof-of-stake mechanism with a masterfully-crafted class system to ensure accountable and efficient node operation.
                  </Typography>
                </FadeIn>
              )}
            />
          </Grid>
        </Grid>
      </Link>

    </Section>
  );
}
