/* eslint-disable no-nested-ternary */
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Carousel from 'react-material-ui-carousel';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import PWThemeSection from '../PWThemeSection';

const privateUseCases = [
  {
    title: 'Company Data Leak Prevention',
    description: 'Protect company data from malicious insiders with AI-powered features and perpetual anti-spoofing face recognition - all captured data is tamper-proof and persisted in the blockchain',
  },
  {
    title: 'Tokenized Products\n & Loyalty Program',
    description: 'Integrate digital token into your business model and reward loyal customers with NFTs or branded tokens that have real value - all powered by ParallelChain Private.',
  },
  {
    title: 'Provenance\n & Anti-Counterfeit',
    description: 'Custom supply chain solutions integrated with anti-spoofing facial recognition, providing enhanced supply chain visibility and traceability with immutable, verifiable, accountable blockchain data.',
  },
  {
    title: 'Supply Chain\n & Project Management',
    description: 'A smart contract-based, self-executing solution that streamlines workflows, with privacy and accountability features designed for multi-party cooperation system, such as supply chain and Construction BIM.',
  },
  {
    title: 'AI-Powered KYC\n & AML RegTech Suite',
    description: 'Comprehensive RegTech solutions suite with biometric-driven KYC, machine learning-based AML, and patent-pending blockchain feature that helps businesses comply with global data privacy standards.',
  },

];

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'left',
    color: 'black',
    fontWeight: '700',
    padding: `${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(4)}px`,
    },
  },
  titleText: {
    textAlign: 'left',
    color: 'black',
    fontWeight: '700',
    whiteSpace: 'pre-line',
    padding: `${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
      whiteSpace: 'normal',
    },
  },
  subtitleText: {
    textAlign: 'left',
    color: 'black',
    padding: `${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
    },
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
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
    },

  },
  imageContainer: {
    width: '80px',
    position: 'relative',
  },
  pushLeft: {
    marginLeft: `${theme.spacing(2)}px`,
  },
  pushRight: {
    marginRight: `${theme.spacing(4)}px`,
  },
  rotBox: {
    width: '50px',
    height: '50px',
    background: 'url(/images/index/hex_light.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    transform: 'rotate(45deg)',
    position: 'absolute',
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

export default function HomePrivateUseCases() {
  const classes = useStyles();
  const theme = useTheme();
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <PWThemeSection
      className={classes.root}
      subContainerClassName={classes.subRoot}
      background={`${background('/images/index/landing_bg_bottom.svg')}`}
    >
      <MagicBox
        render={(boxIn, boxOut, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef} out={boxOut}>
            <Typography variant="h2" className={classes.title}>
              ParallelChain Private Layer-2 Solutions
            </Typography>
            {!smOrSmaller ? (
              <Grid container spacing={6} justifyContent="space-between" className={classes.useCasesGrid}>
                <Grid item md={4}>
                  <div className={classes.useCase}>
                    <div className={classes.imageContainer}>
                      <div className={classes.rotBox} />
                      <img src="/images/index/dataleak.svg" className={classes.useCaseImage} alt="Data Leak" />
                    </div>

                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[0].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[0].description}
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className={classes.useCase}>
                    <div className={classes.imageContainer}>
                      <div className={classes.rotBox} />
                      <img src="/images/index/tokenized.svg" className={classes.useCaseImage} alt="Tokenized" />
                    </div>
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[1].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[1].description}
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className={classes.useCase}>
                    <div className={classes.imageContainer}>
                      <div className={`${classes.rotBox} ${classes.pushLeft}`} />
                      <img src="/images/index/provenance.svg" className={classes.useCaseImage} alt="Provenance" />
                    </div>
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[2].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[2].description}
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className={classes.useCase}>
                    <div className={classes.imageContainer}>
                      <div className={classes.rotBox} />
                      <img src="/images/index/supplychain.svg" className={classes.useCaseImage} alt="Supply Chain" />
                    </div>
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[3].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[3].description}
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className={classes.useCase}>
                    <div className={classes.imageContainer}>
                      <div className={`${classes.rotBox} ${classes.pushRight}`} />
                      <img src="/images/index/regtech.svg" className={classes.useCaseImage} alt="Regtech" />
                    </div>
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[4].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[4].description}
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={4} />
              </Grid>

            ) : (
              <Grid container spacing={6} justifyContent="space-between" className={classes.useCasesGrid}>
                <Carousel
                  animation="slide"
                  autoPlay={false}
                  cycleNavigation={false}
                  timeout={300}
                >
                  <div className={classes.useCase}>
                    <img src="/images/index/dataleak.svg" className={classes.useCaseImage} alt="Data Leak" />
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[0].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[0].description}
                    </Typography>
                  </div>
                  <div className={classes.useCase}>
                    <img src="/images/index/tokenized.svg" className={classes.useCaseImage} alt="Tokenized" />
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[1].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[1].description}
                    </Typography>
                  </div>
                  <div className={classes.useCase}>
                    <img src="/images/index/provenance.svg" className={classes.useCaseImage} alt="Provenance" />
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[2].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[2].description}
                    </Typography>
                  </div>
                  <div className={classes.useCase}>
                    <img src="/images/index/supplychain.svg" className={classes.useCaseImage} alt="Supply Chain" />
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[3].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[3].description}
                    </Typography>
                  </div>
                  <div className={classes.useCase}>
                    <img src="/images/index/regtech.svg" className={classes.useCaseImage} alt="Regtech" />
                    <Typography variant="h4" className={classes.titleText}>
                      {privateUseCases[4].title}
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleText}>
                      {privateUseCases[4].description}
                    </Typography>
                  </div>
                </Carousel>
              </Grid>
            )}

          </FadeIn>
        )}
      />

    </PWThemeSection>
  );
}
