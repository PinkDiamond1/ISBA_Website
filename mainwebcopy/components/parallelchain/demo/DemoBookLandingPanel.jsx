import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../../Section';

const useStyles = makeStyles((theme) => ({
  background: {
    background: 'url(/images/parallelchain/demo/demo-booking-banner-background.jpg)',
    backgroundSize: 'cover',
    color: theme.palette.neutral.white,
  },
}));

export default function DemoBookLandingPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingTop={6}
      className={classes.background}
    >
      <Typography variant="h2">
        You are one step closer to the future of blockchain.
      </Typography>
      <br />
      <Typography variant="h3">
        Book your timeslot for the ParallelChain™ Demo
      </Typography>
      <br />
    </Section>
  );
}

