/* eslint-disable no-nested-ternary */
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import PWThemeSection from '../PWThemeSection';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'white',
    padding: `${theme.spacing(4)}px`,
  },
  titleText: {
    textAlign: 'left',
    color: 'white',
    fontWeight: '700',
    padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
  },
  subtitleText: {
    textAlign: 'left',
    color: 'white',
    padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
  },
  useCase: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  useCasesGrid: {
    marginTop: `${theme.spacing(8)}px`,
  },
  useCaseImage: {
    width: '60px',
    margin: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
  },

}));

const background = (url) => `url(${url}) center/cover`;

export default function HomeMainnetUseCasesSmall() {
  const classes = useStyles();

  return (
    <PWThemeSection
      className={classes.root}
      subContainerClassName={classes.subRoot}
      background={`${background('/images/index/background_black.svg')}`}
    >
      <MagicBox
        render={(boxIn, boxOut, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef} out={boxOut}>
            <Typography variant="h2" className={classes.title}>
              ParallelChain Mainnet Use Cases
            </Typography>
            <Grid container spacing={6} justifyContent="space-between" className={classes.useCasesGrid}>
              <Carousel
                animation="slide"
                autoPlay={false}
                cycleNavigation={false}
                timeout={300}
              >
                <div className={classes.useCase}>
                  <img src="/images/index/nfts.svg" className={classes.useCaseImage} alt="NFT" />
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
                <div className={classes.useCase}>
                  <img src="/images/index/games.svg" className={classes.useCaseImage} alt="Games" />
                  <Typography variant="h4" className={classes.titleText}>
                    Games
                  </Typography>
                  <Typography variant="h6" className={classes.subtitleText}>
                    Run simple or advanced games without lag – ParallelChain is
                    a high performance smart contract platform designed to process
                    complex logics and GameFi tokenomics.
                  </Typography>
                </div>
                <div className={classes.useCase}>
                  <img src="/images/index/dexs.svg" className={classes.useCaseImage} alt="DEXs" />
                  <Typography variant="h4" className={classes.titleText}>
                    DEXs
                  </Typography>
                  <Typography variant="h6" className={classes.subtitleText}>
                    ParallelChain provides flexible smart contract deployment
                    to support different types of DEX protocol, whether it
                    is AMM or orderbook-based.
                  </Typography>
                </div>
                <div className={classes.useCase}>
                  <img src="/images/index/otherapps.svg" className={classes.useCaseImage} alt="Other Applications" />
                  <Typography variant="h4" className={classes.titleText}>
                    Other Applications
                  </Typography>
                  <Typography variant="h6" className={classes.subtitleText}>
                    Faster, cheaper, stronger. ParallelChain brings the
                    wildest DeFi concepts to life, the scope of use case
                    is only limited by your imagination.
                  </Typography>
                </div>
              </Carousel>

            </Grid>

          </FadeIn>
        )}
      />

    </PWThemeSection>
  );
}
