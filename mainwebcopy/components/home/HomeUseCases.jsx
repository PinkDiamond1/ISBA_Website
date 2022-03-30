import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';
import PWThemeSection from '../PWThemeSection';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  sourceImage: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(1)}px`,
    padding: '4px',
    display: 'block',
    [theme.breakpoints.up('xs')]: {
      width: '120px',
      height: '70px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '140px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '320px',
      height: '400px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '70px',
    },
    pointerEvents: 'none',
  },
  sourceImage2: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(1)}px`,
    display: 'block',
    padding: '4px',
    [theme.breakpoints.up('xs')]: {
      width: '120px',
      height: '70px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '140px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '490px',
      height: '400px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '75px',
      height: '70px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '70px',
    },
    pointerEvents: 'none',
  },
  sourceImage3: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(1)}px`,
    display: 'block',
    padding: '4px',
    [theme.breakpoints.up('xs')]: {
      width: '120px',
      height: '70px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '140px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '640px',
      height: '400px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '75px',
      height: '70px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '70px',
    },
    pointerEvents: 'none',
  },
  bitcoinist: {
    width: '300px',
    height: '45px',
    [theme.breakpoints.down('md')]: {
      width: '230px',
      height: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '40px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '110px',
      height: '40px',
    },
  },
  textImgContainer: {
    position: 'relative',
    textAlign: 'left',
    color: 'white',
    '&:hover': {
      filter: 'brightness(80%)',
    },
    '&:hover > $bottomLeft': {
      opacity: 0,
    },
    '&:hover > $topCenter': {
      opacity: 1,
    },
    [theme.breakpoints.down('sm')]: {
      '&:hover > $topCenter': {
        opacity: 0,
      },
      '&:hover > $bottomLeft': {
        opacity: 1,
      },
    },
  },
  bottomLeft: {
    position: 'absolute',
    bottom: '8px',
    left: '16px',
    padding: '4px',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      top: '8px',
      right: '16px',
    },

  },
  topCenter: {
    position: 'absolute',
    left: '16px',
    top: '5%',
    opacity: 0,
  },
  tick: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },

  },
}));

export default function HomeUseCases() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <PWThemeSection
      background={theme.palette.neutral.white}
      spacingTop={2}
      spacingBottom={2}
    >
      <Grid containerdirection="row" spacingBottom={0}>
        <Grid
          item
          xs={12}
          lg={12}
          style={{
            marginTop: '1rem', display: 'flex', paddingBottom: '0px', marginBottom: '4rem',
          }}
        >
          <Typography variant="h3" style={{ textAlign: 'left', color: 'black' }}>
            ParallelChain Use Cases & Solutions
          </Typography>
        </Grid>

        <div className={classes.imageContainer}>
          <Link href="/chattelchain">
            <div className={classes.textImgContainer}>
              <img src="/images/index/useCase0.png" alt="" className={classes.sourceImage} />
              <Typography variant="h5" className={classes.bottomLeft}>Loyalty &
                Rewards Tokenization

                <img src="/images/index/right.png" alt="" style={{ marginLeft: '10px', height: '10px' }} className={classes.tick} />

              </Typography>

              <Typography variant="h5" className={classes.topCenter}>
                <strong>
                  Loyalty &
                  Rewards Tokenization
                </strong>
                <br /><br />
                In a tokenized loyalty program, your customers will be rewarded with loyalty tokens that have immediate effect, actual cash value, and are tradable on a ParallelChain-based marketplace under your brand.

              </Typography>
            </div>
          </Link>
          <Link href="/preventivechain">
            <div className={classes.textImgContainer}>
              <img src="/images/index/useCase1.png" alt="" className={classes.sourceImage} />
              <Typography variant="h5" className={classes.bottomLeft}>Data Leak Prevention
                (onsite + remote)
                <img src="/images/index/right.png" alt="" style={{ marginLeft: '10px', height: '10px' }} className={classes.tick} />
              </Typography>
              <Typography variant="h5" className={classes.topCenter}>
                <strong>
                  Data Leak Prevention
                  <br />
                  (onsite + remote)
                </strong>
                <br /><br />
                Whether your employees are working in office or at home, their identity is continuously authenticated, authorized and monitored by the AI-trained system and its anti-spoofing facial recognition. All captured data is tamper-proof and persisted in the blockchain.

              </Typography>
            </div>
          </Link>
          <Link href="/ekyc-chain">
            <div className={classes.textImgContainer}>
              <img src="/images/index/useCase2.png" alt="" className={classes.sourceImage2} />
              <Typography variant="h5" className={classes.bottomLeft}>Automated KYC at Client Onboarding
                <img src="/images/index/right.png" alt="" style={{ marginLeft: '10px', height: '10px' }} className={classes.tick} />
              </Typography>
              <Typography variant="h5" className={classes.topCenter}>
                <strong>
                  Automated KYC at Client Onboarding
                </strong>
                <br /><br />
                ParallelChain offers blockchain-based RegTech solutions for an unique online onboarding system with biometric verification and a range of AI features to achieve faster and securer KYC checks. This one-stop platform digitises and integrates KYC at onboarding, while ensuring auditable, provable compliance in client data protection.

              </Typography>
            </div>
          </Link>

        </div>

        <div className={classes.imageContainer}>
          <Link href="/approvalchain">
            <div className={classes.textImgContainer}>
              <img src="/images/index/useCase3.png" alt="" className={classes.sourceImage2} />
              <Typography variant="h5" className={classes.bottomLeft}>Procurement & Supply Chain Management
                <img src="/images/index/right.png" alt="" style={{ marginLeft: '10px', height: '10px' }} className={classes.tick} />

              </Typography>
              <Typography variant="h5" className={classes.topCenter}>
                <strong>
                  Procurement & Supply Chain Management

                </strong>
                <br /><br />
                ParallelChain provides a smart contract solution to help
                your organization streamline operations, such as procurement
                and supplier management, by enabling actions to be auto-executed
                in a trustless, peer-to-peer fashion – all configurable to the flows
                that best support your business.

              </Typography>
            </div>
          </Link>
          <Link href="/approvalchain">
            <div className={classes.textImgContainer}>
              <img src="/images/index/useCase4.png" alt="" className={classes.sourceImage3} />
              <Typography variant="h5" className={classes.bottomLeft}>Product Provenance Tracking & Anti-counterfeiting
                <img src="/images/index/right.png" alt="" style={{ marginLeft: '10px', height: '10px' }} className={classes.tick} />

              </Typography>
              <Typography variant="h5" className={classes.topCenter}>
                <strong>
                  Product Provenance Tracking & Anti-counterfeiting

                </strong>
                <br /><br />
                Counterfeiting is a problem that plagues every
                sector that produces goods of some kind.
                On macro level, ParallelChain’s provenance
                tracking solution provides immutable,
                verifiable blockchain data that gives the
                supply chain real visibility and traceability.
              </Typography>
            </div>
          </Link>
        </div>
      </Grid>
    </PWThemeSection>
  );
}
