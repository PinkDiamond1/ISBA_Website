import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Overtitle } from 'dtl-react-components';
import Section from '../../Section';

const useStyles = makeStyles((theme) => ({
  titleText: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  textContainer: {
    [theme.breakpoints.up('lg')]: {
      paddingRight: `${theme.spacing(5)}px`,
    },
  },
  image: {
    display: 'block',
    width: '100%',
  },
  featuresContainer: {
    marginTop: `${theme.spacing(2)}px`,
  },
  featureItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '16px',
    height: '100%',
  },
  featureText: {
    background: '-webkit-linear-gradient(#01B6B8, #f15e5a)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));

export default function DemoTitlePanel() {
  const classes = useStyles();

  return (
    <Section
      className={classes.sectionContainer}
    >
      <Grid container>
        <Grid item xs={12} lg={6} classes={{ root: classes.textContainer }}>
          <Overtitle>
            No catches. No tricks. You be the judge.
          </Overtitle>
          <Typography variant="h5" classes={{ root: classes.titleText }}>
            Experience the full force of ParallelChain® on your local machine.
          </Typography>
          <Typography variant="body2">
            The world of blockchain is no stranger to  tall claims
            and broken promises. When we say that we are here to fulfil blockchain&apos;s
            business-commercial promise,
            {' '}
            <b>we want to prove to you that we mean it.</b>
          </Typography>
          <br />
          <Typography variant="body2">
            The ParallelChain® Demo is a 1-hour live demo of the world&apos;s fastest, most
            scalable and most private blockchain network, all performed on your local machine.
            This means you are in complete control of your surroundings and demo environment.
          </Typography>
          <br />
          <Typography variant="body2">
            If you are interested in giving ParallelChain® a spin, complete the form at the bottom
            of this page. After we confirm your registration, we will be in touch with you to
            discuss scheduling and answer all of your questions.
          </Typography>
        </Grid>
        <Grid item container xs={12} lg={6} spacing={3} classes={{ root: classes.featuresContainer }}>
          <Grid item xs={12} md={6}>
            <Card raised elevation={10} classes={{ root: classes.featureItemContainer }}>
              <CardContent>
                <Typography variant="h6" classes={{ root: classes.featureText }}>
                  Self-compilable source code
                </Typography>
                <Typography variant="subtitle2">
                  No catches, no tricks
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card raised elevation={10} classes={{ root: classes.featureItemContainer }}>
              <CardContent>
                <Typography variant="h6" classes={{ root: classes.featureText }}>
                  40,000 threads
                </Typography>
                <Typography variant="subtitle2">
                  Each concurrently making transactions.
                  See how ParallelChain® handles enterprise-level workloads
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card raised elevation={10} classes={{ root: classes.featureItemContainer }}>
              <CardContent>
                <Typography variant="h6" classes={{ root: classes.featureText }}>
                  &gt; 100,000 TPS
                </Typography>
                <Typography variant="subtitle2">
                  The world&apos;s fastest private blockchain system
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card raised elevation={10} classes={{ root: classes.featureItemContainer }}>
              <CardContent>
                <Typography variant="h6" classes={{ root: classes.featureText }}>
                  All persisted transactions queryable
                </Typography>
                <Typography variant="subtitle2">
                  No compromises on data integrity
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
