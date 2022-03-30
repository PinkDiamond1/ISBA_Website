/* eslint-disable no-nested-ternary */
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import PWThemeSection from '../PWThemeSection';

const useStyles = makeStyles((theme) => ({
  titleText: {
    textAlign: 'left',
    color: 'white',
    fontWeight: '700',
    padding: `${theme.spacing(2)}px`,
  },
  subtitleText: {
    textAlign: 'left',
    color: 'white',
    padding: `${theme.spacing(2)}px`,
  },
  useCase: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '&:hover > $imageContainer > $rotBox': {
      animation: '$rotate',
      animationDuration: '4s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    },
  },
  useCasesGrid: {
    marginTop: `${theme.spacing(8)}px`,
  },
  useCaseImage: {
    width: '60px',
    margin: `${theme.spacing(2)}px`,
  },
  imageContainer: {
    width: '80px',
    position: 'relative',
  },
  rotBox: {
    width: '50px',
    height: '50px',
    background: 'url(/images/index/hex_solid.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    position: 'absolute',
    transform: 'rotate(45deg)',
    left: '50%',
    top: '10%',
    zIndex: '-1',
    transitionProperty: 'transform',
    transitionDuration: '2s',
  },
  '@keyframes rotate': {
    from: { transform: 'rotate(45deg)' },
    to: { transform: 'rotate(360deg)' },
  },

}));

const background = (url) => `url(${url}) center/cover`;

export default function HomeMainnetUseCases() {
  const classes = useStyles();

  return (
    <PWThemeSection
      className={classes.root}
      subContainerClassName={classes.subRoot}
      background={`${background('/images/index/mainnet-usecases-bg.png')}`}
    >
      <MagicBox
        render={(boxIn, boxOut, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef} out={boxOut}>
            <Typography variant="h2" className={classes.titleText}>
              ParallelChain Mainnet Use Cases
            </Typography>

            <Grid container spacing={6} justifyContent="space-between" alignItems="baseline" className={classes.useCasesGrid}>
              <Grid item md={3}>
                <div className={classes.useCase}>
                  <div className={classes.imageContainer}>
                    <div className={classes.rotBox} />
                    <img src="/images/index/nfts.svg" className={classes.useCaseImage} alt="NFT" />
                  </div>
                  <Typography variant="h4" className={classes.titleText}>
                    NFTs
                  </Typography>
                  <Typography variant="h6" className={classes.subtitleText}>
                    With WASM and EVM compatibility, ParallelChain
                    powers the most competitive NFT platforms where
                    users can mint and trade all kinds of NFT at an
                    ultra-low fee.
                  </Typography>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className={classes.useCase}>
                  <div className={classes.imageContainer}>
                    <div className={classes.rotBox} />
                    <img src="/images/index/games.svg" className={classes.useCaseImage} alt="Games" />
                  </div>
                  <Typography variant="h4" className={classes.titleText}>
                    Games
                  </Typography>

                  <Typography variant="h6" className={classes.subtitleText}>
                    Run simple or advanced games without lag – ParallelChain
                    is a high performance smart contract platform designed to
                    process complex logics and GameFi tokenomics.
                  </Typography>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className={classes.useCase}>
                  <div className={classes.imageContainer}>
                    <div className={classes.rotBox} />
                    <img src="/images/index/dexs.svg" className={classes.useCaseImage} alt="DEXs" />
                  </div>
                  <Typography variant="h4" className={classes.titleText}>
                    DEXs
                  </Typography>

                  <Typography variant="h6" className={classes.subtitleText}>
                    ParallelChain provides flexible smart contract deployment
                    to support different types of DEX protocol, whether it
                    is AMM or orderbook-based.
                  </Typography>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className={classes.useCase}>
                  <div className={classes.imageContainer}>
                    <div className={classes.rotBox} />
                    <img src="/images/index/otherapps.svg" className={classes.useCaseImage} alt="Other Applications" />
                  </div>
                  <Typography variant="h4" className={classes.titleText}>
                    Other Applications
                  </Typography>

                  <Typography variant="h6" className={classes.subtitleText}>
                    Faster, cheaper, stronger. ParallelChain brings the
                    wildest DeFi concepts to life, the scope of use case
                    is only limited by your imagination.
                  </Typography>
                </div>
              </Grid>

            </Grid>

          </FadeIn>
        )}
      />

    </PWThemeSection>
  );
}
