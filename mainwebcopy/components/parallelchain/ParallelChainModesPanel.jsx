import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Overtitle } from 'dtl-react-components';
import Section from '../Section';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((t) => ({
  root: {
    color: t.palette.primary.dark,
  },
  titleText: {
    marginBottom: `${t.spacing(10)}px`,
  },
  image: {
    display: 'block',
    width: '100%',
  },
  modeContainer: {
    marginBottom: `${t.spacing(6)}px`,
    [t.breakpoints.up('md')]: {
      marginBottom: `${t.spacing(12)}px`,
    },
  },
  emphasisText: {
    fontWeight: 500,
    background: '-webkit-linear-gradient(#01B6B8, #f15e5a)',
    WebkitBoxDecorationBreak: 'clone',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  rightText: {
    [t.breakpoints.up('md')]: {
      marginLeft: `${t.spacing(4)}px`,
    },
  },
  modeCard: {
    padding: `${t.spacing(3)}px`,
    borderRadius: '16px',
  },
}));

export default function ParallelChainModesPanel() {
  const classes = useStyles();

  return (
    <Section className={classes.root}>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef} className={classes.titleContainer}>
            <Overtitle>
              Natively supported operating modes
            </Overtitle>
            <Typography variant="h3" className={classes.titleText}>
              Three modes, <b>countless applications</b>
            </Typography>
            <img className={classes.image} src="images/parallelchain/public-blockchain-ecosystem.png" alt="parallelverse" />
          </FadeIn>
        )}
      />
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="left" in={boxIn} boxRef={boxRef} className={classes.titleContainer}>
            <Grid container className={classes.modeContainer} direction="row-reverse">
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h4"
                  className={`${classes.emphasisText} ${classes.rightText} push-bot2`}
                >
                  Public Mode
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card raised elevation={10} classes={{ root: classes.modeCard }}>
                  <Typography variant="body1" className="push-bot2">
                    Zero performance degradation regardless of the number of nodes, in
                    fact, the more the better.
                  </Typography>
                  <Typography variant="body1" className="push-bot2">
                    Efficient and privacy-protected data validation through a unique
                    Proof-of-Immutability (PoIM) algorithm.
                  </Typography>
                  <Typography variant="body1">
                    Deploy multiple ParallelChains of varying configurations to facilitate
                    cross-platform transactions&mdash;a parallel design that overcomes
                    cross-chain vulnerabilities, such as hacks and the difficulty to keep
                    up with the state of heterogeneous blockchains.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="right" in={boxIn} boxRef={boxRef} className={classes.titleContainer}>
            <Grid container className={classes.modeContainer}>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h4"
                  className={`${classes.emphasisText} push-bot2`}
                >
                  Private Mode (Personal)
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card raised elevation={10} classes={{ root: classes.modeCard }}>
                  <Typography variant="body1">
                    A truly personal, single-user blockchain to ensure your biometrics,
                    crypto assets and transaction records are kept secured and private
                    in your ParallelWallet.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="left" in={boxIn} boxRef={boxRef} className={classes.titleContainer}>
            <Grid container className={classes.modeContainer} direction="row-reverse">
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h4"
                  className={`${classes.emphasisText} ${classes.rightText} push-bot2`}
                >
                  Private Mode (Enterprise)
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Card raised elevation={10} classes={{ root: classes.modeCard }}>
                  <Typography variant="body1" className="push-bot2">
                    Single blockchain for various applications&mdash;ParallelChain® can be
                    deployed in permissioned and permissionless modes to satisfy the
                    varying needs within a business.
                  </Typography>
                  <Typography variant="body1" className="push-bot2">
                    Trustless B2B collaboration where information is effectively shared
                    among participants, while also being protected against data leaks.
                  </Typography>
                  <Typography variant="body1">
                    Seamless migration from other blockchain platforms.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
    </Section>
  );
}
