import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  oppositeText: {
    color: 'white',
  },
  accordionContainer: {
    color: 'white',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
    marginTop: `${theme.spacing(5)}px`,
    padding: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(5)}px`,
    border: '2px solid',
    borderImage: 'linear-gradient(45deg, #94EECB 50%, #2F3789 100%) 1',
    borderRadius: `${theme.spacing(2)}px`,
  },
  TimelineSeparator: {
    background: 'linear-gradient(0deg, #bdbdbd 40%, #00FFFF 60%);',
  },
  titleFlexContainer: {
    marginBottom: '0px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  chipContainer: {
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(1)}px`,
  },
  logoImage: {
    display: 'none',
    pointerEvents: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      objectFit: 'contain',
      height: '80px',
    },
  },
  completedTimeline: {
    background: '#00FFFF',
  },
  TimelineDot: {
    background: 'transparent',
  },
  cardGridContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  timelineContentRightBox: {
    marginTop: `${theme.spacing(5)}px`,
  },
  cardTitleText: {
    textAlign: 'left',
    padding: `${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  timelineDecorImage: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function TimelineMainnetOne() {
  const classes = useStyles();
  const theme = useTheme();
  const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Timeline>
      {!mdOrSmaller ? (
        <>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h3" color="white" className={classes.oppositeText}>
                Q1 - Q3: Completed
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.TimelineDot}>
                <img
                  src="/images/roadmap/completed_icon.png"
                  alt="PreventiveChain"
                  className={`${classes.logoImage}`}
                />
              </TimelineDot>
              <TimelineConnector className={classes.completedTimeline} />
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContentRightBox}>
              <MagicBox
                render={(boxIn, boxRef) => (
                  <FadeIn variant="left" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
                    <div className={classes.accordionContainer}>
                      <Grid container spacing={2} className={classes.cardGridContainer}>
                        <Grid item md={10}>
                          <Typography variant="h3" className={classes.cardTitleText}>
                            ParallelChain Mainnet Project Begins
                          </Typography>
                        </Grid>
                        <Grid item md={2}>
                          <img style={{ width: 40 }} src="/images/parallelchain/mainnet/mainnetprojectbegins.svg" alt="Project Begins" />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={classes.accordionContainer}>
                      <Grid container spacing={2} className={classes.cardGridContainer}>
                        <Grid item md={10}>
                          <div className={classes.titleFlexContainer}>
                            <Typography variant="h3" className={classes.cardTitleText}>
                              Introductory AMA (xSatoshi Club)
                              <br /><br />
                              XPLL Airdrop Campaign
                              <br /><br />
                              ParallelWallet Alpha Test
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item md={2}>
                          <img style={{ width: 40 }} src="/images/parallelchain/mainnet/introductoryama.svg" alt="Introductory AMA" />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={classes.accordionContainer}>
                      <Grid container spacing={2} className={classes.cardGridContainer}>
                        <Grid item md={10}>
                          <div className={classes.titleFlexContainer}>
                            <Typography variant="h3" className={classes.cardTitleText}>
                              ParallelWallet Closed-Beta Release
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item md={2}>
                          <img style={{ width: 40 }} src="/images/parallelchain/mainnet/closedbeta.svg" alt="Closed Beta" />
                        </Grid>
                      </Grid>
                    </div>
                  </FadeIn>
                )}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h3" color="textSecondary" className={classes.oppositeText}>
                Q4: In the Pipeline
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.TimelineDot}>
                <img
                  src="/images/roadmap/2021_Q4.png"
                  alt="PreventiveChain"
                  className={`${classes.logoImage}`}
                />
              </TimelineDot>
              <TimelineConnector className={classes.completedTimeline} />
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContentRightBox}>
              <MagicBox
                render={(boxIn, boxRef) => (
                  <FadeIn variant="left" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
                    <div className={classes.accordionContainer}>
                      <Grid container spacing={2} className={classes.cardGridContainer}>
                        <Grid item md={10}>
                          <div className={classes.titleFlexContainer}>
                            <Typography variant="h3" className={classes.cardTitleText}>
                              ParallelChain Mainnet Tokenomics Release
                              <br /><br />
                              ParallelChain Delegators Economics Release
                              <br /><br />
                              XPLL Node Round
                              <br /><br />
                              ParallelChain Ambassador Program
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item md={2}>
                          <img style={{ width: 40 }} src="/images/parallelchain/mainnet/tokenomics.svg" alt="Tokenomics" />
                        </Grid>
                      </Grid>
                    </div>
                  </FadeIn>
                )}
              />
            </TimelineContent>
          </TimelineItem>
        </>
      ) : (
        <>
          <Typography variant="h3" color="textSecondary" className={classes.oppositeText}>
            Q1 - Q3: Completed
          </Typography>
          <TimelineContent className={classes.timelineContentRightBox}>
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="left" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
                  <div className={classes.accordionContainer}>
                    <Grid container spacing={2} className={classes.cardGridContainer}>
                      <Grid item md={10}>
                        <Typography variant="h3" className={classes.cardTitleText}>
                          ParallelChain Mainnet Project Begins
                        </Typography>
                      </Grid>
                      <Grid item md={2}>
                        <img style={{ width: 40 }} src="/images/parallelchain/mainnet/mainnetprojectbegins.svg" alt="Project Begins" className={classes.timelineDecorImage} />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.accordionContainer}>
                    <Grid container spacing={2} className={classes.cardGridContainer}>
                      <Grid item md={10}>
                        <div className={classes.titleFlexContainer}>
                          <Typography variant="h3" className={classes.cardTitleText}>
                            Introductory AMA (xSatoshi Club)
                            <br /><br />
                            XPLL Airdrop Campaign
                            <br /><br />
                            ParallelWallet Alpha Test
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={2}>
                        <img style={{ width: 40 }} src="/images/parallelchain/mainnet/introductoryama.svg" alt="Introductory AMA" className={classes.timelineDecorImage} />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.accordionContainer}>
                    <Grid container spacing={2} className={classes.cardGridContainer}>
                      <Grid item md={10}>
                        <div className={classes.titleFlexContainer}>
                          <Typography variant="h3" className={classes.cardTitleText}>
                            ParallelWallet Closed-Beta Release
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={2}>
                        <img style={{ width: 40 }} src="/images/parallelchain/mainnet/closedbeta.svg" alt="Closed Beta" className={classes.timelineDecorImage} />
                      </Grid>
                    </Grid>
                  </div>
                </FadeIn>
              )}
            />
          </TimelineContent>
          <Typography variant="h3" color="textSecondary" className={classes.oppositeText}>
            Q4: In the Pipeline
          </Typography>
          <TimelineContent className={classes.timelineContentRightBox}>
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="left" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
                  <div className={classes.accordionContainer}>
                    <Grid container spacing={2} className={classes.cardGridContainer}>
                      <Grid item md={10}>
                        <div className={classes.titleFlexContainer}>
                          <Typography variant="h3" className={classes.cardTitleText}>
                            ParallelChain Mainnet Tokenomics Release
                            <br /><br />
                            ParallelChain Delegators Economics Release
                            <br /><br />
                            XPLL Node Round
                            <br /><br />
                            ParallelChain Ambassador Program
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={2}>
                        <img style={{ width: 40 }} src="/images/parallelchain/mainnet/tokenomics.svg" alt="Tokenomics" className={classes.timelineDecorImage} />
                      </Grid>
                    </Grid>
                  </div>
                </FadeIn>
              )}
            />
          </TimelineContent>
        </>
      )}
    </Timeline>
  );
}
