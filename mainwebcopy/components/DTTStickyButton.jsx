import { makeStyles } from '@material-ui/core/styles';
import BlockLink from './BlockLink';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  coin: {
    boxShadow: `0 0 6px #f15e5a`,
    animation: `$gentle-breathing 2000ms ${theme.transitions.easing.easeInOut} infinite`,
    borderRadius: '50%',
  },
  '@keyframes gentle-breathing': {
    '0%': {
      boxShadow: `0 0 0px #f15e5a`,
    },
    '50%': {
      boxShadow: `0 0 8px #f15e5a`,
    },
    '100%': {
      boxShadow: `0 0 0px #f15e5a`,
    },
  },
}));

export default function DTTStickyButton() {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <BlockLink
        href="/parallelchain/mainnet"
      >
        <img
          style={{
            height: '55px',
            pointerEvents: 'none',
          }}
          src="/images/dtt/xpll.svg"
          alt="XPLL"
          className={classes.coin}
        />
      </BlockLink>
    </div>
  );
}
