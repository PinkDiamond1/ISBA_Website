import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FutureButton } from 'dtl-react-components';
import Icon from '@mdi/react';
import { mdiFingerprint, mdiHandRight, mdiSafeSquareOutline } from '@mdi/js';

import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import Section from '../Section';
// import './Coins.css';

// import banner from '/images/parallelwallet/parallelwallet_banner'

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'block',
    objectFit: 'contain',
    height: '50px',
    marginBottom: `${theme.spacing(2)}px`,
    [theme.breakpoints.up('sm')]: {
      height: '70px',
    },
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
    pointerEvents: 'none',
  },
  banner: {
    display: 'block',
    width: '100%',
    marginBottom: 50,
    backgroundColor: 'blue',
  },
  cardBody: {
    fontWeight: 100,
  },
  coin: {
    width: 70,
    height: 70,
    marginLeft: 8,
    marginRight: 8,
  },
  coinsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  videoButtonContainer: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    cursor: 'auto',
    color: theme.palette.primary.dark,
  },
  videoButtonContainer2: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    cursor: 'disabled',
    border: '1px solid #f15e5a',
    borderRadius: '50px',
    color: '#0c2454',
    boxShadow: 'none',
    padding: '10px 50px',
  },
  videoButton: {
    border: 2,
  },
  videoTitle: {
    textAlign: 'left',
  },
  iconButton: {
    width: '64px',
    height: '64px',
    marginRight: `${theme.spacing(2)}px`,
  },
  featureTitle: {
    color: '#0c2454',
    fontWeight: '500',
    marginBottom: `${theme.spacing(8)}px`,
  },
  featureCoinTitle: {
    textAlign: 'center',
    fontWeight: '500',
    marginTop: `${theme.spacing(20)}px`,
    marginBottom: `${theme.spacing(4)}px`,
  },
  sectionTitle: {
    textAlign: 'left',
    color: '#0c2454',
    fontWeight: '500',
    marginBottom: `${theme.spacing(1)}px`,
  },
  sectionSubTitle: {
    textAlign: 'left',
    color: '#0c2454',
    marginBottom: `${theme.spacing(5)}px`,
  },
  cardTitle: {
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
  },
  featureImg: {
    width: '72px',
  },
  reservationButtonTitle: {
    marginTop: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#0c2454',
  },
  reservationButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0c2454',
  },
  singleCoinContainer: {
    marginRight: 16,
    marginLeft: 16,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'color 300ms ease',
    '&:hover': {
      color: theme.palette.products.preventiveChain,
    },
    '&:hover > $coinImageContainer > $coinImage': {
      transform: 'scaleX(1.08) scaleY(1.08)',
      opacity: '0.3',
      transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    },
    '&:hover > $coinImageContainer > $hoverText': {
      transform: 'scaleX(1.08) scaleY(1.08)',
      opacity: '1',
      transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    },
  },
  hoverText: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    opacity: '0',
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
  },
  coinImageContainer: {
    marginBottom: `${theme.spacing(2)}px`,
    position: 'relative',
    display: 'flex',
    height: '80px',
    [theme.breakpoints.up('sm')]: {
      height: '80px',
    },
    [theme.breakpoints.up('md')]: {
      height: '80px',
    },
    pointerEvents: 'none',
    justifyContent: 'center',
  },
  coinImage: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(2)}px`,
    display: 'block',
    width: '80px',
    height: '80px',
    [theme.breakpoints.up('sm')]: {
      width: '80px',
      height: '80px',
    },
    [theme.breakpoints.up('md')]: {
      width: '80px',
      height: '80px',
    },
    pointerEvents: 'none',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
}));

export default function ParallelwalletFeaturesPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={2}
      spacingBottom={12}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h4" classes={{ root: classes.featureTitle }}>
              How Parallel<spn style={{ fontWeight: '100' }}>Wallet</spn> works for you?
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} md={3}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiFingerprint} size={3} color="#f15e5a" />
                </div>
                <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                  Tri-factor biometrics
                </Typography>
                <Typography variant="body1" classes={{ root: classes.cardBody }}>
                  Use your <b>Face</b>, <b>Voice</b>, or <b>Palm</b>
                  to access and manage your cryptocurrency.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiHandRight} size={3} color="#f15e5a" />
                </div>
                <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                  Always in control
                </Typography>
                <Typography variant="body1" classes={{ root: classes.cardBody }}>
                  Your biometrics are unforgettable, never lose access to your funds again.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiSafeSquareOutline} size={3} color="#f15e5a" />
                </div>
                <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                  Keep your crypto safe
                </Typography>
                <Typography variant="body1" classes={{ root: classes.cardBody }}>
                  Password authentications are no longer secure due to keystrokes tracking.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className={{ root: classes.featureImgContainer }}>
                  <img style={{ maxWidth: '72px' }} alt="parallelchain logo" src="images/parallelwallet/parallelchain-icon.svg" />
                </div>
                <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                  Own your personal data
                </Typography>
                <Typography variant="body1" classes={{ root: classes.cardBody }}>
                  Your biometrics data are stored securely on your Personal ParallelChain®.
                </Typography>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h5" classes={{ root: classes.featureCoinTitle }}>
              Supported Cryptocurrencies
            </Typography>
            <Grid container className={classes.coinsContainer}>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/btc.png"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      Bitcoin<br />(BTC)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/eth png.png"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      Ether<br />(ETH)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/usdt png.png"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      Tether<br />(USDT)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/usdc png.png"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      USD Coin<br />(USDC)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/parallelchain-icon.svg"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      ParallelChain<br />(XPLL)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/link png.png"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      Chainlink<br />(LINK)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/dai png.png"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      Dai<br />(DAI)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/busd png.png"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      Binance USD<br />(BUSD)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.singleCoinContainer}>
                <div className={classes.coinImageContainer}>
                  <img
                    src="images/parallelwallet/coinsNew/bnb png.png"
                    className={classes.coinImage}
                    alt="Coin"
                  />
                  <div className={classes.hoverText}>
                    <Typography classes={{ root: classes.title }} color="textSecondary" gutterBottom>
                      Binance Coin<br />(BNB)
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>

            {/* <Grid container spacing={1}>
              <Grid item xs={12} md={12} className={classes.reservationButtonTitle}>
                <Typography variant="h6">
                  More Coins to come!
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} classes={{ root: classes.reservationButtonContainer }}>
                <FutureButton className={classes.videoButtonContainer2}>
                  <Typography variant="body1">
                    Sign up for Beta access
                    <br />
                    <Typography variant="body2">(COMING SOON)</Typography>
                  </Typography>
                </FutureButton>
              </Grid>
            </Grid> */}
          </FadeIn>
        )}
      />
    </Section>
  );
}
