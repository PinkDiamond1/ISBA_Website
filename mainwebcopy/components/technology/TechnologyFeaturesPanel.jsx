import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import {
  mdiCellphone, mdiEarth, mdiOfficeBuilding,
} from '@mdi/js';
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
  banner: {
    display: 'block',
    width: '100%',
    marginBottom: 50,
    backgroundColor: 'blue',
  },
  coin: {
    width: 70,
    height: 70,
    marginLeft: 8,
    marginRight: 8,
  },
  coinsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  videoButtonContainer: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    cursor: 'auto',
    color: theme.palette.primary.dark,
  },
  videoButtonContainer2: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    cursor: 'disabled',
    border: '1px solid #f15e5a',
    borderRadius: '50px',
    color: '#0c2454',
    boxShadow: 'none',
    padding: '10px 50px',
  },
  videoButton: {
    border: 2,
  },
  videoTitle: {
    textAlign: 'left',
  },
  iconButton: {
    width: '64px',
    height: '64px',
    marginRight: `${theme.spacing(2)}px`,
  },
  featureTitle: {
    color: '#003D61',
    marginBottom: `${theme.spacing(1)}px`,
  },
  featureSubTitle: {
    color: '#678783',
    marginBottom: `${theme.spacing(8)}px`,
    fontWeight: '400',
  },
  featureCoinTitle: {
    textAlign: 'center',
    color: '#0c2454',
    fontWeight: '500',
    marginTop: `${theme.spacing(20)}px`,
    marginBottom: `${theme.spacing(4)}px`,
  },
  sectionTitle: {
    textAlign: 'left',
    color: '#0c2454',
    fontWeight: '500',
    marginBottom: `${theme.spacing(1)}px`,
  },
  sectionSubTitle: {
    textAlign: 'left',
    color: '#0c2454',
    marginBottom: `${theme.spacing(5)}px`,
  },
  cardTitle: {
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
  },
  cardsubTitle: {
    fontWeight: '400',
    marginBottom: `${theme.spacing(2)}px`,
  },
  cardBody: {
    fontWeight: '400',
    color: 'black',
  },
  featureImg: {
    width: '72px',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
}));

export default function TechnologyFeaturesPanel() {
  const classes = useStyles();

  return (
    <Section>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h2" classes={{ root: classes.featureTitle }}>
              ParallelChains in Parallel
            </Typography>
            <Typography variant="h3" classes={{ root: classes.featureSubTitle }}>
              Deploy multiple ParallelChains of varying
              configurations to facilitate cross-platform transactions.
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiEarth} size={3} color="#027D6F" />
                </div>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Public
                </Typography>
                <Typography variant="h3" classes={{ root: classes.cardsubTitle }}>
                  ParallelChain Mainnet <br />
                  - Full
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  A public proof-of-stake blockchain network designed
                  to balance decentralization, fast transactions and low fees.
                  <br /><br />
                  Protected by the ParallelBFT consensus protocol, which
                  adopts a sophisticated class-based node system to ensure
                  fast and accountable consensus.
                  <br /><br />
                  This network is open-source.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiOfficeBuilding} size={3} color="#027D6F" />
                </div>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Permissioned
                </Typography>
                <Typography variant="h3" classes={{ root: classes.cardsubTitle }}>
                  ParallelChain Private <br />
                  - Sharded
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  A high performance private blockchain platform for building
                  controlled-access applications such as enterprise software and networks.
                  <br /><br />
                  Powering layer-2 applications with patent-pending features designed to
                  satisfy data privacy and compliance requirements. Hyperledger-powered
                  apps can also be easily migrated.
                  <br /><br />
                  Usage of the platform is licensed.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={{ root: classes.featureImgContainer }}>
                  <Icon path={mdiCellphone} size={3} color="#027D6F" />
                </div>
                <Typography variant="h3" classes={{ root: classes.cardTitle }}>
                  Personal
                </Typography>
                <Typography variant="h3" classes={{ root: classes.cardsubTitle }}>
                  ParallelWallet<br />
                  - Individual
                </Typography>
                <Typography variant="h5" classes={{ root: classes.cardBody }}>
                  A truly personal, single-user blockchain to ensure your biometrics,
                  crypto assets and transaction records are kept secured and private
                  in your ParallelWallet.
                </Typography>
              </Grid>
            </Grid>
          </FadeIn>
        )}
      />
    </Section>
  );
}
