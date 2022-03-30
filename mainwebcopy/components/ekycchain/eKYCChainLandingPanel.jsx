import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Section from '../Section';
import BreadCrumbsLocator from '../BreadCrumbsLocator';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    backgroundImage: 'url(\'/images/ekycchain/landing.jpg\')',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    color: '#27496D',
  },
  emphasisText: {
    color: '#546563',
  },
  contentText: {
    marginTop: `${theme.spacing(2)}px`,
    color: 'black',
    fontWeight: '400',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageContainerSmall: {
    marginTop: `${theme.spacing(4)}px`,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      marginLeft: '30px',
      '& $logoImage': {
        height: '100px',
      },
    },
  },
  logoImage: {
    display: 'block',
    height: '240px',
    pointerEvents: 'none',
  },
  logoImageSmall: {
    display: 'block',
    height: '160px',
    margin: '0 auto',
    marginBottom: `${theme.spacing(5)}px`,
    pointerEvents: 'none',
  },
  titleText: {
    color: 'black',
    marginBottom: `${theme.spacing(4)}px`,
    fontWeight: '400',
  },
  subtitleText: {
    color: '#027D6F',
    marginBottom: `${theme.spacing(4)}px`,
  },
}));

export default function EkycChainLandingPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const smallOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section
      spacingTop={12}
      spacingBottom={4}
      className={classes.container}
    >
      { smallOrSmaller && (
        <img
          className={classes.logoImageSmall}
          src="/images/ekycchain/ekycchain-logo.svg"
          alt="ekycChain"
        />
      )}

      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <BreadCrumbsLocator
            breadCrumbLeftText="Products"
            breadCrumbRightText="EKYC-CHAIN"
            linkForBreadCrumb="/parallelchain/enterprise"
          />
          <Typography variant="h3" classes={{ root: classes.subtitleText }}>
            Digital Identity Verification With
          </Typography>
          <Typography variant="h1" classes={{ root: classes.emphasisText }}>
            Spoof-Proof Biometrics
          </Typography>
          <Typography variant="h3" classes={{ root: classes.contentText }}>
            eKYC-Chain is a blockchain + biometric system for secure and effective verification
            and authentication of identity, its applications range from any internal business
            procedures to KYC or AML compliance. The uniqueness of eKYC-Chain comes from its
            built-in live anti-spoofing facial detection and blockchain-enabled ability to
            detect duplicate entries, enforce flexible access policies and so on.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} className={classes.imageContainer}>
          <img className={classes.logoImage} src="/images/ekycchain/ekycchain-logo.svg" alt="ekycChain" />
        </Grid>
      </Grid>
    </Section>
  );
}
