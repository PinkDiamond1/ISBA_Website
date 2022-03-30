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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  oppositeText: {
    color: 'white',
  },
  paragraph: {
    fontWeight: 100,
    marginBottom: `${theme.spacing(2)}px`,
    textAlign: 'left',
    color: (bright) => (bright ? '#fff' : '#0c2454'),
  },
  heading: {
    color: (bright) => (bright ? '#fff' : '#0c2454'),
    fontWeight: 'bold',
  },
  accordion: {
    // borderBottom: `1px solid ${theme.palette.neutral.gray}`,
    color: 'white',
    boxShadow: 'none',
    background: (bright) => (bright ? 'transparent' : 'white'),
  },
  accordionLast: {
    boxShadow: 'none',
    background: (bright) => (bright ? 'transparent' : 'white'),
  },
  borderBox: {
    border: 'solid',
    borderRadius: 50,
    borderWidth: 8,
    borderImage: 'radial-gradient(circle, rgba(45,143,156,1) 0%, rgba(255,255,255,0) 50%, rgba(45,143,156,1) 100%) 1',
    padding: 16,
    justifyContent: 'center',
  },
  accordionSummaryRoot: {
    padding: '0px',
  },
  accordionDetails: {
    display: 'block',
    padding: `${theme.spacing(2)}px`,
  },
  expandIcon: {
    color: theme.palette.primary.light,
  },
  accordionContainer: {
    color: 'white',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
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
  oppositeContentMarker: {
    color: 'white',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    marginTop: `${theme.spacing(20)}px`,
    padding: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(15)}px`,
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

export default function TimelineMainnetTwo({ alignment = 'left' }) {
  const classes = useStyles();
  const theme = useTheme();
  const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Timeline align={alignment}>
      {!mdOrSmaller ? (
        <>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h3" color="white" className={classes.oppositeText}>
                Q1
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.TimelineDot}>
                <img
                  src="/images/roadmap/2022_Q1.png"
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
                        <Grid item md={8}>
                          <Accordion
                            classes={{ root: classes.accordion }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              classes={{
                                root: classes.accordionSummaryRoot,
                              }}
                            >
                              <Typography variant="h3" color="white" className={classes.cardTitleText}>ParallelChain Testnet 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                              classes={{ root: classes.accordionDetails }}
                            >
                              <Typography variant="h5" classes={{ root: classes.paragraph }}>
                                • Turing-completed smart contracts
                                <br />
                                • Centralized deployment on an intuitive web platform
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Typography variant="h3" className={classes.cardTitleText}>
                            ParallelWallet Open-Beta Release
                            <br /><br />
                            ParallelChain Developers AMA
                          </Typography>
                        </Grid>
                        <Grid item md={2}>
                          <img style={{ width: 40 }} src="/images/parallelchain/mainnet/mainnetphase0.svg" alt="Mainnet Phase 0" />
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
              <Typography variant="h3" color="white" className={classes.oppositeText}>
                Q2
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.TimelineDot}>
                <img
                  src="/images/roadmap/2022_Q2.png"
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
                        <Grid item md={8}>
                          <Accordion
                            classes={{ root: classes.accordion }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              classes={{
                                root: classes.accordionSummaryRoot,
                              }}
                            >
                              <Typography variant="h3" color="white" className={classes.cardTitleText}>ParallelChain Testnet 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                              classes={{ root: classes.accordionDetails }}
                            >
                              <Typography variant="h5" classes={{ root: classes.paragraph }}>
                                • ParallelWallet integration <br />
                                • PRFC-1 (&quot;ParallelChain Request
                                For Comments&quot;) token standard proposal<br />
                                • Simulated staking<br />
                                • Geographically distributed deployment
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                        <Grid item md={2}>
                          <img style={{ width: 40 }} src="/images/parallelchain/mainnet/nodeactivation.svg" alt="Node Activation" className={classes.timelineDecorImage} />
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
              <Typography variant="h3" color="white" className={classes.oppositeText}>
                Q3
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.TimelineDot}>
                <img
                  src="/images/roadmap/2022_Q3.png"
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
                        <Grid item md={8}>
                          <Accordion
                            classes={{ root: classes.accordion }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              classes={{
                                root: classes.accordionSummaryRoot,
                              }}
                            >
                              <Typography variant="h3" color="white" className={classes.cardTitleText}>ParallelChain Testnet 3</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                              classes={{ root: classes.accordionDetails }}
                            >
                              <Typography variant="h5" classes={{ root: classes.paragraph }}>
                                • Most of governance functionality<br />
                                • Upgradable smart contracts<br />
                                • Decentralized deployment (invite only)
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion
                            classes={{ root: classes.accordion }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              classes={{
                                root: classes.accordionSummaryRoot,
                              }}
                            >
                              <Typography variant="h3" color="white" className={classes.cardTitleText}>ParallelChain Testnet 4</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                              classes={{ root: classes.accordionDetails }}
                            >
                              <Typography variant="h5" classes={{ root: classes.paragraph }}>
                                • Complete governance functionality<br />
                                • Stress test of full functionality<br />
                                • Decentralized deployment (open to all XPLL holders)
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Typography variant="h3" className={classes.cardTitleText}>
                            Mainnet Node Activation
                          </Typography>
                        </Grid>
                        <Grid item md={2}>
                          <img style={{ width: 40 }} src="/images/parallelchain/mainnet/validation.svg" alt="Validation" className={classes.timelineDecorImage} />
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
              <Typography variant="h3" color="white" className={classes.oppositeText}>
                Q4
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.TimelineDot}>
                <img
                  src="/images/roadmap/2022_Q4.png"
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
                        <Grid item md={8}>
                          <Typography variant="h3" className={classes.cardTitleText}>
                            ParallelChain Mainnet Launch
                            <br /><br />
                            Open Delegation
                          </Typography>
                        </Grid>
                        <Grid item md={2}>
                          <img style={{ width: 60 }} src="/images/parallelchain/mainnet/activation.svg" alt="Activation" className={classes.timelineDecorImage} />
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
            Q1
          </Typography>
          <TimelineContent className={classes.timelineContentRightBox}>
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="left" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
                  <div className={classes.accordionContainer}>
                    <Grid container spacing={2} className={classes.cardGridContainer}>
                      <Grid item md={8}>
                        <Accordion
                          classes={{ root: classes.accordion }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            classes={{
                              root: classes.accordionSummaryRoot,
                            }}
                          >
                            <Typography variant="h3" color="white" className={classes.cardTitleText}>ParallelChain Testnet 1</Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            classes={{ root: classes.accordionDetails }}
                          >
                            <Typography variant="h5" classes={{ root: classes.paragraph }}>
                              • Turing-completed smart contracts
                              <br />
                              • Centralized deployment on an intuitive web platform
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Typography variant="h3" className={classes.cardTitleText}>
                          ParallelWallet Open-Beta Release
                          <br /><br />
                          ParallelChain Developers AMA
                        </Typography>
                      </Grid>
                      <Grid item md={2}>
                        <img style={{ width: 40 }} src="/images/parallelchain/mainnet/mainnetphase0.svg" alt="Mainnet Phase 0" className={classes.timelineDecorImage} />
                      </Grid>
                    </Grid>
                  </div>
                  <Typography variant="h3" color="textSecondary" className={classes.oppositeText} style={{ textAlign: 'center' }}>
                    Q2
                  </Typography>
                  <div className={classes.accordionContainer}>
                    <Grid container spacing={2} className={classes.cardGridContainer}>
                      <Grid item md={8}>
                        <div className={classes.titleFlexContainer}>
                          <Accordion
                            classes={{ root: classes.accordion }}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              classes={{
                                root: classes.accordionSummaryRoot,
                              }}
                            >
                              <Typography variant="h3" color="white" className={classes.cardTitleText}>ParallelChain Testnet 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                              classes={{ root: classes.accordionDetails }}
                            >
                              <Typography variant="h5" classes={{ root: classes.paragraph }}>
                                • ParallelWallet integration <br />
                                • PRFC-1 (&quot;ParallelChain Request
                                For Comments&quot;) token standard proposal<br />
                                • Simulated staking<br />
                                • Geographically distributed deployment
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      </Grid>
                      <Grid item md={2}>
                        <img style={{ width: 40 }} src="/images/parallelchain/mainnet/nodeactivation.svg" alt="Node Activation" className={classes.timelineDecorImage} />
                      </Grid>
                    </Grid>
                  </div>
                  <Typography variant="h3" color="textSecondary" className={classes.oppositeText} style={{ textAlign: 'center' }}>
                    Q3
                  </Typography>
                  <div className={classes.accordionContainer}>
                    <Grid container spacing={2} className={classes.cardGridContainer}>
                      <Grid item md={8}>
                        <Accordion
                          classes={{ root: classes.accordion }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            classes={{
                              root: classes.accordionSummaryRoot,
                            }}
                          >
                            <Typography variant="h3" color="white" className={classes.cardTitleText}>ParallelChain Testnet 3</Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            classes={{ root: classes.accordionDetails }}
                          >
                            <Typography variant="h5" classes={{ root: classes.paragraph }}>
                              • Most of governance functionality<br />
                              • Upgradable smart contracts<br />
                              • Decentralized deployment (invite only)
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion
                          classes={{ root: classes.accordion }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            classes={{
                              root: classes.accordionSummaryRoot,
                            }}
                          >
                            <Typography variant="h3" color="white" className={classes.cardTitleText}>ParallelChain Testnet 4</Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            classes={{ root: classes.accordionDetails }}
                          >
                            <Typography variant="h5" classes={{ root: classes.paragraph }}>
                              • Complete governance functionality<br />
                              • Stress test of full functionality<br />
                              • Decentralized deployment (open to all XPLL holders)
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Typography variant="h3" className={classes.cardTitleText}>
                          Mainnet Node Activation
                        </Typography>
                      </Grid>
                      <Grid item md={2}>
                        <img style={{ width: 40 }} src="/images/parallelchain/mainnet/validation.svg" alt="Validation" className={classes.timelineDecorImage} />
                      </Grid>
                    </Grid>
                  </div>
                  <Typography variant="h3" color="textSecondary" className={classes.oppositeText} style={{ textAlign: 'center' }}>
                    Q4
                  </Typography>
                  <div className={classes.accordionContainer}>
                    <Grid container spacing={2} className={classes.cardGridContainer}>
                      <Grid item md={8}>
                        <div className={classes.titleFlexContainer}>
                          <Typography variant="h3" className={classes.cardTitleText}>
                            ParallelChain Mainnet Launch
                            <br /> <br />
                            Open Delegation
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={2}>
                        <img style={{ width: 60 }} src="/images/parallelchain/mainnet/activation.svg" alt="Activation" className={classes.timelineDecorImage} />
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

TimelineMainnetTwo.propTypes = {
  alignment: PropTypes.string.isRequired,
};
