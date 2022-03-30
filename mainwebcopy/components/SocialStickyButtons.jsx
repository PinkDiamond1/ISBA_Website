import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  center: {
    zIndex: 1,
  },
  vl: {
    borderLeft: '0.5px solid #BEBEBE',
    height: '140px',
    position: 'fixed',
    left: '5%',
    marginLeft: '-3px',
    zIndex: 1,
    top: '0',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  iconImg: {
    height: '30px',
    width: 'auto',

  },
  iconImgRightBottom: {
    height: 'auto',
    width: '30px',
    cursor: 'pointer',
    marginBottom: `${theme.spacing(4)}px`,
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: '1%',
    marginLeft: '-3px',
    top: 100,
    zIndex: 1,
    gap: '10px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  bottomBox: {
    position: 'fixed',
    right: '1%',
    bottom: 30,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    gap: '4px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

  },

}));

export default function SocialStickyButtons() {
  const classes = useStyles();
  const up = () => {
    window.scrollBy(0, -800);
  };
  const down = () => {
    window.scrollBy(0, 800);
  };

  return (
    <div className={classes.center}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <div className={classes.socialIcons}>
          <a href="https://twitter.com/ParallelChainLB" target="blank">
            <img
              className={classes.iconImg}
              src="/images/index/twitter.svg"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/company/parallelchain-lab" target="blank">
            <img
              className={classes.iconImg}
              src="/images/index/instagram.svg"
              alt=""
            />
          </a>
          <a href="https://medium.com/digital-transaction-limited" target="blank">
            <img
              className={classes.iconImg}
              src="/images/index/medium.svg"
              alt=""
            />
          </a>
          <a href="https://t.me/parallelchainofficial" target="blank">
            <img
              className={classes.iconImg}
              src="/images/index/telegram.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className={classes.bottomBox}>
        <img
          className={classes.iconImgRightBottom}
          src="/images/index/up.svg"
          alt=""
          onClick={() => up()}
        />
        <img
          className={classes.iconImgRightBottom}
          src="/images/index/down.svg"
          alt=""
          onClick={() => down()}
        />
        <a href="mailto:info@parallelchain.io">
          <img
            className={classes.iconImgRightBottom}
            src="/images/index/bubble.svg"
            alt=""
            style={{ marginTop: '20px' }}
          />
        </a>
      </div>
    </div>
  );
}
