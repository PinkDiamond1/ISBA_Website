import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Section from '../../Section';
import AppFeatureLarge from './AppFeatureLarge';

const useStyles = makeStyles((theme) => ({
  subContainer: {
    color: theme.palette.products.chattelChainDark,
  },
  sectionTitle: {
    textAlign: 'left',
    color: 'black',
  },
  container: {
    display: 'flex',
  },
  textContainer: {
    flexBasis: 0,
    flexGrow: 1,
  },
  showcaseContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    flexBasis: 0,
    flexGrow: 1,
    marginLeft: `${theme.spacing(5)}px`,
  },
  featureTitle: {
    marginBottom: `${theme.spacing(6)}px`,
    fontWeight: '700',
    color: '#01B6B8'
  },
  featureSubtitle: {
    textTransform: 'uppercase',
    color: '#00585B',
    marginBottom: `${theme.spacing(1)}px`,
  },
  featureSubtitleText: {
    color: 'black',
    fontWeight: '400'
  },
  showcase: {
    position: 'sticky',
    top: '160px',
    maxWidth: '280px',
    height: 'fit-content',
  },
  iphoneFrame: {
    display: 'block',
    position: 'relative',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },
  featureImage: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    padding: '16px 16px',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  },
  adminContainer: {
    marginTop: '10vh',
  },
  adminImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adminPortalImage: {
    maxWidth: '100%',
    maxHeight: '80%',
  },
  hidden: {
    visibility: 'hidden',
  },
}));

export default function AppShowcaseLarge() {
  const [imgIndex, setImgIndex] = useState(0);

  const handleEnter = (index) => {
    setImgIndex(index);
  };

  const classes = useStyles();

  return (
    <div>
      <Section subContainerClassName={classes.subContainer}>
        <Typography variant="h2" classes={{ root: classes.sectionTitle }}>
          App Showcase
        </Typography>
        <div className={classes.container}>
          <div className={classes.textContainer}>
            <AppFeatureLarge index={1} handleEnter={handleEnter}>
              <div>
                <Typography variant="h2" classes={{ root: classes.featureTitle }}>
                  Tokenize and trade <br/>
                  ...well, basically anything
                </Typography>
              </div>
              <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
                Carbon assets
              </Typography>
              <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
                Carbon credits, ESG/green bonds, carbon neutral certification
              </Typography>
              <br />
              <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
                Shared ownership of
              </Typography>
              <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
                Real estate property, hotel, art piece, or things of value
              </Typography>
              <br />
              <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
                Stocks
              </Typography>
              <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
                Or simply trade shares in companies outside the stock market
              </Typography>
            </AppFeatureLarge>

            <AppFeatureLarge index={0} handleEnter={handleEnter}>
              <Typography variant="h2" classes={{ root: classes.featureTitle }}>
                Trade in fiat or cryptocurrencies
              </Typography>
              <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
                Fiat
              </Typography>
              <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
                Euros, USD etc.
              </Typography>
              <br />
              <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
                Crypto
              </Typography>
              <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
                Bitcoin, Ether etc.
              </Typography>
              <br />
            </AppFeatureLarge>

            <AppFeatureLarge index={2} handleEnter={handleEnter}>
              <Typography variant="h2" classes={{ root: classes.featureTitle }}>
                Mint your own digital currency
              </Typography>
              <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
                Build your own custom asset
              </Typography>
              <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
                We can customize ChattelChain to meet your needs.
              </Typography>
              <br/>
              <br/>
              <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
                Blockchained in-game currency? Check.
                <br />
                Frequent flyer points?
                Check.
                <br />
                The possibilities are <i>endless</i>.
              </Typography>
            </AppFeatureLarge>

            <AppFeatureLarge index={3} handleEnter={handleEnter}>
              <Typography variant="h2" classes={{ root: classes.featureTitle }}>
                Macro-micro perspectives at a glance
              </Typography>
              <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
                Interactive Candlesticks Chart
              </Typography>
              <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
                Perform in-depth technical analysis of any listed cryptocurrencies through
                various parameters
              </Typography>
            </AppFeatureLarge>
          </div>
          <div className={classes.showcaseContainer}>
            <div className={classes.showcase}>
              <img
                src="/images/chattelchain/iphone-frame.png"
                alt="iPhone frame"
                className={classes.iphoneFrame}
              />
              <img
                src="/images/chattelchain/unhackable-wallet.png"
                alt="Unhackable wallet"
                className={`${classes.featureImage} ${(imgIndex !== 0) && classes.hidden}`}
              />
              <img
                src="/images/chattelchain/asset-details.png"
                alt="Tokenize and trade everything"
                className={`${classes.featureImage} ${(imgIndex !== 1) && classes.hidden}`}
              />
              <img
                src="/images/chattelchain/cur.png"
                alt="Custom currencies"
                className={`${classes.featureImage} ${(imgIndex !== 2) && classes.hidden}`}
              />
              <img
                src="/images/chattelchain/zoom.png"
                alt="Macro-micro"
                className={`${classes.featureImage} ${(imgIndex !== 3) && classes.hidden}`}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section subContainerClassName={classes.subContainer}>
        <Typography variant="h2" classes={{ root: classes.sectionTitle }}>
          Admin Portal
        </Typography>
        <Grid container>
          <Grid item md={6} spacing={3} classes={{ root: classes.adminContainer }}>
            <Typography variant="h2" classes={{ root: classes.featureTitle }}>
              Trader, asset, transaction management
            </Typography>
            <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
              Comprensive web portal
            </Typography>
            <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
              Reviews and approves new user registrations, asset tokenization requests,
              currency transfers, token transfers and settlements
            </Typography>
            <br />
            <Typography variant="h3" classes={{ root: classes.featureSubtitle }}>
              Who watches the admin?
            </Typography>
            <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
              Every action and activity is recorded in detail and stored on
              the ParallelChain™ blockchain.
            </Typography>
            <br />
            <Typography variant="h5" classes={{ root: classes.featureSubtitleText }}>
              Coupled with PreventiveChain for insider-targeted security.
            </Typography>
          </Grid>
          <Grid item md={6} spacing={3} className={classes.adminImageContainer}>
            <img
              src="/images/chattelchain/admin-portal.png"
              alt="ChattelChain admin portal"
              className={classes.adminPortalImage}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}
