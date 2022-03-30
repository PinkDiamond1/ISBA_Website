import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Box,
  Button, CircularProgress,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import FadeIn from '../FadeIn';
import MagicBox from '../MagicBox';

const useStyles = makeStyles((theme) => ({
  activateButton: {
    color: '#B2FAFF',
    textTransform: 'none',
    fontSize: '24px',
    fontStyle: 'italic',
  },
  container: {
    marginTop: `${theme.spacing(10)}px`,
  },
}));

export default function ParallelChainFMainnetReadiness() {
  const classes = useStyles();
  const theme = useTheme();
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(75);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div className={classes.container}>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            variant="up"
            in={boxIn}
            boxRef={boxRef}
          >
            <div
              style={{
                display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
              }}
            >
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  style={{
                    color: '#6BF4FE',
                    opacity: '0.4',
                    filter: 'blur(15px)',
                  }}
                  size={smOrSmaller ? 250 : 350}
                  thickness={5}
                  value={progress}
                />
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  style={{
                    color: '#B2FAFF',
                    position: 'absolute',
                  }}
                  sx={{
                    animationDuration: '1000ms',
                  }}
                  size={smOrSmaller ? 250 : 350}
                  thickness={3}
                  value={progress}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Button className={classes.activateButton} onClick={() => setProgress(0)}>
                    Mainnet
                    <br />
                    Activation
                  </Button>
                </Box>
              </Box>
            </div>
          </FadeIn>
        )}
      />
    </div>
  );
}
