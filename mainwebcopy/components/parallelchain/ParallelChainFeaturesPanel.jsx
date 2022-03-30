import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.dark,
  },
  titleContainer: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  emphasisText: {
    fontWeight: 500,
  },
  bodyText: {
    marginBottom: `${theme.spacing(4)}px`,
  },
  divider: {
    margin: `${theme.spacing(4)}px 0`,
  },
  themeIcon: {
    height: '60px',
    [theme.breakpoints.up('lg')]: {
      height: '100px',
      marginBottom: `${theme.spacing(2)}px`,
    },
    pointerEvents: 'none',
  },
  themesContainer: {
    display: 'flex',
    width: '100%',
    overflowX: 'scroll',
    alignItems: 'stretch',
    paddingBottom: `${theme.spacing(1)}px`,
    [theme.breakpoints.up('lg')]: {
      overflowX: 'initial',
    },
  },
  themeButton: {
    marginRight: `${theme.spacing(3)}px`,
    whiteSpace: 'initial',
    opacity: 0.4,
    cursor: 'pointer',
    border: `1px solid ${theme.palette.products.parallelChain}`,
    borderRadius: '8px',
    padding: `${theme.spacing(2)}px`,
    flexBasis: '300px',
    flexShrink: 0,
    [theme.breakpoints.up('lg')]: {
      width: 'auto',
      flexBasis: 0,
      flexGrow: 1,
    },
  },
  highlighted: {
    opacity: 1,
    cursor: 'default',
  },
  hidden: {
    display: 'none',
  },
}));

export default function ParallelChainFeaturesPanel() {
  const [persistent, setPersistent] = useState(false);
  const [position, setPosition] = useState(0);

  const classes = useStyles();

  return (
    <Section
      subContainerClassName={classes.container}
    >
      <div className={classes.titleContainer}>
        <Typography variant="h3">
          <b>Ground-breaking</b> features
        </Typography>
      </div>
      <Typography variant="body1" classes={{ root: classes.bodyText }}>
        Scalability, security and decentralization. Because of their technical and infrastructural
        limitations, blockchain platforms have had to compromise on at
        least one of these facets to satisfy the rest; this is known as the Blockchain Trilemma.

        ParallelChain®&apos;s patent-pending technology changes all that, making it
        the first truly &apos;business-native&apos; blockchain, ready to power
        today&apos;s real-world applications and scalable to transform enterprises' digital transformation initiatives.
      </Typography>
      <div className={classes.themesContainer}>
        <div
          role="button"
          onMouseEnter={() => {
            if (!persistent) {
              setPosition(0);
            }
          }}
          onMouseLeave={() => {
            if (!persistent) {
              setPosition(0);
            }
          }}
          onClick={() => {
            setPosition(0);
            setPersistent(true);
          }}
          className={`${classes.themeButton} ${position === 0 ? classes.highlighted : ''}`}
          tabIndex={0}
        >
          <img src="/images/parallelchain/hybrid.svg" alt="Hybrid" className={classes.themeIcon} />
          <Typography variant="h5" classes={{ root: classes.themeText }}>
            Proof-of-Immutability
          </Typography>
          <Typography variant="body2">
            • No consensus needed
            <br />
            • Guarantees no forking or mining
          </Typography>
        </div>
        <div
          role="button"
          onMouseEnter={() => {
            if (!persistent) {
              setPosition(1);
            }
          }}
          onMouseLeave={() => {
            if (!persistent) {
              setPosition(0);
            }
          }}
          onClick={() => {
            setPosition(1);
            setPersistent(true);
          }}
          className={`${classes.themeButton} ${position === 1 ? classes.highlighted : ''}`}
          tabIndex={0}
        >
          <img src="/images/parallelchain/performant.svg" alt="Performant" className={classes.themeIcon} />
          <Typography variant="h5" classes={{ root: classes.themeText }}>
            High-performing
          </Typography>
          <Typography variant="body2">
            • Unlimited scalability
            <br />
            • Record-breaking 100,000 transactions per second
            <br />
            • Real-time latency
          </Typography>
        </div>
        <div
          role="button"
          onMouseEnter={() => {
            if (!persistent) {
              setPosition(2);
            }
          }}
          onMouseLeave={() => {
            if (!persistent) {
              setPosition(0);
            }
          }}
          onClick={() => {
            setPosition(2);
            setPersistent(true);
          }}
          className={`${classes.themeButton} ${position === 2 ? classes.highlighted : ''}`}
          tabIndex={0}
        >
          <img src="/images/parallelchain/immutability.svg" alt="Provable Immutability" className={classes.themeIcon} />
          <Typography variant="h5" classes={{ root: classes.themeText }}>
            Security
          </Typography>
          <Typography variant="body2">
            • No duplicate entry
            <br />
            • No data leakage
          </Typography>
        </div>
        <div
          role="button"
          onMouseEnter={() => {
            if (!persistent) {
              setPosition(3);
            }
          }}
          onMouseLeave={() => {
            if (!persistent) {
              setPosition(0);
            }
          }}
          onClick={() => {
            setPosition(3);
            setPersistent(true);
          }}
          className={`${classes.themeButton} ${position === 3 ? classes.highlighted : ''}`}
          tabIndex={0}
        >
          <img src="/images/parallelchain/interoperable.svg" alt="Interoperable" className={classes.themeIcon} />
          <Typography variant="h5" classes={{ root: classes.themeText }}>
            Migration
          </Typography>
          <Typography variant="body2">
            Seamless migration from Ethereum and Hyperledger applications
          </Typography>
        </div>
        <div
          role="button"
          onMouseEnter={() => {
            if (!persistent) {
              setPosition(4);
            }
          }}
          onMouseLeave={() => {
            if (!persistent) {
              setPosition(0);
            }
          }}
          onClick={() => {
            setPosition(4);
            setPersistent(true);
          }}
          className={`${classes.themeButton} ${position === 4 ? classes.highlighted : ''}`}
          tabIndex={0}
        >
          <img src="/images/parallelchain/privacy-compliant.svg" alt="Privacy compliant" className={classes.themeIcon} />
          <Typography variant="h5" classes={{ root: classes.themeText }}>
            Privacy
          </Typography>
          <Typography variant="body2">
            • Facilitates GDPR and international data protection compliance
          </Typography>
        </div>
      </div>
      <Divider classes={{ root: classes.divider }} />
      <Grid container spacing={3} classes={{ root: (position !== 0) ? classes.hidden : undefined }}>
        <Grid item xs={6}>
          <Typography variant="body2">
            Every blockchain claims to be immutable, but how true is this?
            When forked chains can be deleted and blocks can be altered or removed as a result of collusions
            among a majority of endorsed nodes, such claim becomes questionable.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            Blockchain immutability alone is not sufficient to establish trust. Trust can only be earned and maintained when immutability is continuously proven. ParallelChain™ enables participants to repeatedly and randomly verify the immutability of blocks without compromising the privacy of data owners.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} classes={{ root: (position !== 1) ? classes.hidden : undefined }}>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1">
            Unlimited scalability
          </Typography>
          <Typography variant="body2">
            Supports an unlimited number of endorsed
            parties with zero speed degradation.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1">
            Industry-leading throughput
          </Typography>
          <Typography variant="body2">
            Over 100,000 transactions per second (TPS) for one ParallelChain instance.
            Scales to n * 100,000 TPS for n ParallelChains.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1">
            Real-time updates
          </Typography>
          <Typography variant="body2">
            Ultra-low latency of ≤ 0.01s, allowing for immediate confirmation of updates.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} classes={{ root: (position !== 2) ? classes.hidden : undefined }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            Duplicate entry prevention
          </Typography>
          <Typography variant="body2">
            Duplicate entry of data is disallowed by design. Problems related to data duplication,
            such as double-spending and double-counting, are automatically solved.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} classes={{ root: (position !== 3) ? classes.hidden : undefined }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            Ethereum
          </Typography>
          <Typography variant="body2">
            The world&apos;s second-largest cryptocurrency platform by market capitalization, and the platform which most decentralized applications are built on.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">
            Hyperledger
          </Typography>
          <Typography variant="body2">
            A permissioned blockchain infrastructure developed by the Linux Foundation, and
            contributed by IBM and Digital Asset.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} classes={{ root: (position !== 4) ? classes.hidden : undefined }}>
        <Grid item xs={6} sm={4}>
          <Typography variant="subtitle1">
            Ability to forget
          </Typography>
          <Typography variant="body2">
            Data persisted on ParallelChain® can be deleted, allowing for the removal
            of time-sensitive data or unlawful content.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="subtitle1">
            Tamper-proof
          </Typography>
          <Typography variant="body2">
            Individual endorsers cannot alter persisted records without notifying
            all parties, eliminating the possibility of data tampering by collusion.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="subtitle1">
            Data integrity
          </Typography>
          <Typography variant="body2">
            Third parties can mathematically verify the integrity of the blockchain
            without reading the entire, potentially sensitive, data.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
