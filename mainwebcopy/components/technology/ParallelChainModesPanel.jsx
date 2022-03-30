import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((t) => ({
  root: {
    color: t.palette.primary.dark,
  },
  titleText: {
    color: '#678783'
  },
  subtitleText: {
    marginBottom: `${t.spacing(1)}px`,
  },
  contentText: {
    marginBottom: `${t.spacing(10)}px`,
    color: 'black',
    fontWeight: '400'
  },
  image: {
    display: 'block',
    width: '100%',
  },
  modeContainer: {
    marginBottom: `${t.spacing(6)}px`,
    [t.breakpoints.up('md')]: {
      marginBottom: `${t.spacing(12)}px`,
    },
  },
  emphasisText: {
    fontWeight: 500,
    background: '-webkit-linear-gradient(#01B6B8, #f15e5a)',
    WebkitBoxDecorationBreak: 'clone',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  rightText: {
    [t.breakpoints.up('md')]: {
      marginLeft: `${t.spacing(4)}px`,
    },
  },
  modeCard: {
    padding: `${t.spacing(3)}px`,
    borderRadius: '16px',
  },
}));

export default function ParallelChainModesPanel() {
  const classes = useStyles();

  return (
    <Section className={classes.root}>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef} className={classes.titleContainer}>
            <Typography variant="h3" className={classes.titleText}>
              Natively Supported Operating Modes
            </Typography>
            <Typography variant="h2" className={classes.subtitleText}>
              Three Modes, Countless Applications
            </Typography>
            <Typography variant="h3" className={classes.contentText}>
              With our parallel approach to blockchain technology, blockchain applications can enjoy a boost in speed and performance by offloading some of its computations to Enterprise/Private ParallelChains.
            </Typography>
          </FadeIn>
        )}
      />
    </Section>
  );
}
