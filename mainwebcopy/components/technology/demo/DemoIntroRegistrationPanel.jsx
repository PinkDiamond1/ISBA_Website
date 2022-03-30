import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { Button } from '@material-ui/core';
import Section from '../../Section';
import DemoIntroRegistrationForm from './DemoIntroRegistrationForm';

const useStyles = makeStyles((theme) => ({
  titleText: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  userManualButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: `${theme.spacing(3)}px`,
    padding: `${theme.spacing(2)}px`,
    border: '2px solid black',
    borderRadius: '16px',
    transition: 'color 200ms ease-in-out',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  userManualIcon: {
    marginRight: `${theme.spacing(2)}px`,
    width: '64px',
    height: '64px',
    color: 'black',
  },
  overtitleText: {
    color: '#678783',
  },
  body: {
    fontWeight: '300',
    color: 'black',
  },
}));

export default function DemoIntroRegistrationPanel() {
  const classes = useStyles();

  return (
    <Section
      className={classes.sectionContainer}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h3" classes={{ root: classes.overtitleText }}>
            Register for the Demo
          </Typography>
          <Typography variant="h2" classes={{ root: classes.titleText }}>
            Take your first step into the future of blockchain
          </Typography>
          <Typography variant="h3" className={classes.body}>
            For the ParallelChain® Demo to work, your local machine needs to be provisioned a server to connect to.
          </Typography>
          <br />
          <Typography variant="h3" className={classes.body}>
            Please complete the registration form and one of our representatives will get in touch with you very soon.
          </Typography>
          <br />
          <Typography variant="h3" className={classes.body}>
            We reserve the right to publish the demo results and information of the participant.
          </Typography>
          <a href="https://strelka.gitbook.io/parallelchaintm-experience-local-set/">
            <Button className={classes.userManualButton}>
              <ChromeReaderModeIcon classes={{ root: classes.userManualIcon }} />
              <div>
                <Typography variant="subtitle1" style={{ color: 'black' }}>
                  Read the ParallelChain® Experience user guide
                </Typography>
              </div>
            </Button>
          </a>
        </Grid>
        <Grid item xs={12} lg={6} classes={{ root: classes.formContainer }}>
          <DemoIntroRegistrationForm />
        </Grid>
      </Grid>
    </Section>
  );
}
