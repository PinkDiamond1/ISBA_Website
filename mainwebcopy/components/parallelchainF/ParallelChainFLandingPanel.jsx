/* eslint-disable max-len */
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Section from '../Section';
import ParticlesCanvas from './Particles';
import ParallelChainFMainnetReadiness from './ParallelChainFMainnetReadiness';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    color: theme.palette.primary.dark,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
  },
  emphasisText: {
    color: '#fff',
    fontWeight: 500,
    marginBottom: 30,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  subtitleText: {
    color: '#fff',
    fontWeight: '100',
    marginTop: `${theme.spacing(1)}px`,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  btnContainer: {
    marginTop: `${theme.spacing(5)}px`,
  },
  accordionSummaryContainer: {
    color: '#fff',
    textAlign: 'left',
    display: 'flex',
    borderColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
    justifyContent: 'center',
    flex: 1,
    padding: `${theme.spacing(2)}px`,
    borderRadius: 15,
  },
  accordionSummary: {
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  accordionItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    color: 'white',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    margin: `${theme.spacing(2)}px 0px`,
  },
  accordionItem: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    padding: `${theme.spacing(2)}px`,
    color: 'white',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    textTransform: 'none',

  },
  linkButton: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    color: 'white',
  },
  particles: {
    position: 'absolute',
    top: 0,
    left: 0,
    maxHeight: '100%',
    width: '100%',
    zIndex: 0,
  },
}));
export default function ParallelChainFLandingPanel() {
  const classes = useStyles();
  return (
    <Section
      spacingTop={12}
      className={classes.container}
    >
      <div className={classes.particles}>
        <ParticlesCanvas />
      </div>
      <Grid container alignItems="flex-start" justifyContent="space-between">
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.itemsContainer}>
          <Typography variant="h1" classes={{ root: classes.emphasisText }}>
            ParallelChain Mainnet
          </Typography>
          <Typography variant="h3" classes={{ root: classes.subtitleText }}>
            Breakthrough layer-1 smart contract platform with a unique delegated-proof-of-stake system designed to power an accountable, democratic, ever-growing blockchain ecosystem - ParallelChain is infinity.
          </Typography>

          <Grid container direction="column" spacing={4} className={classes.btnContainer}>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
              <a
                href="/parallelchain/mainnet/get"
                className={classes.linkButton}
              >
                <Button
                  variant="outlined"
                  style={{
                    display: 'flex', justifyContent: 'center', flex: 1, padding: 20, color: 'white', borderColor: '#fff', borderWidth: 2, borderRadius: 15,
                  }}
                >
                  <Typography variant="h5">
                    Register for Node Round
                  </Typography>
                </Button>
              </a>

            </Grid>

            <Grid
              item
              direction="column"
              xs={12}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Accordion style={{
                    backgroundColor: 'transparent', color: '#fff', display: 'flex', flexDirection: 'column', flex: 1, boxShadow: 'none',
                  }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                      aria-controls="panel1a-content"
                      className={classes.accordionSummaryContainer}
                    >

                      <Typography variant="h6" className={classes.accordionSummary}>Learn
                      </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid
                        container
                        direction="column"
                        style={{
                          display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                        }}
                      >
                        <Grid item xs={12} className={classes.accordionItemContainer}>
                          <Button
                            variant="outlined"
                            className={classes.accordionItem}
                            href="/parallelchain/mainnet/papers/ecosystem-litepaper"
                          >
                            <Typography variant="h5">
                              Ecosystem Litepaper
                            </Typography>
                          </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.accordionItemContainer}>
                          <Button
                            variant="outlined"
                            className={classes.accordionItem}
                            href="/parallelchain/mainnet/papers/tokenomics-whitepaper"
                          >
                            <Typography variant="h5">
                              Tokenomics Whitepaper
                            </Typography>
                          </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.accordionItemContainer}>
                          <Button
                            variant="outlined"
                            className={classes.accordionItem}
                            href="/parallelchain/mainnet/papers/mainnet-whitepaper"
                          >
                            <Typography variant="h5">
                              Mainnet Whitepaper
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Accordion style={{
                    backgroundColor: 'transparent', color: '#fff', display: 'flex', flexDirection: 'column', flex: 1, boxShadow: 'none',
                  }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                      aria-controls="panel1a-content"
                      className={classes.accordionSummaryContainer}
                    >
                      <Typography variant="h6" className={classes.accordionSummary}>Build
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid
                        container
                        direction="column"
                        spacing={0}
                        style={{
                          display: 'flex', flex: 1, justifyContent: 'center', alignSelf: 'center',
                        }}
                      >
                        <Grid item xs={12} className={classes.accordionItemContainer}>
                          <Button
                            variant="disabled"
                            className={classes.accordionItem}
                            style={{ backgroundColor: '#A4A4A4', color: 'white' }}
                          >
                            <Typography variant="h5">
                              Coming Soon
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Grid>

              </Grid>

            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <ParallelChainFMainnetReadiness />
        </Grid>
      </Grid>
    </Section>
  );
}
