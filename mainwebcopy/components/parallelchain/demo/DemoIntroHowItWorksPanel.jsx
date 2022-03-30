import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CodeIcon from '@material-ui/icons/Code';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Section from '../../Section';

const useStyles = makeStyles((theme) => ({
  titleText: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  stepContainer: {
    padding: `${theme.spacing(4)}px`,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  stepIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48px',
    width: '48px',
    marginRight: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    background: `linear-gradient(${theme.palette.products.preventiveChain}, ${theme.palette.products.preventiveChainDark})`,
    color: theme.palette.neutral.white,
    borderRadius: '50%',
    [theme.breakpoints.up('lg')]: {
      width: '60px',
      height: '60px',
    },
  },
  stepCaption: {
    color: theme.palette.products.preventiveChain,
  },
}));

export default function DemoIntroHowItWorksPanel() {
  const classes = useStyles();

  return (
    <Section
      className={classes.contentContainer}
    >
      <Typography variant="h5" classes={{ root: classes.titleText }}>
        How it works
      </Typography>
      <Grid container>
        <Grid item xs={12} lg={3} classes={{ root: classes.stepContainer }}>
          <div>
            <div className={classes.stepIcon}>
              <CreateIcon />
            </div>
          </div>
          <div>
            <Typography variant="caption" classes={{ root: classes.stepCaption }}>
              Step #1
            </Typography>
            <Typography variant="h6">
              Register for the ParallelChain® Demo
            </Typography>
            <br />
            <Typography variant="body2">
              Fill in the form at the bottom of this page. In it, feel free to include any questions you have
              about the demo or ParallelChain® itself.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} classes={{ root: classes.stepContainer }}>
          <div>
            <div className={classes.stepIcon}>
              <CalendarTodayIcon />
            </div>
          </div>
          <div>
            <Typography variant="caption" classes={{ root: classes.stepCaption }}>
              Step #2
            </Typography>
            <Typography variant="h6">
              Book a time slot
            </Typography>
            <br />
            <Typography variant="body2">
              Once your application is approved, you will receive a form where you get
              to choose a demo timeslot most convenient for you. The demo will run for about an
              hour. If you would like more hands-on time with ParallelChain®, you can make
              a special request.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} classes={{ root: classes.stepContainer }}>
          <div>
            <div className={classes.stepIcon}>
              <CodeIcon />
            </div>
          </div>
          <div>
            <Typography variant="caption" classes={{ root: classes.stepCaption }}>
              Step #3
            </Typography>
            <Typography variant="h6">
              We send you the sample codes
            </Typography>
            <br />
            <Typography variant="body2">
              We&apos;d like to be as transparent as possible as to what the demo does,
              so we&apos;ll send over the program to you as a Golang package. You can then
              compile this package on your local machine, and even customize the demo yourself.
              Included with the codes is a brief user guide.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} classes={{ root: classes.stepContainer }}>
          <div>
            <div className={classes.stepIcon}>
              <WhatshotIcon />
            </div>
          </div>
          <div>
            <Typography variant="caption" classes={{ root: classes.stepCaption }}>
              Step #4
            </Typography>
            <Typography variant="h6">
              Put ParallelChain® through its paces
            </Typography>
            <br />
            <Typography variant="body2">
              This demo is designed to simulate a real-life, heavy-duty workload,
              the kind that would bring any other blockchain solution to its knees. 40,000 threads
              each making concurrent transactions to the blockchain - you&apos;ll see that ParallelChain®
              handles this superbly.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}

DemoIntroHowItWorksPanel.propTypes = {

};
