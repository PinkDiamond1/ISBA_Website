import { useTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ParallelChainExperienceLogo from './ParallelChainExperienceLogo';
import Section from '../../Section';
import BreadCrumbsLocator from '../../BreadCrumbsLocator';

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
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Section
      className={classes.contentContainer}
      backgroundColor={theme.palette.neutral.white}
      spacingTop={12}
    >
      <BreadCrumbsLocator
        breadCrumbLeftText="Technology"
        breadCrumbRightText="Demo"
        linkForBreadCrumb="/technology"
      />
      <Grid container direction="row-reverse">
        <Grid xs={12} md={4} classes={{ root: classes.logoContainer }}>
          <ParallelChainExperienceLogo />
        </Grid>
        <Grid xs={12} md={8} classes={{ root: classes.titleContainer }}>
          <Typography variant="h1" style={{ color: '#0c2454' }}>
            An exclusive glimpse into your blockchained future
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
