import { useTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TouchApp } from '@material-ui/icons';
import { FutureButton, Overtitle } from 'dtl-react-components';
import Section from '../Section';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';
import Icon from '@mdi/react'
import { mdiShieldLinkVariantOutline } from '@mdi/js';
import { mdiEarth } from '@mdi/js';
import { mdiAlertCircleCheckOutline } from '@mdi/js';
import { mdiAccountLockOutline } from '@mdi/js';
import { mdiBarcodeScan } from '@mdi/js';

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
    border: '1px solid #f15e5a',
    borderRadius: '50px',
    color: '#0c2454',
    boxShadow: 'none',
    padding: '10px 50px'
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
    marginBottom: `${theme.spacing(1)}px`,
  },
  featureSubTitle: {
    color: '#0c2454',
    fontWeight: '100',
    marginBottom: `${theme.spacing(2)}px`,
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
    fontWeight: '100',
  },
  featureImg: {
    width: '72px',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
}));

export default function ParallelChainPIntroPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={2}
      spacingBottom={2}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h4" classes={{ root: classes.featureTitle }}>
            <spn style={{fontWeight: '400'}}>Personal data vault.</spn>
            </Typography>
            <Typography variant="h6" classes={{ root: classes.featureSubTitle }}>
              A dive into the technology powering ParallelWallet.
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} md={12}>              
                <Typography variant="body1" classes={{root: classes.cardBody}}>
                  Some data like your biometrics and personal information are incredibily sensitive and would have tremendous impact when fallen into the wrong hands.
                  In today's age of ever-increasing eKYC processes and requirments in the digital economy. There has to be a safe and trusted way to store your personal information.
                  <br /><br />
                  ParallelChain can be configured to operate in a personal mode, where each user will "own" their own blockchain.
                  <br /><br />
                  An implementation of the personal version of ParallelChain is ParallelWallet. The main difference between ParallelWallet and other mobile wallets is that it is completly built on top of a blockchain. That means it is not using a traditional database to store user data. Benfits of this approach include:
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={{root: classes.featureImgContainer}}>
                <Icon path={mdiShieldLinkVariantOutline} size={3} color={'#f15e5a'} />
                </div>
                <Typography variant="h6" classes={{root: classes.cardTitle}}>
                  State Immutability
                </Typography>
                <Typography variant="body1" classes={{root: classes.cardBody}}>
                  Once data is logged and stroed on the blockchain, it cannot be changed without altering the entire chain.
                  Therefore, it makes a much better technology to build financial applications with.         
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={{root: classes.featureImgContainer}}>
                  <Icon path={mdiAlertCircleCheckOutline} size={3} color={'#f15e5a'}  />
                </div>                    
                <Typography variant="h6" classes={{root: classes.cardTitle}}>
                  Fault Tolerant
                </Typography>
                <Typography variant="body1" classes={{root: classes.cardBody}}>
                  Since ParallelWallet stores all user data in a blockchain.
                  That means even when there is a system failure, the latest valid state of the application can always be retraced by tracing back the transactions of the blockchain.     
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={{root: classes.featureImgContainer}}>
                  <Icon path={mdiAccountLockOutline} size={3} color={'#f15e5a'}  />
                </div>                    
                <Typography variant="h6" classes={{root: classes.cardTitle}}>
                  Increased Security and Privacy
                </Typography>
                <Typography variant="body1" classes={{root: classes.cardBody}}>
                Your device and biometric keys are used to encrypt your data on your personal ParallelChain. That means only you would have access to your data, no one else.                  
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={{root: classes.featureImgContainer}}>
                  <Icon path={mdiEarth} size={3} color={'#f15e5a'}  />
                </div>                    
                <Typography variant="h6" classes={{root: classes.cardTitle}}>
                  Decentralised
                </Typography>
                <Typography variant="body1" classes={{root: classes.cardBody}}>
                  With the app already running on a private version of ParallelChain, that means you will be able to seamlessly interact with DApps running on ParallelChain Mainnet when it launchs.  
                </Typography>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
    </Section>
  );
}
