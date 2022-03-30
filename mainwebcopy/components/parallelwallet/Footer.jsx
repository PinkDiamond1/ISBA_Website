import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  separator: {
    paddingBottom: 8,
    marginBottom: `${theme.spacing(4)}px`,
    background: 'linear-gradient(to right, #9DE7BD, #4A5555)',
  },
  poweredByContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: `${theme.spacing(16)}px`,
    marginBottom: `${theme.spacing(10)}px`,
  },
  imageSmall: {
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
  },
}));

export default function FeatureGrid() {
  const classes = useStyles();

  return (
    <div>
      <Section>
        <div className={classes.separator} />
        <Typography style={{ color: '#7FDB9C' }} variant="subtitle1">
          Coming to <b>iOS</b> and <b>Android</b>.
        </Typography>
        <div className={classes.poweredByContainer}>
          <Typography style={{ textAlign: 'center', color: 'white' }} variant="h6">
            Powered by
          </Typography>
          <img
            src="/images/parallelchain-logo-block-white.svg"
            alt="ParallelChain logo"
            style={{ height: '40pt' }}
          />
        </div>
      </Section>
    </div>
  );
}
