import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: '80px',
    [theme.breakpoints.up('md')]: {
      height: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '140px',
    },
  },
  parallelChainText: {
    color: '#0c2454',
    marginTop: `${theme.spacing(1)}px`,
  },
  experienceText: {
    color: '#0c2454',
    fontStyle: 'italic',
    [theme.breakpoints.down('sm')]: {
      marginBottom: `${theme.spacing(2)}px`,
    },
  },
}));

export default function ParallelChainExperienceLogo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="/images/parallelchain/ParallelChainS-icon.svg"
        className={classes.logo}
        alt="ParallelChain logo"
      />
      <Typography
        variant="body1"
        classes={{
          root: classes.parallelChainText,
        }}
      >
        ParallelChain S
      </Typography>
      <Typography
        variant="subtitle1"
        classes={{
          root: classes.experienceText,
        }}
      >
        DEMO
      </Typography>
    </div>
  );
}
