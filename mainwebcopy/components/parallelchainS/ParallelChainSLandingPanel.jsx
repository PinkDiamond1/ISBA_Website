/* eslint-disable max-len */
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NextLink from 'next/link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import CodeIcon from '@material-ui/icons/Code';
import { useBackdrop } from 'use-backdrop';
import YouTube from 'react-youtube';
import { FutureButton, Overtitle } from 'dtl-react-components';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Section from '../Section';

import ParallelChainWebDemoPopup from './ParallelChainWebDemoPopup';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    backgroundImage: 'url(\'/images/parallelchain/landing.svg\')',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.dark,
  },
  breadcrumbs: {
    color: '#0c2454',
    marginBottom: `${theme.spacing(4)}px`,
  },
  breadcrumbLink: {
    color: '#F15E5A',
    cursor: 'pointer',
  },
  emphasisText: {
    color: '#546563',
  },
  subtitleText: {
    color: 'black',
    marginTop: `${theme.spacing(1)}px`,
  },
  subtitleBody: {
    color: 'black',
    marginTop: `${theme.spacing(3)}px`,
  },
  list: {
    marginLeft: `${theme.spacing(4)}px`,
    marginTop: `${theme.spacing(1)}px`,
  },
  listItem: {
    marginTop: `${theme.spacing(2)}px`,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageContainerSmall: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      '& $logoImage': {
        height: '100px',
      },
    },
  },
  logoImage: {
    display: 'block',
    height: '270px',
    pointerEvents: 'none',
  },
  logoImageSmall: {
    display: 'block',
    height: '160px',
    margin: '0 auto',
    marginBottom: `${theme.spacing(5)}px`,
    pointerEvents: 'none',
  },
  btnContainer: {
    marginTop: `${theme.spacing(5)}px`,
  },
  btn: {
    display: 'flex',
    boxShadow: 'none',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #0c2454',
    borderRadius: '16px',
    minWidth: '175px',
    minHeight: '82px',
    padding: '15px 20px',
    backgroundColor: 'none',
    transition: 'all 300ms',
    color: 'black',
    marginRight: `${theme.spacing(1)}px`,
    '&:hover': {
      boxShadow: `0 3px 15px 0 ${theme.palette.primary.light}`,
      border: '1px solid white',
      backgroundColor: 'white',
      color: 'rgba(53,163,220,1)',
    },
    '&:hover h6': {
      color: theme.palette.neutral.white,
    },
  },
  btnLink: {
    fontSize: '0.875rem',
    textAlign: 'center',
    color: 'black',
  },
}));
export default function ParallelChainSLandingPanel() {
  const classes = useStyles();
  const { displayBackdrop } = useBackdrop();
  const theme = useTheme();
  const smallOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Section
      spacingTop={12}
      className={classes.container}
    >
      { smallOrSmaller && (
        <img
          className={classes.logoImageSmall}
          src="/images/parallelchain/ParallelChainS-icon.svg"
          alt="ParallelChain"
        />
      )}
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <Typography variant="h1" classes={{ root: classes.emphasisText }}>
            ParallelChain Enterprise
          </Typography>
          <Typography variant="h3" classes={{ root: classes.subtitleText }}>
            High performance enterprise blockchain solution.
          </Typography>
          <Typography variant="h5" classes={{ root: classes.subtitleBody }}>
            <ul className={classes.list}>
              <li className={classes.listItem}>A lightning-fast distributed ledger that guarantees high performance with no compromises.</li>
              <li className={classes.listItem}>A private blockchain focused on enterprise agility and privacy.</li>
            </ul>
          </Typography>

          <Grid container className={classes.btnContainer} spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <div className={classes.btn}>
                <a
                  className={classes.btnLink}
                  href="https://cms.parallelchain.io/uploads/ADL_Report_2020_3e8a4d0c2d.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="h5">
                    Read ADL's Report
                  </Typography>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className={classes.btn}>
                <a
                  className={classes.btnLink}
                  href="https://cms.parallelchain.io/uploads/Global_Optimizations_for_Parallelism_and_Locality_on_Scalable_Parallel_Machines_543a1db3f2.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="h5">
                    Paper on Parallel Machines
                  </Typography>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className={classes.btn}>
                <a
                  className={classes.btnLink}
                  href="https://cms.parallelchain.io/uploads/IEEE_From_Use_Case_to_Benchmark_Comparing_Consortium_and_Private_Blockchains_31d5ffbfb3.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="h5">
                    Comparing Private Blockchains
                  </Typography>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className={classes.btn}>
                <a
                  className={classes.btnLink}
                  href="https://cms.parallelchain.io/uploads/ABC_Asynchronous_Blockchain_without_Consensus_b2dacf93ad.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="h5">
                    Paper on Asynchronous Blockchain
                  </Typography>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <div className={classes.btn}>
                <a
                  className={classes.btnLink}
                  href="https://cms.parallelchain.io/uploads/A_survey_of_breakthrough_in_blockchain_technology_79d63c6b63.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="h5">
                    Survey of breakthrough in blockchain technology
                  </Typography>
                </a>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5} className={classes.imageContainer}>
          <img
            className={classes.logoImage}
            src="/images/parallelchain/ParallelChainS-icon.svg"
            alt="ParallelChain"
          />
        </Grid>
      </Grid>
    </Section>
  );
}
