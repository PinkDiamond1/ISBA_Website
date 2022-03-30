import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Section from '../Section';
import BreadCrumbsLocator from '../BreadCrumbsLocator';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    marginBottom: `${theme.spacing(8)}px`,
    textAlign: 'left',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  flexContainer: {
    display: 'flex',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: `${theme.palette.neutral.white}`,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: `${theme.spacing(4)}px ${theme.spacing(4)}px`,

  },
  logo: {
    height: '50px',
    marginRight: `${theme.spacing(3)}px`,
    pointerEvents: 'none',
  },
  cardTitleText: {
    color: `${theme.palette.neutral.black}`,
  },
  button: {
    boxShadow: 'none',
    borderRadius: '100px',
    minWidth: '175px',
    marginTop: `${theme.spacing(3)}px`,
    backgroundColor: 'rgba(187,222,251,1)',
    transition: 'all 300ms',
    color: 'rgba(53,163,220,1)',
    '&:hover': {
      boxShadow: `0 3px 15px 0 ${theme.palette.primary.mainFaded}`,
      backgroundColor: 'rgba(53,163,220,1)',
    },
    '&:hover h6': {
      color: theme.palette.neutral.white,
    },
  },
  text: {
    margin: `0 ${theme.spacing(2)}px`,
  },
  newsroomText: {
    marginBottom: `${theme.spacing(3)}px`,
    color: '#000',
    fontWeight: '300',
  },
}));

export default function ReadPanel() {
  const classes = useStyles();

  return (
    <Section spacingTop={10}>
      <BreadCrumbsLocator
        breadCrumbLeftText="Technology"
        breadCrumbRightText="REPORTS & WHITEPAPERS"
        linkForBreadCrumb="/technology"
      />
      <div className={classes.titleContainer}>
        <Typography variant="h2" className={classes.titleText}>
          Read papers and reports about our products
        </Typography>
      </div>
      <Grid container spacing={5} className={classes.cardContainer}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.card}>
            <div className={classes.flexContainer}>
              <img
                src="/images/paper-icon.svg"
                alt="asynchronous-blockchain"
                className={classes.logo}
              />
              <Typography variant="subtitle1" className={classes.cardTitleText}>
                ParallelChain Mainnet Technical Whitepaper
              </Typography>
            </div>
            <div>
              <Button
                classes={{ root: classes.button }}
                variant="contained"
                href="https://cms.parallelchain.io/uploads/Parallel_Chain_Mainnet_Technical_Whitepaper_c6e01bb65d.pdf"
                target="_blank"
              >
                <Typography variant="subtitle1" classes={{ root: classes.text }}>
                  Read More
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.card}>
            <div className={classes.flexContainer}>
              <img
                src="/images/paper-icon.svg"
                alt="asynchronous-blockchain"
                className={classes.logo}
              />
              <Typography variant="subtitle1" className={classes.cardTitleText}>
                How Blockchain-based Multi-biometrics Revolutionizes KYC
                for Cryptocurrency and FinTech – and what this means for
                private traders and exchanges
              </Typography>
            </div>
            <div>
              <Button
                classes={{ root: classes.button }}
                variant="contained"
                href="https://cms.parallelchain.io/uploads/How_Blockchain_based_Multi_biometrics_Revolutionizes_KYC_for_Cryptocurrency_and_Fin_Tech_and_what_this_means_for_private_traders_and_exchanges_32d7ebf389.pdf"
                target="_blank"
              >
                <Typography variant="subtitle1" classes={{ root: classes.text }}>
                  Read More
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.card}>
            <div className={classes.flexContainer}>
              <img
                src="/images/paper-icon.svg"
                alt="asynchronous-blockchain"
                className={classes.logo}
              />
              <Typography variant="subtitle1" className={classes.cardTitleText}>
                ParallelChain Ecosystem Litepaper
              </Typography>
            </div>
            <div>
              <Button
                classes={{ root: classes.button }}
                variant="contained"
                href="https://www.parallelchain.io/parallelchain/mainnet/papers/ecosystem-litepaper"
                target="_blank"
              >
                <Typography variant="subtitle1" classes={{ root: classes.text }}>
                  Read More
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.card}>
            <div className={classes.flexContainer}>
              <img
                src="/images/paper-icon.svg"
                alt="global optimizations"
                className={classes.logo}
              />
              <Typography variant="subtitle1" className={classes.cardTitleText}>
                Global Optimizations for Parallelism and Locality
                on Scalable Parallel Machines
              </Typography>
            </div>
            <div>
              <Button
                classes={{ root: classes.button }}
                variant="contained"
                href="https://cms.parallelchain.io/uploads/Global_Optimizations_for_Parallelism_and_Locality_on_Scalable_Parallel_Machines_543a1db3f2.pdf"
                target="_blank"
              >
                <Typography variant="subtitle1" classes={{ root: classes.text }}>
                  Read More
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.card}>
            <div className={classes.flexContainer}>
              <img
                src="/images/paper-icon.svg"
                alt="asynchronous-blockchain"
                className={classes.logo}
              />
              <Typography variant="subtitle1" className={classes.cardTitleText}>
                ABC: Asynchronous Blockchain without Consensus
              </Typography>
            </div>
            <div>
              <Button
                classes={{ root: classes.button }}
                variant="contained"
                href="https://cms.parallelchain.io/uploads/ABC_Asynchronous_Blockchain_without_Consensus_b2dacf93ad.pdf"
                target="_blank"
              >
                <Typography variant="subtitle1" classes={{ root: classes.text }}>
                  Read More
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.card}>
            <div className={classes.flexContainer}>
              <img
                src="/images/paper-icon.svg"
                alt="adl-report"
                className={classes.logo}
              />
              <Typography variant="subtitle1" className={classes.cardTitleText}>
                Arthur D. Little&apos;s Report on ParallelChain®
              </Typography>
            </div>
            <div>
              <Button
                classes={{ root: classes.button }}
                variant="contained"
                href="https://cms.parallelchain.io/uploads/ADL_Report_2020_3e8a4d0c2d.pdf"
                target="_blank"
              >
                <Typography variant="subtitle1" classes={{ root: classes.text }}>
                  Read More
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.card}>
            <div className={classes.flexContainer}>
              <img
                src="/images/paper-icon.svg"
                alt="asynchronous-blockchain"
                className={classes.logo}
              />
              <Typography variant="subtitle1" className={classes.cardTitleText}>
                A Survey of Breakthrough in Blockchain Technology: Adoptions, Applications, Challenges and Future Research
              </Typography>
            </div>
            <div>
              <Button
                classes={{ root: classes.button }}
                variant="contained"
                href="https://cms.parallelchain.io/uploads/A_survey_of_breakthrough_in_blockchain_technology_79d63c6b63.pdf"
                target="_blank"
              >
                <Typography variant="subtitle1" classes={{ root: classes.text }}>
                  Read More
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.card}>
            <div className={classes.flexContainer}>
              <img
                src="/images/paper-icon.svg"
                alt="asynchronous-blockchain"
                className={classes.logo}
              />
              <Typography variant="subtitle1" className={classes.cardTitleText}>
                From Use Case to Benchmark: Comparing Consortium and Private Blockchains
              </Typography>
            </div>
            <div>
              <Button
                classes={{ root: classes.button }}
                variant="contained"
                href="https://cms.parallelchain.io/uploads/IEEE_From_Use_Case_to_Benchmark_Comparing_Consortium_and_Private_Blockchains_31d5ffbfb3.pdf"
                target="_blank"
              >
                <Typography variant="subtitle1" classes={{ root: classes.text }}>
                  Read More
                </Typography>
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
}
