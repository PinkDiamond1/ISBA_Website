import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { CircularProgressbar } from 'react-circular-progressbar';

const useStyles = makeStyles((t) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(150, 150, 150, 0.4)',
    padding: `${t.spacing(1)}px`,
  },
  closeButton: {
    backgroundColor: 'rgba(175, 175, 175, 0.7)',
    marginBottom: `${t.spacing(1)}px`,
    alignSelf: 'right',
  },
  card: {
    maxWidth: '780px',
    maxHeight: '100%',
    padding: `${t.spacing(4)}px`,
    borderRadius: '16px',
    overflowY: 'scroll',
  },
  parallelChainLogo: {
    height: '48px',
    marginRight: `${t.spacing(2)}px`,
  },
  experienceLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: `${t.spacing(2)}px`,
  },
  runButton: {
    float: 'right',
    marginTop: `${t.spacing(2)}px`,
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  caption: {
    marginTop: `${t.spacing(2)}px`,
  },
  forceGraphImg: {
    display: 'block',
    maxHeight: '400px',
    maxWidth: '300px',
    margin: `${t.spacing(1)}px auto`,
  },
  resetButton: {
    float: 'right',
    marginTop: `${t.spacing(10)}px`,
  },
}));

export default function ParallelChainWebDemoPopup({ closeBackdrop }) {
  const theme = useTheme();
  const classes = useStyles();
  const [step, setStep] = useState(0);

  const [noParties, setNoParties] = useState(50);
  const [noTx, setNoTx] = useState(50000);

  const [progressEth, setProgressEth] = useState(0);
  const [progressPChain, setProgressPChain] = useState(0);
  const [progressHLedger, setProgressHLedger] = useState(0);

  const initialState = () => {
    setStep(0);
    setNoParties(50);
    setNoTx(50000);
    setProgressEth(0);
    setProgressPChain(0);
    setProgressHLedger(0);
  };

  const incrementStep = () => {
    if (step === 2) {
      return;
    }
    setStep(step + 1);
  };

  const noPartiesMarks = [
    {
      value: 50,
      label: '50',
    },
    {
      value: 100,
      label: '100',
    },
  ];

  const noTxMarks = [
    {
      value: 50000,
      label: '50k',
    },
    {
      value: 100000,
      label: '100k',
    },
    {
      value: 150000,
      label: '150k',
    },
    {
      value: 200000,
      label: '200k',
    },
    {
      value: 250000,
      label: '250k',
    },
  ];

  const noTxToTimeoutEth = {
    50000: 282,
    100000: 470,
    150000: 659,
    200000: 850,
    250000: 1227,
  };

  const noTxToTimeout = {
    50000: 30,
    100000: 50,
    150000: 70,
    200000: 90,
    250000: 130,
  };

  const noTxToTimeoutHLedger = {
    50000: 166,
    100000: 277,
    150000: 388,
    200000: 500,
    250000: 722,
  };

  // Increment ETH and ParallelChain progress
  let ethId;
  let pChainId;
  let hLedgerId;
  useEffect(() => {
    if (step === 1) {
      ethId = setInterval(() => {
        if (progressPChain >= 100) clearInterval(ethId);

        setProgressEth((state) => state + 0.1);
      }, noTxToTimeoutEth[noTx]);

      pChainId = setInterval(() => {
        if (progressPChain >= 100) clearInterval(pChainId);

        setProgressPChain((state) => state + 1);
      }, noTxToTimeout[noTx]);

      hLedgerId = setInterval(() => {
        if (progressPChain >= 100) clearInterval(hLedgerId);

        setProgressHLedger((state) => state + 1);
      }, noTxToTimeoutHLedger[noTx]);
    }
    return () => {
      clearInterval(ethId);
      clearInterval(pChainId);
      clearInterval(hLedgerId);
    };
  }, [step]);

  return (
    <div className={classes.container}>
      <IconButton
        onClick={closeBackdrop}
        classes={{ root: classes.closeButton }}
      >
        <CloseIcon />
      </IconButton>
      <Card classes={{ root: classes.card }}>
        <div className={classes.experienceLogoContainer}>
          <img
            src="/images/parallelchain/ParallelChainS-icon.svg"
            alt="ParallelChain logo"
            className={classes.parallelChainLogo}
          />
          <Typography variant="h4">
            Feel the Speed!
          </Typography>
        </div>
        { step === 0 && (
          <>
            <Typography variant="h6" gutterBottom>
              Choose Total Transactions and Traders:
            </Typography>

            <Typography>
              Number of Total Transactions
            </Typography>
            <Slider
              defaultValue={50000}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="off"
              step={50000}
              min={50000}
              max={250000}
              marks={noTxMarks}
              onChange={(_, v) => setNoTx(v)}
            />

            <Typography>
              Number of Traders
            </Typography>
            <Slider
              defaultValue={50}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="off"
              step={50}
              min={50}
              max={100}
              marks={noPartiesMarks}
              onChange={(_, v) => setNoParties(v)}
            />
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.runButton }}
              onClick={incrementStep}
            >
              Run
            </Button>
          </>
        )}
        { step === 1 && (
          <>
            <Grid
              container
              spacing={4}
            >
              <Grid item xs={12} md={4} classes={{ root: classes.progressContainer }}>
                <Typography variant="h6" gutterBottom>
                  Ethereum
                </Typography>
                <CircularProgressbar
                  value={1}
                  text={`${Math.round(Math.min(1, progressEth) * 10) / 10}%`}
                  styles={{
                    root: {
                      maxWidth: '180px',
                      marginBottom: '16px',
                    },
                    path: {
                      stroke: 'rgb(207, 176, 250)',
                    },
                    text: {
                      fill: 'rgb(207, 176, 250)',
                      fontWeight: 'bold',
                      fontFamily: theme.fonts.poppins,
                    },
                  }}
                />
                { progressPChain >= 100 && (
                <Typography variant="caption" align="center">
                  { `Ethereum: ${noTxToTimeout[noTx] * 0.1} secs, ~1% completion` }
                </Typography>
                )}
              </Grid>

              <Grid item xs={12} md={4} classes={{ root: classes.progressContainer }}>
                <Typography variant="h6" gutterBottom>
                  ParallelChain®
                </Typography>
                <CircularProgressbar
                  value={progressPChain}
                  text={`${Math.min(100, progressPChain)}%`}
                  styles={{
                    root: {
                      width: '200px',
                      marginBottom: '16px',
                    },
                    text: {
                      fontWeight: 'bold',
                      fontFamily: theme.fonts.poppins,
                    },
                  }}
                />
                { progressPChain >= 100 && (
                <Typography variant="subtitle1" align="center">
                  { `ParallelChain®: ${noTxToTimeout[noTx] * 0.1} secs, 100% completion` }
                </Typography>
                )}
              </Grid>

              <Grid item xs={12} md={4} classes={{ root: classes.progressContainer }}>
                <Typography variant="h6" gutterBottom>
                  Hyperledger Fabric
                </Typography>
                <CircularProgressbar
                  value={Math.min(18, progressHLedger)}
                  text={`${Math.min(18, progressHLedger)}%`}
                  styles={{
                    root: {
                      width: '180px',
                      marginBottom: '16px',
                    },
                    path: {
                      stroke: 'rgb(151, 214, 215)',
                    },
                    text: {
                      fill: 'rgb(151, 214, 215)',
                      fontWeight: 'bold',
                      fontFamily: theme.fonts.poppins,
                    },
                  }}
                />
                { progressPChain >= 100 && (
                <Typography variant="caption" align="center">
                  { `Hyperledger Fabric: ${noTxToTimeout[noTx] * 0.1} secs, ~18% completion` }
                </Typography>
                )}
              </Grid>

            </Grid>

            { progressPChain < 100 && (
            <Typography variant="subtitle1" align="center">
              Parallelchain performing transactions …
            </Typography>
            )}

            { progressPChain >= 120 && (
            <Typography
              display="block"
              variant="caption"
              align="center"
              classes={{ root: classes.caption }}
            >
              * ParallelChain performance based on a single client with
              i7-10700k with 16 processors.
              {' '}
              <br />
              % completion for ETH and HFC  =  ratio of its transactions per second to ParallelChain
            </Typography>
            )}

            {progressPChain >= 120 && (
            <img
              src={`/images/parallelchain/demo/output_${noParties}_traders_with_${noTx}_sims_visual_cropped.png`}
              alt="Force Graph"
              className={classes.forceGraphImg}
            />
            )}

            {progressPChain >= 120 && (
            <Typography
              display="block"
              variant="caption"
              align="center"
              classes={{ root: classes.caption }}
            >
              Underlying graph with
              {' '}
              {noParties}
              {' '}
              traders (numbered nodes) and
              {' '}
              {noTx / 1000}
              k transactions (dense edges).
            </Typography>
            )}

            {progressPChain >= 120 && (
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.resetButton }}
              onClick={initialState}
            >
              Try Again
            </Button>
            )}
          </>
        )}
      </Card>
    </div>
  );
}

ParallelChainWebDemoPopup.propTypes = {
  closeBackdrop: PropTypes.func.isRequired,
};
