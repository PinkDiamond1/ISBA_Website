import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.products.preventiveChainDark,
  },
  titleText: {
    marginBottom: `${theme.spacing(6)}px`,
    fontWeight: '700',
    color: '#027D6F',
  },
  emphasisItem: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  image: {
    display: 'block',
    objectFit: 'contain',
    height: '50px',
    [theme.breakpoints.up('sm')]: {
      height: '70px',
    },
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
    pointerEvents: 'none',
  },
  emphasisedImage: {
    display: 'block',
    objectFit: 'contain',
    height: '80px',
    [theme.breakpoints.up('sm')]: {
      height: '100px',
    },
    [theme.breakpoints.up('md')]: {
      height: '130px',
    },
    pointerEvents: 'none',
  },
  featureTitleText: {
    fontWeight: '600',
    color: '#003D61',
    textAlign: 'left',
    marginTop: `${theme.spacing(2)}px`,
  },
  featureBodyText: {
    textAlign: 'left',
    color: 'black',
  },
  titleContainer: {
    marginBottom: `${theme.spacing(5)}px`,
    [theme.breakpoints.up('md')]: {
      marginBottom: `${theme.spacing(15)}px`,
    },
  },
}));

export default function EkycChainAdvantagesPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={2}
      spacingBottom={15}
      component="section"
      subContainerClassName={classes.container}
    >
      <Typography variant="h2" classes={{ root: classes.titleText }}>
        Advantages
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} lg={6} className={classes.emphasisItem}>
          <img src="/images/ekycchain/matching.svg" alt="matching" className={classes.emphasisedImage} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            {/* eslint-disable no-irregular-whitespace */}
            Instant Selfie-to-Photo ID ​Matching
          </Typography>
          <Typography
            variant="h5"
            classes={{ root: classes.featureBodyText }}
          >
            Anti-spoofing facial recognition that matches and verifies user’s
            live selfie to their photo ID in real time
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={classes.emphasisItem}>
          <img src="/images/ekycchain/fushion.svg" alt="fushion" className={classes.emphasisedImage} />
          <Typography
            variant="h3"
            classes={{ root: classes.featureTitleText }}
          >
            Spoof-proof Physical-digital Identity
          </Typography>
          <Typography
            variant="body2"
            classes={{ root: classes.featureBodyText }}
          >
            Reliable face verification with spoofing detection that pre-empts identity
            fraud and establishes a link between the physical and digital identity
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <img src="/images/ekycchain/duplicate.svg" alt="duplicate" className={classes.image} />
          <Typography
            variant="subtitle1"
            classes={{ root: classes.featureTitleText }}
          >
            Duplicate Record Detection
          </Typography>
          <Typography
            variant="body2"
            classes={{ root: classes.featureBodyText }}
          >
            Data is automatically checked for duplicates right when a user provides it.
            Suspicious accounts that call for investigation are easily identified
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <img src="/images/ekycchain/verification.svg" alt="verification" className={classes.image} />
          <Typography
            variant="subtitle1"
            classes={{ root: classes.featureTitleText }}
          >
            Trustworthy Verification
          </Typography>
          <Typography
            variant="body2"
            classes={{ root: classes.featureBodyText }}
          >
            Designed to aid processes that involve identity verification – from internal
            business procedures to regulatory compliances such as KYC and AML
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <img src="/images/ekycchain/compliance.svg" alt="compliance" className={classes.image} />
          <Typography
            variant="subtitle1"
            classes={{ root: classes.featureTitleText }}
          >
            Data Protection Compliance
          </Typography>
          <Typography
            variant="body2"
            classes={{ root: classes.featureBodyText }}
          >
            Most organizations are expected to abide by the EU’s GDPR and other data
            protection regulations, all which eKYC-Chain is fully compliant with
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <img src="/images/ekycchain/alert.svg" alt="alert" className={classes.image} />
          <Typography
            variant="subtitle1"
            classes={{ root: classes.featureTitleText }}
          >
            Effective Fraud Risk Alert
          </Typography>
          <Typography
            variant="body2"
            classes={{ root: classes.featureBodyText }}
          >
            Via tracking and analysing the time stamps and location of submission
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <img src="/images/ekycchain/portal.svg" alt="portal" className={classes.image} />
          <Typography
            variant="subtitle1"
            classes={{ root: classes.featureTitleText }}
          >
            Web + Mobile Portal
          </Typography>
          <Typography
            variant="body2"
            classes={{ root: classes.featureBodyText }}
          >
            Supports multiple pre-defined user flows of different verification processes
            beyond KYC. Mobile portal available on Android and iOS.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <img src="/images/ekycchain/OCR.svg" alt="OCR" className={classes.image} />
          <Typography
            variant="subtitle1"
            classes={{ root: classes.featureTitleText }}
          >
            High-precision OCR
          </Typography>
          <Typography
            variant="body2"
            classes={{ root: classes.featureBodyText }}
          >
            Able to recognize and convert various types of official documents, such as
            passports and business registration certificates, from different countries
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
