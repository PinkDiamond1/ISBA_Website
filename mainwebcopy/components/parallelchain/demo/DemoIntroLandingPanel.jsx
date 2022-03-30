import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NextLink from 'next/link';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ParallelChainExperienceLogo from './ParallelChainExperienceLogo';
import Section from '../../Section';

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    color: '#0c2454',
    marginBottom: `${theme.spacing(4)}px`,
  },
  breadcrumbLink: {
    color: '#f15e5a',
    cursor: 'pointer',
  },
  contentContainer: {
    backgroundImage: 'url(/images/parallelchain/landing.svg)',
    backgroundSize: 'cover',
    color: theme.palette.neutral.white,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export default function DemoIntroLandingPanel() {
  const classes = useStyles();

  return (
    <Section
      className={classes.contentContainer}
      spacingTop={12}
    >
      <Breadcrumbs aria-label="breadcrumb" classes={{ root: classes.breadcrumbs }}>
        <NextLink href="/parallelchain">
          <Link to="/parallelchain" color="primary" classes={{ root: classes.breadcrumbLink }}>
            ParallelChain®
          </Link>
        </NextLink>
        <Typography style={{color: '#0c2454'}}>
          Demo
        </Typography>

      </Breadcrumbs>
      <Grid container direction="row-reverse">
        <Grid xs={12} md={4} classes={{ root: classes.logoContainer }}>
          <ParallelChainExperienceLogo />
        </Grid>
        <Grid xs={12} md={8} classes={{ root: classes.titleContainer }}>
          <Typography variant="h3" style={{color: '#0c2454', fontWeight: '100'}}>
            An exclusive glimpse into your <b>blockchained</b> future
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
