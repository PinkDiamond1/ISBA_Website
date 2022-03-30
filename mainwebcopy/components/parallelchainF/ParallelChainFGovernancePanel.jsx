import { useTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: `${theme.spacing(8)}px`,
  },
  featureSubTitle: {
    color: '#B2FAFF',
    fontWeight: '100',
    textAlign: 'center',
    marginBottom: `${theme.spacing(6)}px`,
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
    color: '#94EECB',
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    textAlign: 'center',
  },
  cardTitleWhite: {
    color: '#fff',
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    textAlign: 'center',
  },
  cardBody: {
    color: '#fff',
    fontWeight: '100',
  },
  featureImg: {
    width: '72px',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
  circle: {
    position: 'absolute',
    top: -200,
    left: 0,
    [theme.breakpoints.down('lg')]: {
      top: 0,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
  lineSeparatorSmall: {
    borderBottom: '6px solid',
    borderImage: 'linear-gradient(to left, rgba(45,143,156,1) 0%, rgba(255,255,255,0) 100%) 1',
    flex: 1,
  },

}));

export default function ParallelChainFGovernancePanel() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section
      spacingTop={2}
      spacingBottom={12}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h6" classes={{ root: classes.featureSubTitle }}>
              On-Chain Governance and Consensus
            </Typography>
            <Typography variant="h4" classes={{ root: classes.featureTitle }}>
              Node operation on ParallelChain.
            </Typography>
            {!sm
              ? (
                <Grid container spacing={6}>
                  <Grid item xs={12} md={3} className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ marginBottom: 8 }}
                      >
                        <br /><br />
                      </Grid>
                      <Grid item xs={12} md={4} className={classes.gridItem}>
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                            Reward&nbsp;Cap
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className={classes.gridItem}>
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                            KYC
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid item xs={12} md={3} className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        className={classes.gridItem}
                      >
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                            Governing
                          </Typography>
                          <div style={{
                            display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                          }}
                          >
                            <img
                              src="/images/parallelchain/mainnet/line2.png"
                              alt=""
                              className={classes.lineSeparator}
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className={classes.gridItem}>
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                            High
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className={classes.gridItem}>
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                            Required
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid item xs={12} md={3} className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        className={classes.gridItem}
                      >
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                            Alpha
                          </Typography>
                          <div style={{
                            display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                          }}
                          >
                            <img
                              src="/images/parallelchain/mainnet/line2.png"
                              alt=""
                              className={classes.lineSeparator}
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className={classes.gridItem}>
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                            Mid
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className={classes.gridItem}>
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                            Required
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3} className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        className={classes.gridItem}
                      >
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                            Beta
                          </Typography>
                          <div style={{
                            display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                          }}
                          >
                            <img
                              src="/images/parallelchain/mainnet/line2.png"
                              alt=""
                              className={classes.lineSeparator}
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className={classes.gridItem}>
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                            Low
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className={classes.gridItem}>
                        <div className={classes.gridItem}>
                          <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                            Not&nbsp;Required
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>

                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={6}>
                  <Grid container item xs={12} className={classes.gridItem}>
                    <Grid item xs={4}>
                      <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                        Reward&nbsp;Cap
                      </Typography>
                    </Grid>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                      <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                        KYC
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.lineSeparatorSmall} />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={3} className={classes.gridItem}>
                    <Grid container direction="row">
                      <Grid item xs={4}>
                        <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                          High
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                      >
                        <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                          Governing
                        </Typography>
                      </Grid>

                      <Grid item xs={4} md={4}>
                        <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                          Required
                        </Typography>
                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid item xs={12} md={3} className={classes.gridItem}>
                    <Grid container direction="row">
                      <Grid item xs={4}>
                        <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                          Mid
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                      >
                        <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                          Alpha
                        </Typography>
                      </Grid>

                      <Grid item xs={4} md={4}>
                        <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                          Required
                        </Typography>
                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid item xs={12} md={3} className={classes.gridItem}>
                    <Grid container direction="row">
                      <Grid item xs={4}>
                        <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                          Low
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                      >
                        <Typography variant="h5" classes={{ root: classes.cardTitle }}>
                          Beta
                        </Typography>
                      </Grid>

                      <Grid item xs={4} md={4}>
                        <Typography variant="h5" classes={{ root: classes.cardTitleWhite }}>
                          Not Required
                        </Typography>
                      </Grid>
                    </Grid>

                  </Grid>
                </Grid>
              )}
          </FadeIn>
        )}

      />
    </Section>
  );
}
