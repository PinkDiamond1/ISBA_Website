import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Card, Chip } from '@material-ui/core';
import Section from './Section';
import BlockLink from './BlockLink';
import MagicBox from './MagicBox';
import FadeIn from './FadeIn';

const useStyles = makeStyles((theme) => ({
  overTitleText: {
    marginTop: `${theme.spacing(16)}px`,
    color: '#fc8235',
    lineHeight: 1.4,
  },
  titleText: {
    color: theme.palette.neutral.white,
    lineHeight: 1.4,
  },
  titleContainer: {
    marginBottom: `${theme.spacing(5)}px`,
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
  sideLogoImage: {
    height: '120px',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      objectFit: 'contain',
      height: '160px',
      margin: `0 ${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(3)}px`,
    },
  },
  topLogoImage: {
    height: '100px',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      objectFit: 'contain',
      height: '140px',
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
    textAlign: 'left',
  },
  topCardTitleText: {
    color: `${theme.palette.neutral.white}`,
    fontWeight: 'bold',
  },
  cardSubtitleText: {
    color: `${theme.palette.neutral.white}`,
    textAlign: 'left',
    paddingRight: `${theme.spacing(10)}px`,
  },
  topCardSubtitleText: {
    color: `${theme.palette.neutral.white}`,
  },
  sideProductCard: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '16px',
    height: '100%',
    padding: `${theme.spacing(2)}px`,
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    marginBottom: `${theme.spacing(2)}px`,
  },
  topProductCard: {
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
    background: 'linear-gradient(90deg, rgba(7,1,99,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  },
  infographic: {
    display: 'block',
    width: '100%',
  },
  chipContainer: {
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(1)}px`,
  },
  WalletChip: {
    display: 'table-cell',
    color: 'rgba(148,144,159,255)',
    fontSize: '1rem',
  },
  KYCChip: {
    display: 'table-cell',
    color: 'rgba(0,144,158,1)',
    fontSize: '1rem',
  },
  PreventiveChip: {
    color: '#d53369',
    fontSize: '1rem',
  },
  ApprovalChip: {
    color: 'rgba(76,198,179,1)',
    fontSize: '1rem',
  },
  ChattleChip: {
    color: 'rgba(0,82,84,1)',
    fontSize: '1rem',
  },
}));

export default function OurEcosystemPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={4}
      spacingBottom={8}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="up" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
            <Typography
              variant="h2"
              classes={{
                root: classes.titleText,
              }}
            >
              <b>A blockchain ecosystem</b> <br />​with layer 1 and 2 solutions
            </Typography>
          </FadeIn>
        )}
      />
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
            <BlockLink href="/parallelchain">
              <Card
                classes={{ root: `${classes.sideProductCard} ${classes.parallelChainCard}` }}
              >
                <div className={classes.cardLogoFlex}>
                  <img
                    src="/images/parallelchain/parallelchain-logo-white.svg"
                    alt="ParallelChain"
                    className={`${classes.logoImage} ${classes.sideLogoImage}`}
                  />
                </div>
                <div className={classes.cardDescriptionFlex}>
                  <div className={classes.titleFlexContainer}>
                    <img src="/images/parallelchain/parallelchain-logo-white.svg" alt="ParallelChain" className={classes.smalllogoImage} />
                    <Typography variant="h4" className={classes.cardTitleText}>
                      ParallelChain®
                    </Typography>
                  </div>
                  <Typography variant="h6" classes={{ root: classes.cardSubtitleText }}>
                    The public+private blockchain platform with extremely high throughput, low latency,
                    GDPR privacy compliance and seamless migration from Ethereum and Hyperledger.
                  </Typography>
                </div>
                <div className={classes.cardBackgroundFlex}>
                  <img src="/images/parallelchain/parallelchain-logo-white.svg" alt="ParallelChain" className={classes.image} />
                </div>
              </Card>
            </BlockLink>
            <Grid container spacing={2} className={classes.productCardGrid}>
              <Grid item xs={12} md={6}>
                <BlockLink href="/parallelwallet">
                  <Card
                    classes={{ root: `${classes.sideProductCard} ${classes.parallelWalletCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/parallelwallet/parallelwallet-logo-no-text.svg"
                        alt="ParallelWallet"
                        className={`${classes.logoImage} ${classes.sideLogoImage}`}
                      />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/parallelwallet/parallelwallet-logo-no-text.svg" alt="ParallelWallet" className={classes.smalllogoImage} />
                        <Typography variant="h4" className={classes.cardTitleText}>
                          ParallelWallet
                        </Typography>
                      </div>
                      <div className={classes.chipContainer}>
                        <Chip label="Wallet" className={classes.WalletChip} />
                      </div>
                      <Typography variant="h6" classes={{ root: classes.cardSubtitleText }}>
                        An unhackable digital wallet for secure crypto and fiat storage and transfer
                      </Typography>
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/parallelwallet/parallelwallet-logo-white.svg" alt="ParallelWallet" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </Grid>
              <Grid item xs={12} md={6}>
                <BlockLink href="/ekyc-chain">
                  <Card
                    classes={{ root: `${classes.sideProductCard} ${classes.ekycChainCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/ekycchain/ekycchain-logo-white.svg"
                        alt="eKYC-Chain"
                        className={`${classes.logoImage} ${classes.sideLogoImage}`}
                      />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/ekycchain/ekycchain-logo-white.svg" alt="eKYC-Chain" className={classes.smalllogoImage} />
                        <Typography variant="h4" className={classes.cardTitleText}>
                          eKYC-Chain
                        </Typography>
                      </div>
                      <div className={classes.chipContainer}>
                        <Chip label="KYC" className={classes.KYCChip} />
                      </div>
                      <Typography variant="h6" classes={{ root: classes.cardSubtitleText }}>
                        Digital identity verification with spoof-proof biometric system
                      </Typography>
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/ekycchain/ekycchain-logo-white.svg" alt="eKYC-Chain" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>

              </Grid>
              <Grid item xs={12} md={4}>
                <BlockLink href="/preventivechain">
                  <Card
                    classes={{ root: `${classes.topProductCard} ${classes.preventiveChainCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img src="/images/preventivechain/preventivechain-logo-white.svg" alt="PreventiveChain" className={`${classes.logoImage} ${classes.topLogoImage}`} />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/preventivechain/preventivechain-logo-white.svg" alt="PreventiveChain" className={classes.smalllogoImage} />
                        <Typography variant="h4" className={classes.topCardTitleText}>
                          PreventiveChain
                        </Typography>
                      </div>
                      <div className={classes.chipContainer}>
                        <Chip label="Security" className={classes.PreventiveChip} />
                      </div>
                      <Typography variant="body1" classes={{ root: classes.topCardSubtitleText }}>
                        World's first blockchain cybersecurity system that pre-empts insider threats
                      </Typography>
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/preventivechain/preventivechain-logo-white.svg" alt="PreventiveChain" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </Grid>
              <Grid item xs={12} md={4}>
                <BlockLink href="/approvalchain">
                  <Card
                    classes={{ root: `${classes.topProductCard} ${classes.approvalChainCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img src="/images/approvalchain/approvalchain-logo-white.svg" alt="ApprovalChain" className={`${classes.logoImage} ${classes.topLogoImage}`} />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/approvalchain/approvalchain-logo-white.svg" alt="ApprovalChain" className={classes.smalllogoImage} />
                        <Typography variant="h4" className={classes.topCardTitleText}>
                          ApprovalChain
                        </Typography>
                      </div>
                      <div className={classes.chipContainer}>
                        <Chip label="Workflow" className={classes.ApprovalChip} />
                      </div>
                      <Typography variant="body1" classes={{ root: classes.topCardSubtitleText }}>
                        Web+mobile system for workflow tracking and approval transparency.
                      </Typography>
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/approvalchain/approvalchain-logo-white.svg" alt="ApprovalChain" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </Grid>
              <Grid item xs={12} md={4}>
                <BlockLink href="/chattelchain">
                  <Card
                    classes={{ root: `${classes.topProductCard} ${classes.chattelChainCard}` }}
                  >
                    <div className={classes.cardLogoFlex}>
                      <img src="/images/chattelchain/chattelchain-logo-white.svg" alt="ChattelChain" className={`${classes.logoImage} ${classes.topLogoImage}`} />
                    </div>
                    <div className={classes.cardDescriptionFlex}>
                      <div className={classes.titleFlexContainer}>
                        <img src="/images/chattelchain/chattelchain-logo-white.svg" alt="ChattelChain" className={classes.smalllogoImage} />
                        <Typography variant="h4" className={classes.topCardTitleText}>
                          ChattelChain
                        </Typography>
                      </div>
                      <div className={classes.chipContainer}>
                        <Chip label="Trading" className={classes.ChattleChip} />
                      </div>
                      <Typography variant="body1" classes={{ root: classes.topCardSubtitleText }}>
                        Asset tokenization platform for crypto trading and creating asset-backed tokens
                      </Typography>
                    </div>
                    <div className={classes.cardBackgroundFlex}>
                      <img src="/images/chattelchain/chattelchain-logo-white.svg" alt="ChattelChain" className={classes.image} />
                    </div>
                  </Card>
                </BlockLink>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
    </Section>
  );
}
