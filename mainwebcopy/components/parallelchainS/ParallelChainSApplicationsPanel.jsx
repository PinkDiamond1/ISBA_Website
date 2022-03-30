import { useTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TouchApp } from '@material-ui/icons';
import { FutureButton, Overtitle } from 'dtl-react-components';
import Icon from '@mdi/react';
import {
  mdiFingerprint, mdiHandRight, mdiSafeSquareOutline, mdiEarth, mdiOfficeBuilding, mdiDatabaseLockOutline, mdiMagnifyScan, mdiNoteCheckOutline, mdiAccountCogOutline, mdiBankTransfer, mdiBarcodeScan,
} from '@mdi/js';

import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import Section from '../Section';

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
    border: '1px solid #0d9881',
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
    color: '#027D6F',
  },
  featureSubTitle: {
    color: theme.palette.neutral.dark
  },
  featureCoinTitle: {
    textAlign: 'center',
    color: '#0c2454',
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
  cardBody: {
    color: 'black'
  },
  featureImg: {
    width: '72px',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
}));

export default function ParallelChainSApplicationsPanel() {
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
            <Typography variant="h3" classes={{ root: classes.featureTitle }}>
              Fostering Blockchain Adoption
            </Typography>
            <Typography variant="h2" classes={{ root: classes.featureSubTitle }}>
              A Few Examples of What You Can <br/>
              Build With ParallelChain Enterprise
            </Typography>
            {/*
            <Typography variant="h6" classes={{ root: classes.featureSubTitle }}>
              Deploy multiple ParallelChains of varying configurations to facilitate cross-platform transactions.
            </Typography>
            */}
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiDatabaseLockOutline} size={3} color="#027D6F" />
                </div>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Data Storage
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  Use ParallelChain Enterprise as an immutable and tamper-proof data storage relay, for mission-critical and sensitive data.
                  <br /><br />
                  Our unique Proof-of-Immutability (PoIM) algorithm and privacy-protected data validation adds an additional layer of security to your company's data.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiMagnifyScan} size={3} color="#027D6F" />
                </div>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Auditing Tool
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  One of the best attributes of a blockchain is its tamper-proof chararistics, making it the perfect tool to encapsulate user actions and requests.
                  <br /><br />
                  Capitalizing on this, companies will therefore be able to ensure that a valid audit trail is being kept at all times.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiBankTransfer} size={3} color="#027D6F" />
                </div>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Settlement System
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  Blockchain technology has the potential to make asset trading faster and more efficient by reducing the amount of intermediaries required.
                  <br /><br />
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  ParallelChain Enterprise can act as the "single source of truth", by keeping an immutable record of all transactions. Reducing the requirement of having a traditional clearing house for trade verifications.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiAccountCogOutline} size={3} color="#027D6F" />
                </div>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Process Management
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  Use Programmable smart contracts to automate actions,
                  perfect for managing a supply chain that consists of multiple, fragmented parties.
                  <br /><br />
                  Write and deploy smart contracts on ParallelChain Enterprise in Go Lang,
                  or Rust. Hyperledger Smart Contracts can be
                  easily migrated to run on ParallelChain Enterprise.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiEarth} size={3} color="#027D6F" />
                </div>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Supply Chain Management
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  Supply chain is a large ecosystem with multiple
                  stakeholders across the globe. A blockchain with limited
                  scalability offers little value to help manage the supply
                  chain.
                  <br /><br />
                  Unlimited scalability enabled by the
                  parallelism design of ParallelChain Enterprise. to support a supply
                  chain network of any size.
                </Typography>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
    </Section>
  );
}
