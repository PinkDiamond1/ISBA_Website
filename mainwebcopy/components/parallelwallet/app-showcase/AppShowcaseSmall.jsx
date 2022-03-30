import Icon from '@mdi/react';
import {
  mdiFaceRecognition, mdiMicrophoneSettings, mdiSignatureFreehand, mdiUpdate, mdiShieldKeyOutline,
} from '@mdi/js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../../Section';

const useStyles = makeStyles((theme) => ({
  gradient: {
    position: 'absolute',
    bottom: '0',
    left: 0,
    width: '100%',
    height: '1%',
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0,0,0) 0%, rgba(255,255,255,1) 100%)',
  },
  subContainer: {
    color: theme.palette.products.chattelChainDark,
    width: '100vh',
    backgroundImage: 'url(\'/images/parallelwallet/Pwallet-bg-hori-down.svg\')',
    backgroundSize: 'cover',
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
  featureTitle: {
    fontFamily: 'Poppins, sans-serif',
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    color: '#0c2454',
  },
  descriptionText: {
    color: 'black',
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
  miniImg: {
    width: 50,
    height: 50,
    marginLeft: 5,
    color: 'black',
  },
  headlineContainer: {
    display: 'flex',
    width: '100%',
    tintColor: '#000',
    fill: '#000',
  },
}));

export default function AppShowcaseSmall() {
  const classes = useStyles();

  return (
    <div>
      <Section
        subContainerClassName={classes.subContainer}
      >
        <div className={classes.gradient} />
        <div>
          <Typography variant="h2" classes={{ root: classes.sectionTitle }}>
            Not your Ordinary Crypto Wallet.
          </Typography>
          <Typography variant="p" classes={{ root: classes.sectionSubTitle }}>
            Ground-breaking security features built to keep your crypto safe.
          </Typography>
          <div className={classes.featureContainer}>
            <img
              src="/images/parallelwallet/wallet_face_id_iphone.svg"
              alt="Anti-spoofing face ID"
              className={classes.featureImage}
            />
          </div>
          <Icon path={mdiFaceRecognition} size={2} color="#f15e5a" />
          <div className={classes.headlineContainer}>
            <Typography variant="h3" classes={{ root: classes.featureTitle }}>
              Secure your funds with Face ID.
            </Typography>
          </div>
          <Typography variant="p" className={classes.descriptionText}>
            Unlike your run-of-the-mill face IDs, ParallelWallet’s facial recognition
            comes with a unique 2D/3D anti-spoofing technology,
            which can easily distinguish between real faces and printed graphics.
          </Typography>
        </div>
        <div>
          <div className={classes.featureContainer}>
            <img
              src="/images/parallelwallet/wallet/wallet-voice-id.svg"
              alt="Voice ID Recognition"
              className={classes.featureImage}
            />
          </div>
          <Icon path={mdiMicrophoneSettings} size={2} color="#f15e5a" />
          <div className={classes.headlineContainer}>
            <Typography variant="h3" classes={{ root: classes.featureTitle }}>
              Access your wallet with your Voice.
            </Typography>
          </div>
          <Typography variant="p" className={classes.descriptionText}>
            For added security to your account,
            you can also unlock your wallet using a voice ID.
            Takes 30 seconds to setup!
          </Typography>
        </div>
        <div>
          <div className={classes.featureContainer}>
            <img
              src="/images/parallelwallet/palm_id_iphone_frame.svg"
              alt="Voice ID Recognition"
              className={classes.featureImage}
            />
          </div>
          <Icon path={mdiSignatureFreehand} size={2} color="#f15e5a" />
          <div className={classes.headlineContainer}>
            <Typography variant="h3" classes={{ root: classes.featureTitle }}>
              Sign transactions with your Palm.
            </Typography>
          </div>
          <Typography variant="p" className={classes.descriptionText}>
            Aside from voice, you have the option to register your palm
            prints as another means to unlock your wallet.
            Select whichever login combo you deem convenient.
          </Typography>
        </div>
        <div>
          <div className={classes.featureContainer}>
            <img
              src="/images/parallelwallet/wallet/wallet main page ui.svg"
              alt="Unhackable wallet"
              className={classes.featureImage}
            />
          </div>
          <img
            src="/images/parallelwallet/parallelchain-icon.svg"
            alt="Parallelchain"
            className={classes.miniImg}
          />
          <div className={classes.headlineContainer}>
            <Typography variant="h3" classes={{ root: classes.featureTitle }}>
              Data Privacy Driven. Powered by ParallelChain®.
            </Typography>
          </div>
          <Typography variant="p" className={classes.descriptionText}>
            All data, such as your biometrics, account activities and transaction records,
            are stored with triple redundancy on your ParallelChain® Personal blockchain.
          </Typography>
        </div>
        <div>
          <div className={classes.featureContainer}>
            <img
              src="/images/parallelwallet/wallet/wallet history page ui.svg"
              alt="Favourite ICOs"
              className={classes.featureImage}
            />
          </div>
          <Icon path={mdiUpdate} size={2} color="#f15e5a" />
          <div className={classes.headlineContainer}>
            <Typography variant="h3" classes={{ root: classes.featureTitle }}>
              Real-time Sync Accross all Blockchains.
            </Typography>
          </div>
          <Typography variant="p" className={classes.descriptionText}>
            Transaction records and account balances are updated and verified in
            less than 0.01s, protecting your account from inflated balances.
          </Typography>
        </div>
        <div>
          <div className={classes.featureContainer}>
            <img
              src="/images/parallelwallet/wallet/wallet withdrawal page ui.svg"
              alt="Macro-micro"
              className={classes.featureImage}
            />
          </div>
          <Icon path={mdiShieldKeyOutline} size={2} color="#f15e5a" />
          <div className={classes.headlineContainer}>
            <Typography variant="h3" classes={{ root: classes.featureTitle }}>
              Privacy-protected Transaction Signing.
            </Typography>
          </div>
          <Typography variant="p" className={classes.descriptionText}>
            With privacy built-in (i.e. Right to be Forgotten), ParallelWallet
            gives you the option to freely transfer your assets while
            having your identity and information protected.
          </Typography>
        </div>
      </Section>
    </div>
  );
}
