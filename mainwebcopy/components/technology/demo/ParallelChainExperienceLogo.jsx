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
      height: '200px',
    },
  },
}));

export default function ParallelChainExperienceLogo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="/images/parallelchain/demoCoin.svg"
        className={classes.logo}
        alt="ParallelChain logo"
      />
    </div>
  );
}
