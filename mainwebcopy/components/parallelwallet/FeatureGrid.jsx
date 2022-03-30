import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  headerLight: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 60,
    },
    // backgroundImage: 'url(\'/images/parallelwallet/Green Light.png\')',
    // backgroundSize: 'cover',
  },
  headerText: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    color: '#fff',
    marginBottom: `${theme.spacing(3)}px`,
    // marginBottom: 80,
    // backgroundImage: 'url(\'/images/parallelwallet/Green Light.png\')',
  },
  subHeaderText: {
    color: '#94EECB',
    marginBottom: 20,
  },
  bodyText: {
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: '50%',
  },
  greenLight: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    maxWidth: '99vw',
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(1.2)',
      maxWidth: '95vw',
      overflow: 'auto',
    },
  },
}));

export default function FeatureGrid() {
  const classes = useStyles();
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down('sm'));

  function gridImgLeft(header, body1, body2, img) {
    return (
      <div style={{ marginBottom: screenSize ? `${theme.spacing(2)}px` : `${theme.spacing(9)}px` }}>
        <Grid container spacing={screenSize ? 1 : 8}>
          <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: screenSize ? 'flex-start' : 'flex-end' }}>
            <Fade left>
              <img
                src={img}
                alt="iPhone frame"
                className={classes.image}
              />
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} style={{ justifyContent: 'center', alignSelf: 'center' }}>
            <Fade right>
              <Typography variant="h5" className={classes.subHeaderText}>
                {header}
              </Typography>
              <Typography variant="body1" className={classes.bodyText}>
                {body1}
              </Typography>
              <Typography variant="body1" className={classes.bodyText}>
                {body2}
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }

  function gridImgRight(header, body1, body2, img) {
    return (
      <div style={{ marginBottom: screenSize ? `${theme.spacing(2)}px` : `${theme.spacing(9)}px` }}>
        <Grid container spacing={screenSize ? 1 : 8}>
          <Grid item xs={12} md={6} style={{ justifyContent: 'center', alignSelf: 'center' }}>
            <Fade left>
              <Typography variant="h5" className={classes.subHeaderText}>
                {header}
              </Typography>
              <Typography variant="body1" className={classes.bodyText}>
                {body1}
              </Typography>
              <Typography variant="body1" className={classes.bodyText}>
                {body2}
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade right>
              <img
                src={img}
                alt="iPhone frame"
                className={classes.image}
              />
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <div>
      <Section>
        <div className={classes.headerLight}>
          <img
            src="/images/parallelwallet/Green Light.png"
            alt="Green Light"
            className={classes.greenLight}
          />
          <Typography variant="h4" className={classes.headerText}>
            Welcome to a new crypto experience.
          </Typography>
        </div>

        {screenSize
          ? gridImgLeft('Multi-biometric Authentication.',
            'Create your unique Bio-key with a combination of face, voice, and palm biometrics. ',
            'Enjoy effortless security for login, transaction approval, and wallet recovery – no more stuck tokens!',
            '/images/parallelwallet/featureIcons/feature1.svg')
          : gridImgRight('Multi-biometric Authentication.',
            'Create your unique Bio-key with a combination of face, voice, and palm biometrics. ',
            'Enjoy effortless security for login, transaction approval, and wallet recovery – no more stuck tokens!',
            '/images/parallelwallet/featureIcons/feature1.svg')}

        {gridImgLeft('Your Wallet, Your Blockchain.',
          'Your biometrics data and everything that happens in the wallet are stored in your personal ParallelChain - you decide what stays and what leaves.',
          'This is how it feels to be in control of your data and privacy.',
          '/images/parallelwallet/featureIcons/feature2.svg')}

        {screenSize
          ? gridImgLeft('ParallelChain\'s Native Wallet.',
            'Stay up-to-date with the news and developments of ParallelChain.',
            'View the live status of ParallelChain Mainnet or track the performance of XPLL across different exchanges. (coming soon)',
            '/images/parallelwallet/featureIcons/feature3.svg')
          : gridImgRight('ParallelChain\'s Native Wallet.',
            'Stay up-to-date with the news and developments of ParallelChain.',
            'View the live status of ParallelChain Mainnet or track the performance of XPLL across different exchanges. (coming soon)',
            '/images/parallelwallet/featureIcons/feature3.svg')}

        {gridImgLeft('Manage Your Stakes & Rewards.',
          'Use the staking dashboard to manage your staked XPLL, monitor pool performance, and track your rewards at any stage. (coming soon)',
          '',
          '/images/parallelwallet/featureIcons/feature4.svg')}

        {screenSize
          ? gridImgLeft('Your ”Right to be Forgotten” Matters.',
            'You own your data. ParallelWallet is the only blockchain wallet that offers users GDPR-level data protection and privacy. (coming soon)',
            '',
            '/images/parallelwallet/featureIcons/feature5.svg')
          : gridImgRight('Your ”Right to be Forgotten” Matters.',
            'You own your data. ParallelWallet is the only blockchain wallet that offers users GDPR-level data protection and privacy. (coming soon)',
            '',
            '/images/parallelwallet/featureIcons/feature5.svg')}

        {gridImgLeft('ParallelWallet Supports Multi-coin.',
          'Other than XPLL, you can send and receive BTC, ETH and a range of ERC20 tokens with ParallelWallet.',
          '',
          '/images/parallelwallet/featureIcons/feature6.svg')}
      </Section>
    </div>
  );
}
