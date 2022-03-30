import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  bgImage: {
    position: 'absolute',
    zIndex: -1000,
    left: 0,
    top: -120,
    maxHeight: '100vh',
    opacity: 0.3,
  },
  container: {
    zIndex: '0',
    overflow: 'hidden',
    overflowY: 'hidden',
  },
  titleText: {
    textAlign: 'center',
    marginBottom: `${theme.spacing(6)}px`,
    borderWidth: 2,
    borderColor: 'white',
  },
  featureTop: {
    textAlign: 'center',
    padding: 20,
    color: '#002D46',
    backgroundColor: '#fff',
    border: 'solid',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
  },
  backgroundBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 350,
    backgroundColor: 'rgba(0, 150, 162, 0.6)',
    backgroundRepeat: 'no-repeat',
    border: 'solid',
    borderColor: '#0096A2',
    borderWidth: 0,
    borderRadius: 15,
  },
  featureBottom: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fff',
    padding: 30,
  },

}));

export default function DTTFeaturesPanel(props) {
  const classes = useStyles();

  return (
    <Section
      spacingTop={2}
      spacingBottom={8}
      subContainerClassName={classes.container}
    >
      <div>
        <Typography
          variant="h4"
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
            color: '#fff',
          }}
        >
          Your ticket to the ParallelChain ecosystem
        </Typography>
      </div>
      <img src="/images/parallelchain/mainnet/mainnetdecor.png" className={classes.bgImage} />

      <Grid container spacing={4} style={{ overflow: 'hidden', position: 'sticky' }}>
        <Grid item xs={12} md={3} classes={{ root: classes.featureContainer }}>
          <div style={{ marginBottom: 40 }}>
            <Typography
              variant="h4"
              className={classes.featureTop}
            >
              PAY
            </Typography>
          </div>
          <div className={classes.backgroundBlock}>
            <Typography
              variant="h4"
              className={classes.featureBottom}
            >
              Use XPLL to pay for transaction fees on ParallelChain.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3} classes={{ root: classes.featureContainer }}>
          <div style={{ marginBottom: 40 }}>
            <Typography
              variant="h4"
              className={classes.featureTop}
            >
              STAKE
            </Typography>
          </div>
          <div className={classes.backgroundBlock}>
            <Typography
              variant="h4"
              className={classes.featureBottom}
            >
              Stake XPLL to run a validator node or delegate to earn block rewards.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3} classes={{ root: classes.featureContainer }}>
          <div style={{ marginBottom: 40 }}>
            <Typography
              variant="h4"
              className={classes.featureTop}
            >
              VOTE
            </Typography>
          </div>
          <div className={classes.backgroundBlock}>
            <Typography
              variant="h4"
              className={classes.featureBottom}
            >
              Help govern the network and vote on proposals that shape the future of ParallelChain.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3} classes={{ root: classes.featureContainer }}>
          <div style={{ marginBottom: 40 }}>
            <Typography
              variant="h4"
              className={classes.featureTop}
            >
              REDEEM
            </Typography>
          </div>
          <div className={classes.backgroundBlock}>
            <Typography
              variant="h4"
              className={classes.featureBottom}
            >
              Burn XPLL in exchange for ParallelChain® software license.
            </Typography>
          </div>
        </Grid>
      </Grid>

      <a
        href="mailto:xpll@parallelchain.io"
        target="_blank"
        style={{
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 40,
        }}
        rel="noreferrer"
      >
        <Button
          variant="outlined"
          style={{
            padding: 30, color: 'white', borderColor: '#fff', borderWidth: 2, borderRadius: 15,
          }}
        >
          <Typography variant="h4">
            Get XPLL
          </Typography>
        </Button>
      </a>

    </Section>
  );
}
