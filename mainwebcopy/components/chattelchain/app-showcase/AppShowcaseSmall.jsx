import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../../Section';

const useStyles = makeStyles((theme) => ({
  subContainer: {
    color: theme.palette.products.chattelChainDark,
  },
  sectionTitle: {
    textAlign: 'center',
    color: theme.palette.products.chattelChainDark,
  },
  featureTitle: {
    marginBottom: `${theme.spacing(4)}px`,
  },
  featureSubtitle: {
    textTransform: 'uppercase',
    color: theme.palette.products.chattelChain,
  },
  iphoneFrame: {
    display: 'block',
    position: 'relative',
    maxWidth: '100%',
    zIndex: 1,
  },
  featureContainer: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    margin: `${theme.spacing(3)}px 0`,
  },
  featureImage: {
    display: 'block',
    padding: '32px 32px',
    maxWidth: '300px',
    maxHeight: '540px',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  },
  adminFeatureContainer: {
    maxWidth: '100%',
    margin: `${theme.spacing(3)}px 0`,
  },
  adminFeatureImage: {
    display: 'block',
    padding: '32px 32px',
    maxWidth: '100%',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  },
}));

export default function AppShowcaseSmall() {
  const classes = useStyles();

  return (
    <div>
      <Section
        subContainerClassName={classes.subContainer}
      >
        <div>
          <Typography variant="h2" classes={{ root: classes.sectionTitle }}>
            App Showcase
          </Typography>
          <div className={classes.featureContainer}>
            <img
              src="/images/chattelchain/asset-details-framed.png"
              alt="Tokenize and trade everything"
              className={classes.featureImage}
            />
          </div>
          <Typography variant="h3">
            Tokenize and trade
          </Typography>
          <Typography variant="h3" classes={{ root: classes.featureTitle }}>
            ...well, basically anything
          </Typography>
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Carbon assets
          </Typography>
          <Typography variant="h6">
            Carbon credits, ESG/green bonds, carbon neutral certification.
          </Typography>
          <br />
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Shared ownership of
          </Typography>
          <Typography variant="h6">
            Real estate property, hotel, art piece, or things of value.
          </Typography>
          <br />
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Stocks
          </Typography>
          <Typography variant="h6">
            Or simply trade shares in companies outside the stock market.
          </Typography>
        </div>
        <div>
          <div className={classes.featureContainer}>
            <img
              src="/images/chattelchain/wallet-framed.png"
              alt="Unhackable wallet"
              className={classes.featureImage}
            />
          </div>
          <Typography variant="h3" classes={{ root: classes.featureTitle }}>
            Trade in Fiat and Crypto-currencies
          </Typography>
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Fiat
          </Typography>
          <Typography variant="h6">
            Euros, USD, etc.
          </Typography>
          <br />
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Crypto
          </Typography>
          <Typography variant="h6">
            Bitcoin, Ethereum, etc.
          </Typography>
          <br />
        </div>
        <div>
          <div className={classes.featureContainer}>
            <img
              src="/images/chattelchain/cur-framed.png"
              alt="Favourite ICOs"
              className={classes.featureImage}
            />
          </div>
          <Typography variant="h3" classes={{ root: classes.featureTitle }}>
            Mint your own Digital Currency
          </Typography>
          <br />
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Build your own custom asset
          </Typography>
          <Typography variant="h6">
            DTL can customize ChattelChain to meet your needs.
          </Typography>
          <Typography variant="h6">
            Blockchained in-game currency? Check. Frequent flyer points?
            Check. The possibilities are endless.
          </Typography>
        </div>
        <div>
          <div className={classes.featureContainer}>
            <img
              src="/images/chattelchain/zoom-framed.png"
              alt="Macro-micro"
              className={classes.featureImage}
            />
          </div>
          <Typography variant="h3" classes={{ root: classes.featureTitle }}>
            Macro-mirco perspectives at a glance
          </Typography>
          <br />
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Interactive Candlesticks Chart
          </Typography>
          <Typography variant="h6">
            Perform in-depth price analysis of a particular token through various parameters.
            Chart can be scaled with a pinch zoom.
          </Typography>
        </div>
      </Section>
      <Section
        subContainerClassName={classes.subContainer}
      >
        <div>
          <Typography variant="h2" classes={{ root: classes.sectionTitle }}>
            Admin Portal
          </Typography>
          <div className={classes.adminFeatureContainer}>
            <img
              src="/images/chattelchain/admin-portal.png"
              alt="ChattelChain admin portal"
              className={classes.adminFeatureImage}
            />
          </div>
          <Typography variant="h3" classes={{ root: classes.featureTitle }}>
            Trader, asset, transaction management.
          </Typography>
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Comprensive web portal
          </Typography>
          <Typography variant="h6">
            Review and approve new user registration, asset tokenization requests,
            currency transfers, token transfer and settlement...
          </Typography>
          <br />
          <Typography variant="subtitle1" classes={{ root: classes.featureSubtitle }}>
            Who watches the admin(s)?
          </Typography>
          <Typography variant="h6">
            Every action performed is recorded in detail and stored on
            the ParallelChain™ blockchain.
          </Typography>
          <br />
          <Typography variant="h6">
            Or coupled with PreventiveChain for insider-targeted security.
          </Typography>
        </div>
      </Section>
    </div>
  );
}
