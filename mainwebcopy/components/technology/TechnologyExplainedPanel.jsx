import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  panelContainer: {
    width: '100vh',
    color: 'black',
  },
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
  featureTitle: {
    color: '#003D61',
    marginBottom: `${theme.spacing(1)}px`,
  },
  featureCoinTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '500',
    marginTop: `${theme.spacing(20)}px`,
    marginBottom: `${theme.spacing(4)}px`,
  },
  sectionTitle: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: `${theme.spacing(1)}px`,
  },
  sectionSubTitle: {
    textAlign: 'left',
    color: '#FFFFFF',
    marginBottom: `${theme.spacing(5)}px`,
  },
  cardTitle: {
    color: '#003D61',
    fontWeight: '400',
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(5)}px`,
  },
  featureImg: {
    width: '72px',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
}));

export default function TechnologyExplainedPanel() {
  const classes = useStyles();

  return (
    <Section
      className={classes.panelContainer}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h2" classes={{ root: classes.featureTitle }}>
              An Upgrade from the Legacy
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  ParallelBFT protocol
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  ParallelBFT is HotStuff with two major optimizations — speculative execution and consensus on hashes — as well as a slew of subtle optimizations that are too numerous to enumerate. A sizable body of work has shown that HotStuff and HotStuff-derived algorithms dominate all other BFT consensus algorithms in performance.
                  <br /><br />
                  We have also ideated an execution sharding protocol built on top of basic ParallelBFT that gives us the option to sacrifice some fault tolerance in exchange for extra throughput, providing a potential path for scaling Mainnet in the future if it hits higher-than-expected usage.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Proof-of-Immutability
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  A unique Proof-of-Immutability (PoIM) algorithm.
                  <br /><br />
                  Blockchain immutability alone is not sufficient to establish trust. Trust can only be earned and maintained when immutability is continuously proven. ParallelChain enables participants to repeatedly and randomly verify the immutability of blocks without compromising the privacy of data owners.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  WASM Smart Contracts
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  ParallelChain Mainnet theoretically supports smart
                  contracts written in any language compilable into
                  WebAssembly (WASM), but we are initially focusing our SDK and tooling development efforts
                  on Go and Rust. This enables easy migration of
                  ParallelChain S smart contracts (which are natively Go) into the ParallelChain Mainnet and
                  vice versa.
                  <br /><br />
                  That means it is possible for ParallelChain to be a language agnostic platform, enabling developers to build applications on top of the network without having to pickup an entirely new language.
                </Typography>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
    </Section>
  );
}
