import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Section from '../Section';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';

const useStyles = makeStyles((theme) => ({
  card: {
    alignItems: 'baseline',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '-80%',
      backgroundColor: 'white',
      zIndex: 200,
      left: 0,
      right: 0,
      width: '350px',
      margin: 'auto',
    },
  },
  outer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      backgroundColor: 'transparent',

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
    width: '90px',
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      height: '50px',
    },
  },
  digfin: {
    paddingBottom: 14,
  },
  subSectionLabel: {
    color: '#333333',
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
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
  },
  item: {
    flex: '1 1 0%', /* ADDED */
    minWidth: '0', /* ADDED */
    textAlign: 'center',
    display: 'inline-block',
    width: '33%',
    height: '200px',
    background: 'whitesmoke',
    verticalAlign: 'middle',
    '&:hover': {
      cursor: 'pointer',
      flexBasis: '100%',
      transition: 'flex-basis 0.3s ease-out',
    },
  },
}));

export default function HomeEnterprisePanel() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Section
      background={theme.palette.neutral.white}
      spacingTop={2}
      spacingBottom={0}
      className={classes.outer}
    >
      <Link href="/parallelchain/enterprise">
        <Grid container spacing={6} direction="row" spacingBottom={0} className={classes.card}>

          <Grid item xs={12} lg={6} className={classes.textContainer}>
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
                  <Typography variant="h4" style={{ color: 'black' }}>
                    ParallelChain Enterprise
                  </Typography>
                </FadeIn>
              )}
            />
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <Typography variant="body2" className={classes.body} style={{ color: 'black' }}>
                    ParallelChain Enterprise is a layer-1, permissioned blockchain with tested and proven speeds of 120,000 TPS and ~0.003 second latency.
                  </Typography>
                  <br />
                  <Typography variant="body2" className={classes.body} style={{ color: 'black' }}>
                    With a wide range of layer-2 applications built atop, ParallelChain Enterprise powers the most performant, scalable, privacy-protected and GDPR-friendly solutions tailored for your business.
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
