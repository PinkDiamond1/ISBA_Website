import Icon from '@mdi/react';
import {
  mdiFaceRecognition, mdiMicrophoneSettings, mdiSignatureFreehand, mdiUpdate, mdiShieldKeyOutline,
} from '@mdi/js';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../../Section';
import AppFeatureLarge from './AppFeatureLarge';

const useStyles = makeStyles((theme) => ({
  gradient: {
    position: 'absolute',
    bottom: '0',
    left: 0,
    width: '100%',
    height: '10%',
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
    fontWeight: 100,
    textAlign: 'left',
    color: '#0c2454',
    marginBottom: `${theme.spacing(5)}px`,
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
    marginTop: '5rem',
  },
  featureTitle: {
    fontFamily: 'Poppins, sans-serif',
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    color: '#0c2454',
  },
  descriptionText: {
    fontWeight: 100,
    color: 'black',
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
  hidden: {
    visibility: 'hidden',
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

export default function AppShowcaseLarge() {
  const [imgIndex, setImgIndex] = useState(0);

  const handleEnter = (index) => {
    setImgIndex(index);
  };

  const classes = useStyles();

  return (
    <div>
      <Section subContainer className={classes.subContainer}>
        <Typography variant="h4" classes={{ root: classes.sectionTitle }}>
          Not your Ordinary Crypto Wallet.
        </Typography>
        <Typography variant="subtitle1" classes={{ root: classes.sectionSubTitle }}>
          Ground-breaking security features built to keep your crypto safe.
        </Typography>
        <div className={classes.gradient} />
        <div className={classes.container}>
          <div className={classes.textContainer}>
            <AppFeatureLarge index={0} handleEnter={handleEnter}>
              <Icon path={mdiFaceRecognition} size={2} color="#f15e5a" />
              {/*
              <img
                src="/images/parallelwallet/face_id_edit2.svg"
                alt="Face ID"
                className={classes.miniImg}
              />
              */}
              <div className={classes.headlineContainer}>
                <Typography variant="h5" classes={{ root: classes.featureTitle }}>
                  Secure your funds with Face ID.
                </Typography>
              </div>
              <Typography variant="body1" className={classes.descriptionText}>
                Unlike your run-of-the-mill face IDs, ParallelWallet’s
                facial recognition comes with a unique 2D/3D anti-spoofing technology,
                which can easily distinguish between real faces and printed graphics.
              </Typography>

            </AppFeatureLarge>
            <AppFeatureLarge index={1} handleEnter={handleEnter}>
              <Icon path={mdiMicrophoneSettings} size={2} color="#f15e5a" />
              {/*
              <img
                src="/images/parallelwallet/voice_id_blue.svg"
                alt="Voice ID"
                className={classes.miniImg}
              />
              */}
              <div className={classes.headlineContainer}>
                <Typography variant="h5" classes={{ root: classes.featureTitle }}>
                  Access your wallet with your Voice.
                </Typography>
              </div>
              <Typography variant="body1" className={classes.descriptionText}>
                For added security to your account,
                you can also unlock your wallet using a voice ID.
                Takes 30 seconds to setup!
              </Typography>

            </AppFeatureLarge>

            <AppFeatureLarge index={2} handleEnter={handleEnter}>
              <Icon path={mdiSignatureFreehand} size={2} color="#f15e5a" />
              {/*
              <img
                src="/images/parallelwallet/palm-id-closed.svg"
                alt="Palm ID"
                className={classes.miniImg}
              />
              */}
              <div className={classes.headlineContainer}>
                <Typography variant="h5" classes={{ root: classes.featureTitle }}>
                  Sign transactions with your Palm.
                </Typography>
              </div>
              <Typography variant="body1" className={classes.descriptionText}>
                Aside from voice, you have the option to register your palm
                prints as another means to unlock your wallet.
                Select whichever login combo you deem convenient.
              </Typography>

            </AppFeatureLarge>

            <AppFeatureLarge index={3} handleEnter={handleEnter}>
              <img
                src="/images/parallelwallet/parallelchain-icon.svg"
                alt="Parallelchain"
                className={classes.miniImg}
              />
              <div className={classes.headlineContainer}>
                <Typography variant="h5" classes={{ root: classes.featureTitle }}>
                  Data Privacy Driven. Powered by ParallelChain®.
                </Typography>
              </div>
              <Typography variant="body1" className={classes.descriptionText}>
                All data, such as your biometrics, account activities and transaction records,
                are stored with triple redundancy on your ParallelChain® Personal blockchain.
              </Typography>

            </AppFeatureLarge>

            <AppFeatureLarge index={4} handleEnter={handleEnter}>
              <Icon path={mdiUpdate} size={2} color="#f15e5a" />
              {/*
              <img
                src="/images/parallelwallet/realtime_updates_blue.svg"
                alt="Updates"
                className={classes.miniImg}
              />
              */}
              <div className={classes.headlineContainer}>
                <Typography variant="h5" classes={{ root: classes.featureTitle }}>
                  Real-time Sync Accross all Blockchains.
                </Typography>
              </div>
              <Typography variant="body1" className={classes.descriptionText}>
                Transaction records and account balances are updated and verified in
                less than 0.01s, protecting your account from inflated balances.
              </Typography>

            </AppFeatureLarge>

            <AppFeatureLarge index={5} handleEnter={handleEnter}>
              <Icon path={mdiShieldKeyOutline} size={2} color="#f15e5a" />
              {/*
              <img
                src="/images/parallelwallet/privacy_protected_blue.svg"
                alt="Privacy"
                className={classes.miniImg}
              />
              */}
              <div className={classes.headlineContainer}>
                <Typography variant="h5" classes={{ root: classes.featureTitle }}>
                  Privacy-protected Transaction Signing.
                </Typography>
              </div>
              <Typography variant="body1" className={classes.descriptionText}>
                With privacy built-in (i.e. Right to be Forgotten), ParallelWallet
                gives you the option to freely transfer your assets while
                having your identity and information protected.
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
                src="/images/parallelwallet/wallet_face_id.png"
                alt="Face ID"
                className={`${classes.featureImage} ${(imgIndex !== 0) && classes.hidden}`}
              />
              <img
                src="/images/parallelwallet/wallet_voice_id_no_frame.png"
                alt="Voice ID"
                className={`${classes.featureImage} ${(imgIndex !== 1) && classes.hidden}`}
              />
              <img
                src="/images/parallelwallet/palm_id_no_frame.png"
                alt="Tokenize and trade everything"
                className={`${classes.featureImage} ${(imgIndex !== 2) && classes.hidden}`}
              />
              <img
                src="/images/parallelwallet/wallet/account.png"
                alt="Tokenize and trade everything"
                className={`${classes.featureImage} ${(imgIndex !== 3) && classes.hidden}`}
              />
              <img
                src="/images/parallelwallet/wallet/history_page.png"
                alt="Custom currencies"
                className={`${classes.featureImage} ${(imgIndex !== 4) && classes.hidden}`}
              />
              <img
                src="/images/parallelwallet/wallet/send_ios.png"
                alt="Macro-micro"
                className={`${classes.featureImage} ${(imgIndex !== 5) && classes.hidden}`}
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
