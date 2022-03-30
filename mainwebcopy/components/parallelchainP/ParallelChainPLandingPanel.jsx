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
import Section from '../Section';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import ParallelChainWebDemoPopup from './ParallelChainWebDemoPopup';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '60vh',
    backgroundImage: 'url(\'/images/parallelchain/landing.jpg\')',
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
    cursor: 'pointer',
  },
  emphasisText: {
    fontWeight: 500,
  },
  subtitleText: {
    fontWeight: '100',
    marginTop: `${theme.spacing(1)}px`,
  },
  subtitleBody: {
    fontWeight: '100',
    marginTop: `${theme.spacing(3)}px`,
  },
  list: {
    marginLeft: `${theme.spacing(4)}px`,
    marginTop: `${theme.spacing(1)}px`,
  },
  listItem: {
    marginTop: `${theme.spacing(2)}px`
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
}));
export default function ParallelChainPLandingPanel() {
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
          src="/images/parallelchain/parallelchain-logo.svg"
          alt="ParallelChain"
        />
      )}
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
        <Breadcrumbs aria-label="breadcrumb" classes={{ root: classes.breadcrumbs }}>
          <NextLink href="/technology">
            <Link to="/technology" color="primary" classes={{ root: classes.breadcrumbLink }}>
              ParallelChain
            </Link>
          </NextLink>
          <Typography style={{color: '#0c2454'}}>
            Personal
          </Typography>
        </Breadcrumbs>
          <Typography variant="h2" classes={{ root: classes.emphasisText }}>
            ParallelChain P
          </Typography>
          <Typography variant="h5" classes={{ root: classes.subtitleText }}>
            Your personal blockchain to keep your data safe.
          </Typography>
          <Typography variant="subtitle1" classes={{ root: classes.subtitleBody }}>
            <ul className={classes.list}>
              <li className={classes.listItem}>The technology behind ParalletWallet, designed to keep your biometrics and personal data safe.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} className={classes.imageContainer}>
          <img
            className={classes.logoImage}
            src="/images/parallelchain/parallelchain-logo.svg"
            alt="ParallelChain"
          />
        </Grid>
      </Grid>
    </Section>
  );
}
