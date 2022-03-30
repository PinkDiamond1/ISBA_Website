import { useTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from 'react-reveal/Slide';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'block',
    objectFit: 'contain',
    height: '50px',
    marginBottom: `${theme.spacing(2)}px`,
    [theme.breakpoints.up('sm')]: {
      height: '70px',
    },
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
    pointerEvents: 'none',
  },
  coin: {
    width: 70,
    height: 70,
    marginLeft: 8,
    marginRight: 8,
  },
  featureTitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: `${theme.spacing(15)}px`,
  },
  featureOvertitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: `${theme.spacing(1)}px`,
  },
  cardText: {
    flex: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  cardTitle: {
    color: '#fff',
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
  },
  cardBody: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '100',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
  lineSeparator: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: `${theme.spacing(2)}px`,
  },
  lightning: {
    [theme.breakpoints.down('sm')]: {
      height: '60px',
      flex: 1,
    },
  },
  shield: {
    [theme.breakpoints.down('sm')]: {
      height: '60px',
      flex: 1,
    },
  },
  lock: {
    [theme.breakpoints.down('sm')]: {
      height: '60px',
      flex: 1,
    },
  },
}));

export default function ParallelChainFIntroPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const smallOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section
      spacingTop={1}
      spacingBottom={2}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h5" classes={{ root: classes.featureOvertitle }}>
              The ParallelChain Ecosystem
            </Typography>
            <Typography variant="h2" classes={{ root: classes.featureTitle }}>
              A Public + Private Blockchain Ecosystem with Real World Scalability and Compliance.
            </Typography>
            <Grid container spacing={6}>
              <Grid
                item
                xs={12}
                md={4}
              >

                <Slide top>
                  <Grid
                    container
                    style={{
                      display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                    }}
                  >

                    <Grid item>
                      {!smallOrSmaller
                      && (
                      <img
                        src="/images/parallelchain/mainnet/lightning.png"
                        alt=""
                      />
                      )}
                    </Grid>
                    <Grid>

                      <div className={classes.cardTitle}>
                        {smallOrSmaller
                      && (
                      <img
                        src="/images/parallelchain/mainnet/lightning_sm.png"
                        alt=""
                        className={classes.lightning}
                      />
                      )}
                        <Typography variant="h5" className={classes.cardText}>
                          Lightning Fast.
                        </Typography>
                        <div style={{ flex: 2 }} />
                      </div>

                      {!smallOrSmaller && (
                      <div style={{
                        display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                      }}
                      >
                        <img
                          src="/images/parallelchain/mainnet/line1.svg"
                          alt=""
                          className={classes.lineSeparator}
                        />
                      </div>
                      )}

                      <Typography variant="h5" classes={{ root: classes.cardBody }}>
                        ParallelChain is a high performance blockchain with scalability built-in by design, leveraging optimistic rollups to bring users fast transaction times and lower fees.
                      </Typography>
                    </Grid>
                  </Grid>
                </Slide>

              </Grid>
              <Grid item xs={12} md={4}>
                <Grid
                  container
                  style={{
                    display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                  }}
                >
                  <Slide top>
                    <Grid item>
                      {!smallOrSmaller
                      && (
                      <img
                        src="/images/parallelchain/mainnet/shield.png"
                        alt=""
                      />
                      )}
                    </Grid>
                    <Grid item>
                      <div className={classes.cardTitle}>
                        <div style={{ flex: 2 }} />
                        <Typography variant="h5" className={classes.cardText}>
                          High Performance DApps.
                        </Typography>
                        {smallOrSmaller
                      && (
                      <img
                        src="/images/parallelchain/mainnet/shield_sm.png"
                        alt=""
                        className={classes.shield}
                      />
                      )}
                      </div>
                      {!smallOrSmaller && (
                      <div style={{
                        display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                      }}
                      >
                        <img
                          src="/images/parallelchain/mainnet/line1.svg"
                          alt=""
                          className={classes.lineSeparator}
                        />
                      </div>
                      )}
                      <Typography variant="h5" classes={{ root: classes.cardBody }}>
                        ParallelChain Mainnet is open-source. Anyone can join the network and launch decentralized projects written in Go, Rust, WASM (more languages coming).
                      </Typography>
                    </Grid>
                  </Slide>
                </Grid>

              </Grid>
              <Grid item xs={12} md={4}>
                <Slide top>
                  <Grid
                    container
                    style={{
                      display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                    }}
                  >

                    <Grid item>
                      {!smallOrSmaller
                      && (
                      <img
                        src="/images/parallelchain/mainnet/lock.png"
                        alt=""
                      />
                      )}
                    </Grid>
                    <Grid item>
                      <div className={classes.cardTitle}>
                        {smallOrSmaller
                      && (
                      <img
                        src="/images/parallelchain/mainnet/lock_sm.png"
                        alt=""
                        className={classes.lock}
                      />
                      )}
                        <Typography variant="h5" className={classes.cardText}>
                          Delegated Proof-of-Stake.
                        </Typography>
                        <div style={{ flex: 2 }} />
                      </div>
                      {!smallOrSmaller
                      && (
                      <div style={{
                        display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                      }}
                      >
                        <img
                          src="/images/parallelchain/mainnet/line1.svg"
                          alt=""
                          className={classes.lineSeparator}
                        />
                      </div>
                      )}
                      <Typography variant="h5" classes={{ root: classes.cardBody }}>
                        Secured by an accountable, innovative class system of delegated proof-of-stake - ParallelBFT is designed to balance performance and democratic consensus on the network.
                      </Typography>
                    </Grid>
                  </Grid>

                </Slide>
              </Grid>

            </Grid>
          </FadeIn>
        )}
      />
    </Section>
  );
}
