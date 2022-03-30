/* eslint-disable max-len */
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Section from '../Section';
import BreadCrumbsLocator from '../BreadCrumbsLocator';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.dark,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emphasisText: {
    color: '#fff',
    fontWeight: 500,
    marginBottom: 50,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  subtitleText: {
    color: '#fff',
    fontWeight: '100',
    marginTop: `${theme.spacing(1)}px`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '16px',
    },
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
}));
export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Section
      className={classes.container}
      spacingTop={6}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12} className={classes.itemsContainer}>
          {!sm && (
          <BreadCrumbsLocator
            breadCrumbLeftText="Mainnet"
            breadCrumbRightText="Ambassador"
            linkForBreadCrumb="/parallelchain/mainnet"
            darkMode={false}
          />
          )}
          <Typography variant="h1" classes={{ root: classes.emphasisText }}>
            ParallelChain Ambassador Program
          </Typography>
          <Grid container spacing={6}>
            <Grid item sm={12} md={6}>
              <Typography variant="h3" classes={{ root: classes.subtitleText }}>
                The ParallelChain Ambassador Program is a flagship initiative to grow the ParallelChain community and expand its reach around the world. Our ambassadors are talented individuals who are passionate about the ParallelChain technology and recognize its potential to not only enhance the DeFi sector, but as a force of liberation that can make genuine, positive changes to the status quo.
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="h3" classes={{ root: classes.subtitleText }}>
                As key contributors to the ParallelChain ecosystem, our ambassadors bring a mix of skills, knowledge and bright ideas to strengthen and further the growth of the community. Ambassadors are rewarded with allocation of ParallelChain’s native token XPLL and privileges that recognise them as distinctive members of the community.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

    </Section>
  );
}
