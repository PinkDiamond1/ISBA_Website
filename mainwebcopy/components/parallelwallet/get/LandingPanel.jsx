import NextLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Section from '../../Section';

const useStyles = makeStyles((t) => ({
  container: {
    position: 'relative',
    minHeight: '30vh',
    backgroundImage: 'url(\'/images/dtt/get-xpll-banner.jpg\')',
    backgroundSize: 'cover',
    color: t.palette.neutral.white,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  title: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  gradient: {
    position: 'absolute',
    bottom: '0',
    left: 0,
    width: '100%',
    height: '40%',
    backgroundImage: 'linear-gradient(to bottom, rgba(28,26,55,0) 0%, rgba(28,26,55,1) 100%)',
  },
}));

export default function LandingPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={14}
      className={classes.container}
      subContainerClassName={classes.subContainer}
    >
      <div className={classes.gradient} />
      <NextLink href="/parallelwallet">
        <Typography color="primary">
          <a>&lt; Return to ParallelWallet</a>
        </Typography>
      </NextLink>
      <Typography variant="h2" className={classes.title}>
        <ShoppingCartIcon fontSize="inherit" style={{ marginRight: '8px' }} />
        <b>Get Closed Beta</b>
      </Typography>
    </Section>
  );
}
