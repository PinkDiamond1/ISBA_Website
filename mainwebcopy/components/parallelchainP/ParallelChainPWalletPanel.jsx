import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  panelContainer: {
    width: '100vh',
    backgroundColor: '#f15e5a',
    background: 'linear-gradient(35deg, rgba(9,9,121,1) 0%, rgba(53,163,220,1) 100%)'
  },
  featureTitle: {
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: `${theme.spacing(1)}px`,
  },
  featureSubTitle: {
    color: '#FFFFFF',
    fontWeight: '100',
    marginBottom: `${theme.spacing(8)}px`,
  },
  btn: {
    boxShadow: 'none',
    border: '1px solid white',
    borderRadius: '100px',
    minWidth: '175px',
    padding: '15px 20px',
    backgroundColor: 'none',
    transition: 'all 300ms',
    color: 'white',
    '&:hover': {
      boxShadow: `0 3px 15px 0 ${theme.palette.primary.light}`,
      border: '1px solid white',
      backgroundColor: 'white',
      color: 'rgba(53,163,220,1)'
    },
    '&:hover h6': {
      color: theme.palette.neutral.white,
    },
  },
}));

export default function ParallelChainPWalletPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={2}
      spacingBottom={4}
      className={classes.panelContainer}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h4" classes={{ root: classes.featureTitle }}>
              ParallelWallet is in Closed Alpha.
            </Typography>
            <Typography variant="subtitle1" classes={{ root: classes.featureSubTitle }}>
              Digital Transaction is constantly building and rolling out new features for ParallelChain and our suite of layer-2 applications built on top of it. Registration will be open soon for closed beta access. Go to the ParallelWallet page to learn more.
            </Typography>
            <a href="/parallelwallet" className={classes.btn}>
              ParallelWallet
            </a>
          </FadeIn>
        )}
      />
    </Section>
  );
}
