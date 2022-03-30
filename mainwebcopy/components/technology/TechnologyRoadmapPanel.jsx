import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  panelContainer: {
    width: '100vh',
    backgroundColor: '#f15e5a',
    background: 'linear-gradient(86.7deg, #003D61 67.15%, rgba(0, 61, 97, 0.69) 119.24%)',
  },
  featureTitle: {
    color: '#FFFFFF',
    marginBottom: `${theme.spacing(2)}px`,
  },
  featureSubTitle: {
    color: '#FFFFFF',
    fontWeight: '400',
    marginBottom: `${theme.spacing(4)}px`,
  },
  btn: {
    boxShadow: 'none',
    border: '1px solid white',
    borderRadius: '10px',
    minWidth: '175px',
    padding: '15px 20px',
    backgroundColor: 'none',
    transition: 'all 300ms',
    color: 'white',
    '&:hover': {
      boxShadow: `0 3px 15px 0 ${theme.palette.primary.light}`,
      border: '1px solid white',
      backgroundColor: 'white',
      color: '#003D61',
    },
    '&:hover h6': {
      color: theme.palette.neutral.white,
    },
  },
}));

export default function TechnologyRoadmapPanel() {
  const classes = useStyles();

  return (
    <Section
      className={classes.panelContainer}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h2" classes={{ root: classes.featureTitle }}>
              ParallelChain Roadmap
            </Typography>
            <Typography variant="h3" classes={{ root: classes.featureSubTitle }}>
              We are constantly improving the ParallelChain technology to provide
              a state-of-the-art infrastructure for the two layer-1 platforms
              powering the most performant, secure and scalable applications.
            </Typography>
            <a href="/roadmap" className={classes.btn}>
              See Our Roadmap
            </a>
          </FadeIn>
        )}
      />
    </Section>
  );
}
