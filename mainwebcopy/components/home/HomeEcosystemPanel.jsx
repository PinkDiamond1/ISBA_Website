import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Carousel from 'react-material-ui-carousel';
import PWThemeSection from '../PWThemeSection';
import MagicBox from '../MagicBox';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'white',
    width: '200vw',
    height: '400px',
    textAlign: 'center',
    margin: 'auto auto',
    padding: '10px',
  },
  innerCard: {
    backgroundColor: 'white',
    width: '80%',
    height: '300px',
    textAlign: 'left',
    borderRadius: '8px',
    margin: 'auto auto',
    padding: '10px',
  },
  titleContainer: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    pointerEvents: 'none',
  },
  logoImage: {
    width: '100%',
    pointerEvents: 'none',
    margin: 'auto auto',
  },
  button: {
    marginTop: `${theme.spacing(2)}px`,
  },
  title: {
    fontWeight: '100',
  },
  body: {
    fontWeight: '100',
  },
  body2: {
    marginTop: `${theme.spacing(2)}px`,
    fontWeight: '100',
  },
  imageContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 'auto',
  },
  sourceImage: {
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    marginBottom: `${theme.spacing(2)}px`,
    display: 'block',
    padding: 2,
    [theme.breakpoints.up('xs')]: {
      width: '120px',
      height: '70px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '140px',
      height: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '175px',
      height: '80px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '75px',
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
  vf: {
    paddingTop: 2,
    width: '90px',
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      height: '50px',
    },
  },
  digfin: {
    paddingBottom: 14,
  },
  circle: {
    width: '100px',
    height: '100px',
    borderRadius: '100px',
    color: 'white',
    backgroundColor: '#546563',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
}));

export default function HomeEcosystemPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const items = [
    {
      description: 'Your private blockchain where you have full control of the network, including how or whether it interacts with the Mainnet.',
    },
    {
      description: 'An interface where you can view the live status of the blockchain, your token balance, stakes, and more.',
    },
    {
      description: 'A distributed, proof-of-stake layer governed and secured by dozens of trusted parties spread across the globe.',
    },
  ];

  return (
    <PWThemeSection
      background={theme.palette.neutral.white}
      spacingTop={2}
      spacingBottom={0}
    >
      <Grid containerdirection="row" spacingBottom={0}>

        <Grid item xs={12} lg={12} style={{ marginTop: '1rem', display: 'flex', paddingBottom: '0px' }}>
          {!sm && (
          <MagicBox
            render={(boxIn, boxRef) => (
              <img src="/images/index/EcosystemImage.png" alt="Ecosystem Image" className={classes.logoImage} />
            )}
          />
          ) }
          {sm && (
          <MagicBox
            render={(boxIn, boxRef) => (
              <Carousel
                className={classes.card}
                navButtonsAlwaysVisible
                indicatorIconButtonProps={{
                  style: {
                    visibility: 'hidden',
                  },
                }}
                NextIcon={<img src="/images/index/right.png" />}
                PrevIcon={<img src="/images/index/left.png" />}
              >

                {
                  items.map((item, i) => (
                    <div className={classes.innerCard} key={i}>
                      <Typography style={{ color: '#546563', marginBottom: '20px' }}>
                        The Blockchain Ecosystem
                      </Typography>
                      <Typography variant="h5" classes={{ root: classes.titleText }} style={{ marginBottom: '20px', textAlign: 'center' }}>
                        Public + Private Integration
                      </Typography>
                      {i === 1 && (
                      <Typography variant="h5" classes={{ root: classes.titleText }} style={{ marginBottom: '20px', textAlign: 'center' }}>
                        Your ParallelWallet
                      </Typography>
                      ) }
                      {item.description}
                      {i === 2 && (
                      <div className={classes.circle} style={{ position: 'absolute', right: '0%' }}>
                        Public Mainnet
                      </div>
                      )}
                      {i === 0 && (
                      <div className={classes.circle} style={{ position: 'absolute', left: '0%' }}>
                        Private Chain
                      </div>
                      )}
                    </div>
                  ))
              }
              </Carousel>

            )}
          />
          ) }
        </Grid>
      </Grid>
    </PWThemeSection>
  );
}
