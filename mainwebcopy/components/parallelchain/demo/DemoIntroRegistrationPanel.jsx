import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { FutureButton, Overtitle } from 'dtl-react-components';
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
    borderRadius: '16px',
    transition: 'color 200ms ease-in-out',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  userManualIcon: {
    color: '#f15e5a',
    marginRight: `${theme.spacing(2)}px`,
    width: '64px',
    height: '64px',
  },
  subtitle1: {
    color: '#f15e5a',
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
          <Overtitle>
            Register for the demo
          </Overtitle>
          <Typography variant="h5" classes={{ root: classes.titleText }}>
            Take your first step into the future of blockchain
          </Typography>
          <Typography variant="body2">
            For the ParallelChain® Demo to work, your local machine needs to be provisioned a server to connect to.
          </Typography>
          <br />
          <Typography variant="body2">
            Please complete the registration form and one of our representatives will get in touch with you very soon.
          </Typography>
          <br />
          <Typography variant="body2">
            <i>We reserve the right to publish the demo results and information of the participant. </i>
          </Typography>
          <a href="https://strelka.gitbook.io/parallelchaintm-experience-local-set/">
            <FutureButton className={classes.userManualButton}>
              <ChromeReaderModeIcon classes={{ root: classes.userManualIcon }} />
              <div>
                <Typography variant="subtitle1" style={{ color: '#f15e5a' }}>
                  Read the ParallelChain® Experience user guide
                </Typography>
              </div>
            </FutureButton>
          </a>
        </Grid>
        <Grid item xs={12} lg={6} classes={{ root: classes.formContainer }}>
          <DemoIntroRegistrationForm />
        </Grid>
      </Grid>
    </Section>
  );
}
