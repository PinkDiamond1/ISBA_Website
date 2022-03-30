import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Section from '../Section';
import BreadCrumbsLocator from '../BreadCrumbsLocator';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    backgroundImage: 'url(\'/images/approvalchain/landing.jpg\')',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.products.approvalChainDark,
  },
  emphasisText: {
    fontWeight: '700',
    color: '#027D6F',
  },
  titleText: {
    color: 'black',
    fontWeight: '400',
  },
  subtitleText: {
    marginTop: `${theme.spacing(2)}px`,
    color: '#003D61',
  },
  contentText: {
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
}));

export default function ApprovalChainLandingPanel() {
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
          src="/images/approvalchain/approvalchain-logo.svg"
          alt="approvalChain"
        />
      )}

      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <BreadCrumbsLocator
            breadCrumbLeftText="Products"
            breadCrumbRightText="Approval-Chain"
            linkForBreadCrumb="/parallelchain/enterprise"
          />
          <Typography variant="h3" classes={{ root: classes.subtitleText }}>
            Modernized Workflow Management System With
          </Typography>
          <Typography variant="h1" classes={{ root: classes.emphasisText }}>
            Provable Immutability
          </Typography>
          <Typography variant="h3" classes={{ root: classes.contentText }}>
            ApprovalChain is a web+mobile blockchain system built upon the ParallelChain™ platform for workflow streamlining,
            provenance tracking and approval transparency. With full compliance to the GDPR privacy ordinance,
            this unique system incorporates real-time image processing,
            millisecond anti-spoofing facial detection and time stamp generation to authenticate the movement of goods and ensure
            real-time visibility and integrity along the supply chain network.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} className={classes.imageContainer}>
          <img className={classes.logoImage} src="/images/approvalchain/approvalchain-logo.svg" alt="approvalChain" />
        </Grid>
      </Grid>
    </Section>
  );
}
