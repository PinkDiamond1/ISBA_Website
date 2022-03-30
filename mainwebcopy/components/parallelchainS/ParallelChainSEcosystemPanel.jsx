import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Overtitle } from 'dtl-react-components';
import Section from '../Section';
import BlockLink from '../BlockLink';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  overTitleText: {
    marginTop: `${theme.spacing(16)}px`,
    color: '#027D6F',
  },
  titleText: {
    color: theme.palette.neutral.dark,
  },
  subTitleText: {
    fontWeight: '400',
    color: 'black',
    marginBottom: `${theme.spacing(6)}px`,
  },
  titleContainer: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  parallelVerseText: {
    color: theme.palette.neutral.white,
    fontWeight: 500,
  },
  productCardGrid: {
    marginBottom: `${theme.spacing(1)}px`,
  },
  cardContainer: {
    width: '100%',
    height: '100%',
  },
  titleFlexContainer: {
    marginBottom: '0px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  logoImage: {
    display: 'none',
    pointerEvents: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      objectFit: 'contain',
      height: '80px',
      margin: `0 ${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(3)}px`,
    },
  },
  parallelChainLogoImage: {
    height: '120px',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      objectFit: 'contain',
      height: '160px',
      margin: `0 ${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(3)}px`,
    },
  },
  smalllogoImage: {
    display: 'block',
    height: '45px',
    marginRight: `${theme.spacing(1)}px`,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    pointerEvents: 'none',
  },
  cardLogoFlex: {
    flexGrow: '0',
  },
  cardDescriptionFlex: {
    flexGrow: '1',
  },
  cardBackgroundFlex: {
    position: 'absolute',
    bottom: '100px',
    right: '-24px',
    flexGrow: '0',
    flexBasis: '200px',
  },
  image: {
    position: 'absolute',
    opacity: '0.1',
    bottom: '-150px',
    right: '-100px',
    display: 'block',
    margin: `${theme.spacing(2)}px auto 0 auto`,
    height: '300px',
    [theme.breakpoints.up('md')]: {
      opacity: '0.25',
    },
    pointerEvents: 'none',
  },
  cardTitleText: {
    color: `${theme.palette.neutral.white}`,
    fontWeight: 'bold',
  },
  cardSubtitleText: {
    color: `${theme.palette.neutral.white}`,
  },
  productCard: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    flexDirection: 'column',
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    alignItems: 'left',
    borderRadius: '16px',
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  chattelChainCard: {
    background: 'linear-gradient(90deg, rgba(0,82,84,1) 0%, rgba(81,218,181,1) 100%)',
  },
  preventiveChainCard: {
    background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
  },
  parallelWalletCard: {
    background: 'linear-gradient(90deg, rgba(42,36,56,255) 0%, rgba(148,144,159,255) 100%)',
  },
  constructionChainCard: {
    background: 'linear-gradient(90deg, rgba(242,200,22,1) 0%, rgba(209,124,0,1) 100%)',
  },
  approvalChainCard: {
    background: 'linear-gradient(-90deg, rgba(76,198,179,1) 0%, rgba(94,200,81,1) 100%)',
  },
  ekycChainCard: {
    background: 'linear-gradient(-90deg, rgba(39,73,109,1) 0%, rgba(0,144,158,1) 100%)',
  },
  parallelChainCard: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    background: 'linear-gradient(90deg, rgba(17,168,142,1) 10%, rgba(0,76,66,1) 100%)',
    borderRadius: '16px',
    padding: `${theme.spacing(2)}px`,
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    marginBottom: `${theme.spacing(2)}px`,
  },
  infographic: {
    display: 'block',
    width: '100%',
  },
}));

export default function ParallelChainSEcosystemPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const lgOrLarger = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Section
      spacingTop={2}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="up" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
            <Typography variant="h3" classes={{ root: classes.overTitleText }}>
              Paradigm Shift in Enterprise Software
            </Typography>
            <Typography variant="h2" classes={{ root: classes.titleText }}>
              Blockchain Powered, Zero Compromises.
            </Typography>
            <Typography variant="h3" classes={{ root: classes.subTitleText }}>
              A suite of layer 2 applications, built on top of ParallelChain <br/>
              Enterprise leveraging its speed, security and data immutability.
            </Typography>
          </FadeIn>
        )}
      />
      {/* <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
            <BlockLink href="/parallelchain">
              <Card
                classes={{ root: classes.parallelChainCard }}
              >
                <div className={classes.cardLogoFlex}>
                  <img
                    src="/images/parallelchain/ParallelChain-icon-white.svg"
                    alt="ParallelChain"
                    className={`${classes.logoImage} ${classes.parallelChainLogoImage}`}
                  />
                </div>
                <div className={classes.cardDescriptionFlex}>
                  <div className={classes.titleFlexContainer}>
                    <img src="/images/parallelchain/ParallelChain-icon-white.svg" alt="ParallelChain" className={classes.smalllogoImage} />
                    <Typography variant="h6" className={classes.cardTitleText}>
                      ParallelChain S
                    </Typography>
                  </div>
                  <Typography variant="body1" classes={{ root: classes.cardSubtitleText }}>
                    Our core technology. The fastest blockchain
                    in the world, with real time updates and compliance
                    with international privacy ordinances.
                  </Typography>
                </div>
                <div className={classes.cardBackgroundFlex}>
                  <img src="/images/parallelchain/ParallelChain-icon-white.svg" alt="ParallelChain" className={classes.image} />
                </div>
              </Card>
            </BlockLink>
          </FadeIn>
        )}
      /> */}
      <Grid container spacing={2} className={classes.productCardGrid}>
        <Grid item xs={12} md={6}>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn className={classes.cardContainer} variant="up" in={boxIn} boxRef={boxRef}>
                <BlockLink href="/parallelwallet">
                  <Card
                    classes={{ root: `${classes.productCard} ${classes.parallelWalletCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img src="/images/parallelwallet/parallelwallet-logo-no-text.svg" alt="ParallelWallet" className={classes.logoImage} />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/parallelwallet/parallelwallet-logo-no-text.svg" alt="ParallelWallet" className={classes.smalllogoImage} />
                        <Typography variant="h6" className={classes.cardTitleText}>
                          ParallelWallet
                        </Typography>
                      </div>
                      {lgOrLarger && (
                        <Typography variant="body1" classes={{ root: classes.cardSubtitleText }}>
                          Personal vault for secure crypto storage with multi-biometric recognition.
                        </Typography>
                      )}
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/parallelwallet/parallelwallet-logo-white.svg" alt="ParallelWallet" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </FadeIn>
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn className={classes.cardContainer} variant="up" in={boxIn} boxRef={boxRef}>
                <BlockLink href="/ekyc-chain">
                  <Card
                    classes={{ root: `${classes.productCard} ${classes.ekycChainCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img src="/images/ekycchain/ekycchain-logo-white.svg" alt="eKYC-Chain" className={classes.logoImage} />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/ekycchain/ekycchain-logo-white.svg" alt="eKYC-Chain" className={classes.smalllogoImage} />
                        <Typography variant="h6" className={classes.cardTitleText}>
                          eKYC-Chain
                        </Typography>
                      </div>
                      {lgOrLarger && (
                        <Typography variant="body1" classes={{ root: classes.cardSubtitleText }}>
                          Digital identity verification with spoof-proof biometric system.
                        </Typography>
                      )}
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/ekycchain/ekycchain-logo-white.svg" alt="eKYC-Chain" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </FadeIn>
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn className={classes.cardContainer} variant="up" in={boxIn} boxRef={boxRef}>
                <BlockLink href="/preventivechain">
                  <Card
                    classes={{ root: `${classes.productCard} ${classes.preventiveChainCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img src="/images/preventivechain/preventivechain-logo-white.svg" alt="PreventiveChain" className={classes.logoImage} />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/preventivechain/preventivechain-logo-white.svg" alt="PreventiveChain" className={classes.smalllogoImage} />
                        <Typography variant="h6" className={classes.cardTitleText}>
                          PreventiveChain
                        </Typography>
                      </div>
                      {lgOrLarger && (
                        <Typography variant="body1" classes={{ root: classes.cardSubtitleText }}>
                          World's first blockchain cybersecurity system
                          that pre-empts insider threats.
                        </Typography>
                      )}
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/preventivechain/preventivechain-logo-white.svg" alt="PreventiveChain" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </FadeIn>
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn className={classes.cardContainer} variant="up" in={boxIn} boxRef={boxRef}>
                <BlockLink href="/approvalchain">
                  <Card
                    classes={{ root: `${classes.productCard} ${classes.approvalChainCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img src="/images/approvalchain/approvalchain-logo-white.svg" alt="ApprovalChain" className={classes.logoImage} />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/approvalchain/approvalchain-logo-white.svg" alt="ApprovalChain" className={classes.smalllogoImage} />
                        <Typography variant="h6" className={classes.cardTitleText}>
                          ApprovalChain
                        </Typography>
                      </div>
                      {lgOrLarger && (
                        <Typography variant="body1" classes={{ root: classes.cardSubtitleText }}>
                          Web+mobile system for workflow tracking and approval transparency.
                        </Typography>
                      )}
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/approvalchain/approvalchain-logo-white.svg" alt="ApprovalChain" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </FadeIn>
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn className={classes.cardContainer} variant="up" in={boxIn} boxRef={boxRef}>
                <BlockLink href="/chattelchain">
                  <Card
                    classes={{ root: `${classes.productCard} ${classes.chattelChainCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img src="/images/chattelchain/chattelchain-logo-white.svg" alt="ChattelChain" className={classes.logoImage} />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/chattelchain/chattelchain-logo-white.svg" alt="ChattelChain" className={classes.smalllogoImage} />
                        <Typography variant="h6" className={classes.cardTitleText}>
                          ChattelChain
                        </Typography>
                      </div>
                      {lgOrLarger && (
                        <Typography variant="body1" classes={{ root: classes.cardSubtitleText }}>
                          Asset tokenization platform for
                          crypto trading and creating asset-backed tokens.
                        </Typography>
                      )}
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/chattelchain/chattelchain-logo-white.svg" alt="ChattelChain" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </FadeIn>
            )}
          />
        </Grid>
      </Grid>
    </Section>
  );
}
