import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TimelineLarge from './TimelineLarge';
import TimelineSmall from './TimelineSmall';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';
import Section from '../Section';
import TimelineMainnetTwo from '../parallelchain/TimelineMainnetTwo';
import TimelineMainnetOne from '../parallelchain/TimelineMainnetOne';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.dark,
  },
  titleText: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  subTitleText: {
    marginBottom: `${theme.spacing(6)}px`,
  },
  controlsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: `${theme.spacing(2)}px`,
  },
  positionIndicator: {
    marginLeft: `${theme.spacing(1)}px`,
  },
  expertPortrait: {
    height: '100px',
  },
  horizontal: {
    marginTop: 60,
  },
  vertical: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  timeline: {
    width: '40vw',
    height: 'auto',
    [theme.breakpoints.down('lg')]: {
      width: '65vw',
    },
  },
  headerImage: {
    justifySelf: 'flex-end',
    width: '10vw',
    height: 'auto',
    [theme.breakpoints.down('lg')]: {
      width: '18vw',
    },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
  boxTextActiveMainnet: {
    border: '3px solid white',
    borderBottom: '0px',
    borderRadius: '8px 8px 0px 0px',
    marginTop: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(2)}px`,
    flex: 1,
    color: '#fff',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      border: '3px solid white',
      borderRadius: '8px',
    },
  },
  boxTextInactiveMainnet: {
    borderBottom: '3px solid',
    borderRadius: '8px 8px 0px 0px',
    borderImage: 'linear-gradient(to right, rgba(0,61,97,1) 0%, rgba(45,143,156,1) 100%) 1',
    marginTop: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(2)}px`,
    flex: 1,
    color: '#003D61',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      borderBottom: '0px',
    },
  },
  boxTextActiveEnterprise: {
    border: '3px solid #003D61',
    borderBottom: '0px',
    borderRadius: '8px 8px 0px 0px',
    marginTop: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(2)}px`,
    flex: 1,
    color: '#003D61',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      border: '3px solid #003D61',
      borderRadius: '8px',
    },
  },
  boxTextInactiveEnterprise: {
    borderBottom: '3px solid',
    borderRadius: '8px 8px 0px 0px',
    borderImage: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(45,143,156,1) 100%) 1',
    marginTop: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(2)}px`,
    flex: 1,
    color: '#fff',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      borderBottom: '0px',
    },
  },
  boxLineLeftMainnet: {
    borderBottom: '3px solid',
    borderTop: '0px',
    borderLeft: '0px',
    borderRight: '0px',
    borderImage: 'linear-gradient(to left, rgba(45,143,156,1) 0%, rgba(255,255,255,0) 100%) 1',
    flex: 1,
  },
  boxLineRightMainnet: {
    borderBottom: '3px solid',
    borderTop: '0px',
    borderLeft: '0px',
    borderRight: '0px',
    borderImage: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(45,143,156,0) 100%) 1',
    flex: 1,
  },
  boxLineLeftEnterprise: {
    borderBottom: '3px solid',
    borderTop: '0px',
    borderLeft: '0px',
    borderRight: '0px',
    borderImage: 'linear-gradient(to left, rgba(0,61,97,1) 0%, rgba(45,143,156,1) 100%) 1',
    flex: 1,
  },
  boxLineRightEnterprise: {
    borderBottom: '3px solid',
    borderTop: '0px',
    borderLeft: '0px',
    borderRight: '0px',
    borderImage: 'linear-gradient(to right,rgba(45,143,156,1) 0% ,rgba(0,61,97,0) 100% ) 1',
    flex: 1,
  },
  roadmapTextEnterprise: {
    color: '#003D61',
    margin: `${theme.spacing(4)}px`,
  },
  roadmapTextMainnet: {
    color: '#fff',
    margin: `${theme.spacing(4)}px`,
  },
}));

export default function FutureRoadmapPanel({ colorState, setColorState }) {
  const classes = useStyles();
  const [value, setValue] = useState('mainnet');
  const theme = useTheme();
  const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section
      className={classes.container}
    >
      <div className={classes.headerContainer}>
        <MagicBox
          render={(boxIn, boxRef) => (
            <FadeIn
              in={boxIn}
              boxRef={boxRef}
            >
              <Typography
                variant="h1"
                classes={{
                  root: classes.subTitleText,
                }}
                style={{ color: colorState === 'white' ? 'black' : 'white' }}
              >
                Live progress of product and Mainnet development.
              </Typography>

            </FadeIn>
          )}
        />
      </div>
      {!smOrSmaller ? (
        <div className={classes.box}>
          <div className={value === 'enterprise' ? classes.boxLineLeftEnterprise : classes.boxLineLeftMainnet} />
          <Button
            className={value === 'enterprise' ? classes.boxTextActiveEnterprise : classes.boxTextInactiveEnterprise}
            onClick={() => { setValue('enterprise'); setColorState('white'); }}
          >
            <Typography variant="h2">
              Enterprise
            </Typography>
          </Button>
          <Button
            className={value === 'mainnet' ? classes.boxTextActiveMainnet : classes.boxTextInactiveMainnet}
            onClick={() => { setValue('mainnet'); setColorState('gradient'); }}
          >
            <Typography variant="h2">
              Mainnet
            </Typography>
          </Button>
          <div className={value === 'enterprise' ? classes.boxLineRightEnterprise : classes.boxLineRightMainnet} />
        </div>
      ) : (
        <div className={classes.box}>
          <Button
            className={value === 'enterprise' ? classes.boxTextActiveEnterprise : classes.boxTextInactiveEnterprise}
            onClick={() => { setValue('enterprise'); setColorState('white'); }}
          >
            Enterprise
          </Button>
          <Button
            className={value === 'mainnet' ? classes.boxTextActiveMainnet : classes.boxTextInactiveMainnet}
            onClick={() => { setValue('mainnet'); setColorState('gradient'); }}
          >
            Mainnet
          </Button>
        </div>
      )}

      <div className={classes.horizontal}>
        {value === 'enterprise'
          ? (
            <>
              <Typography variant="h2" className={classes.roadmapTextEnterprise}>
                Roadmap 2021
              </Typography>
              {mdOrSmaller ? <TimelineSmall /> : <TimelineLarge />}
            </>
          )
          : (
            <>
              <Typography variant="h2" className={classes.roadmapTextMainnet}>
                Roadmap 2021
              </Typography>
              <TimelineMainnetOne />
              <Typography variant="h2" className={classes.roadmapTextMainnet}>
                Roadmap 2022
              </Typography>
              <TimelineMainnetTwo alignment="right" />
            </>
          )}
      </div>

    </Section>
  );
}
FutureRoadmapPanel.propTypes = {
  colorState: PropTypes.string.isRequired,
  setColorState: PropTypes.func.isRequired,
};
