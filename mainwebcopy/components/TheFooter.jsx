import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FooterItem from './FooterItem';
import FooterContactsPanel from './FooterContactsPanel';
import Section from './Section';
import sections from '../routes';
import FooterItemContact from './FooterItemContact';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#546563',
    color: theme.palette.neutral.white,
    textDecoration: 'none',
  },
  subContainer: {
    width: '100vw',
  },
  logo: {
    width: '200px',
    // margin: `0 0 ${theme.spacing(4)}px 0`,
    // [theme.breakpoints.up('lg')]: {
    //   margin: `0 ${theme.spacing(5)}px 0 ${theme.spacing(2)}px`,
    // },
    pointerEvents: 'none',
  },
  sectionContainer: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  subSectionLabel: {
    color: theme.palette.neutral.white,
    fontFamily: theme.fonts.poppins,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    marginBottom: `${theme.spacing(1)}px`,
    marginLeft: `${theme.spacing(2)}px`,
    '&:hover': {
      textShadow: `0 0 16px ${theme.palette.primary.darkWhite}`,
      textDecoration: 'none',
    },
  },
  divider: {
    backgroundColor: theme.palette.neutral.white,
    marginBottom: `${theme.spacing(2)}px`,
  },

}));

export default function TheFooter() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={1}
      spacingBottom={1}
      className={classes.background}
      subContainerClassName={classes.subContainer}
    >
      <nav className={classes.container}>
        <img src="/images/parallelchain-logo-block-white.svg" alt="DTL logo" className={classes.logo} />
        <Grid container spacing={6} justifyContent="space-between">

          <Grid item xs={6} md={4} lg={2} classes={{ root: classes.sectionContainer }}>
            <FooterItem
              label={sections.home.label}
              linkTo={sections.home.linkTo}
              sub={sections.home.sub}
            />
            <FooterItem
              label={sections.others.label}
              linkTo={sections.others.linkTo}
              sub={sections.others.sub}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} classes={{ root: classes.sectionContainer }}>
            <FooterItem
              label={sections.enterprise.label}
              sub={sections.enterprise.sub}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} classes={{ root: classes.sectionContainer }}>
            <FooterItem
              label={sections.applications.label}
              linkTo={sections.applications.linkTo}
              sub={sections.applications.sub}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} classes={{ root: classes.sectionContainer }}>
            <FooterItem
              label={sections.company.label}
              linkTo={sections.company.linkTo}
              sub={sections.company.sub}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2} classes={{ root: classes.sectionContainer }}>
            <FooterItemContact />
          </Grid>
        </Grid>
      </nav>
      <FooterContactsPanel />
    </Section>
  );
}
