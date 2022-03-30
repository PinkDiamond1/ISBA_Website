import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  accordionDetails: {
    display: 'block',
    padding: `${theme.spacing(2)}px`,
  },
  paragraph: {
    marginBottom: `${theme.spacing(2)}px`,
    color: '#678783',
  },
  accordionContainer: {
    color: 'white',
    alignItems: 'center',
    position: 'relative',
    padding: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(2)}px`,
    borderRadius: '16px',
    '&:last-child': {
      borderRadius: `${theme.spacing(2)}px`,
    },
    '&:first-child': {
      borderRadius: `${theme.spacing(2)}px`,
    },
  },
  parallelChainCard: {
    background: 'linear-gradient(90deg, rgba(7,1,99,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  },
  chattelChainCard: {
    background: 'linear-gradient(90deg, rgba(0,82,84,1) 0%, rgba(81,218,181,1) 100%)',
  },
  preventiveChainCard: {
    background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
  },
  parallelWalletCard: {
    background: 'linear-gradient(90deg, rgba(42,36,56,255) 0%, rgba(148,144,159,255) 100%)',
  },
  constructionChainCard: {
    background: 'linear-gradient(90deg, rgba(242,200,22,1) 0%, rgba(209,124,0,1) 100%)',
  },
  approvalChainCard: {
    background: 'linear-gradient(-90deg, rgba(76,198,179,1) 0%, rgba(94,200,81,1) 100%)',
  },
  ekycChainCard: {
    background: 'linear-gradient(-90deg, rgba(39,73,109,1) 0%, rgba(0,144,158,1) 100%)',
  },
  biometricChainCard: {
    background: 'linear-gradient(-90deg, rgba(69,26,147,255) 0%, rgba(150,156,249,255) 100%)',
  },
  voiceChainCard: {
    background: 'linear-gradient(-90deg, rgba(191,213,233,255) 0%, rgba(61,121,179,255) 100%)',
  },
  whiteLabelChainCard: {
    background: 'linear-gradient(-90deg, rgba(118,244,188,255) 0%, rgba(42,113,83,255) 100%)',
  },
  antiMoneyLaunderingChainCard: {
    background: 'linear-gradient(-90deg, rgba(204,153,255,255) 0%, rgba(160,54,132,255) 100%)',
  },
  expandIcon: {
    color: theme.palette.primary.light,
  },
  titleFlexContainer: {
    marginBottom: '0px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  chipContainer: {
    marginTop: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(1)}px`,
  },
  WalletChip: {
    color: 'rgba(148,144,159,255)',
  },
  KYCChip: {
    color: 'rgba(0,144,158,1)',
  },
  PreventiveChip: {
    color: '#d53369',
  },
  ApprovalChip: {
    color: 'rgba(76,198,179,1)',
  },
  ChattleChip: {
    color: 'rgba(0,82,84,1)',
  },
  AMLChip: {
    color: 'rgba(160,54,132,255)',
  },
  ParallelChip: {
    color: 'rgba(9,9,121,1)',
  },
  VoiceChip: {
    color: 'rgba(61,121,179,255)',
  },
  biometricChip: {
    color: 'rgba(69,26,147,255)',
  },
  cardLogoFlex: {
    flexGrow: '0',
  },
  logoImage: {
    width: '100%',
  },
}));

export default function TimelineSmall() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.paragraph}>
        Q1-Q3: Completed
      </Typography>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="left" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
            <Accordion
              classes={{ root: `${classes.accordionContainer} ${classes.preventiveChainCard}` }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/preventivechain/preventivechain-logo-white.svg"
                        alt="PreventiveChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        PreventiveChain 2.0
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="Completed: Jan 2021" className={classes.PreventiveChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbarWithChildren
                      value={100}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: 'white',
                      })}
                    >
                      <img style={{ width: '50%' }} src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_960_720.png" alt="doge" />
                    </CircularProgressbarWithChildren>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              >
                <Typography classes={{ root: classes.paragraph }}>
                  Forced log-outs are triggered whenever the system detects the presence of a camera
                  in front of the screen or identifies the face of a
                  third party that is not the user
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              classes={{ root: `${classes.accordionContainer} ${classes.ekycChainCard}` }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/ekycchain/ekycchain-logo-white.svg"
                        alt="PreventiveChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        eKYC-Chain
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="Completed: Feb 2021" className={classes.KYCChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbarWithChildren
                      value={100}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: 'white',
                      })}
                    >
                      <img style={{ width: '50%' }} src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_960_720.png" alt="doge" />
                    </CircularProgressbarWithChildren>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              >
                <Typography classes={{ root: classes.paragraph }}>
                  A biometric system for secure and effective
                  verification and authentication of personal identity
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              classes={{ root: `${classes.accordionContainer} ${classes.biometricChainCard}` }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/mask_2.svg"
                        alt="PreventiveChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        Multi-biometric recognition
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="Completed: Mar 2021" className={classes.biometricChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbarWithChildren
                      value={100}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: 'white',
                      })}
                    >
                      <img style={{ width: '50%' }} src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_960_720.png" alt="doge" />
                    </CircularProgressbarWithChildren>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              >
                <Typography classes={{ root: classes.paragraph }}>
                  Anti-spoofing facial recognition paired with
                  palm print recognition for user registration and access
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              classes={{ root: `${classes.accordionContainer} ${classes.parallelChainCard}` }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/parallelchain/parallelchain-logo-white.svg"
                        alt="ParallelChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        ParallelChain® Private 2.0
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="Completed: Jul 2021" className={classes.ParallelChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbarWithChildren
                      value={100}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: 'white',
                      })}
                    >
                      <img style={{ width: '50%' }} src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_960_720.png" alt="doge" />
                    </CircularProgressbarWithChildren>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              >
                <Typography classes={{ root: classes.paragraph }}>
                  An increase of speed from 100k to 120k TPS,
                  and lower average latency from 0.01s to 0.003s.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </FadeIn>
        )}
      />
      <Typography variant="h5" className={classes.paragraph}>
        Q4: Next Releases
      </Typography>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="right" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>

            <Accordion
              classes={{ root: `${classes.accordionContainer} ${classes.parallelWalletCard}` }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/parallelchain/parallelchain-logo-white.svg"
                        alt="ParallelChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        ParallelWallet
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="In development" className={classes.WalletChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbar
                      value={80}
                      text={`${80}%`}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        fontFamily: 'Poppins',
                        pathColor: 'white',
                      })}
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              >
                <Typography classes={{ root: classes.paragraph }}>
                  A ParallelChain-based multi-biometric crypto wallet
                  for secure storage and transfer of
                  XPLL, BTC, ETH and ERC-20 coins.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              classes={{ root: `${classes.accordionContainer} ${classes.voiceChainCard}` }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/voice_recog.svg"
                        alt="ParallelChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        Voice Recognition
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="In development" className={classes.VoiceChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbar
                      value={90}
                      text={`${90}%`}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        fontFamily: 'Poppins',
                        pathColor: 'white',
                      })}
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              >
                <Typography classes={{ root: classes.paragraph }}>
                  A deep-learning voice recognition system that
                  identifies users based on passphrase and speech patterns.
                </Typography>
              </AccordionDetails>
            </Accordion>

          </FadeIn>
        )}
      />
      <Typography variant="h5" className={classes.paragraph}>
        In the pipeline
      </Typography>
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="left" className={classes.titleContainer} in={boxIn} boxRef={boxRef}>
            <Accordion
              classes={{ root: `${classes.accordionContainer} ${classes.chattelChainCard}` }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/chattelchain/chattelchain-logo-white.svg"
                        alt="ChattelChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        ChattelChain
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="Defined" className={classes.ChattleChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbar
                      value={100}
                      // text={`${100}%`}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: 'white',
                      })}
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
            </Accordion>
            <Accordion
              expanded={false}
              classes={{ root: `${classes.accordionContainer} ${classes.preventiveChainCard}` }}
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/preventivechain/preventivechain-logo-white.svg"
                        alt="PreventiveChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        PreventiveChain 3.0
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="Defined" className={classes.PreventiveChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbar
                      value={100}
                      // text={`${100}%`}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: 'white',
                      })}
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              />
            </Accordion>
            <Accordion
              expanded={false}
              classes={{ root: `${classes.accordionContainer} ${classes.whiteLabelChainCard}` }}
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/utility_exchange.svg"
                        alt="PreventiveChain"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        Utility Exchange and White Label Exchange
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="Defined" className={classes.KYCChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbar
                      value={100}
                      // text={`${100}%`}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: 'white',
                      })}
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              />
            </Accordion>
            <Accordion
              expanded={false}
              classes={{ root: `${classes.accordionContainer} ${classes.antiMoneyLaunderingChainCard}` }}
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{
                  root: classes.accordionSummaryRoot,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={2} xs={2}>
                    <div className={classes.cardLogoFlex}>
                      <img
                        src="/images/aml.svg"
                        alt="Anti-Money Laundering"
                        className={`${classes.logoImage}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={7} xs={8}>
                    <div className={classes.titleFlexContainer}>
                      <Typography variant="h5" className={classes.cardTitleText}>
                        Ultra-fast Anti-money Laundering Analysis
                      </Typography>
                      <div className={classes.chipContainer}>
                        <Chip label="Defined" className={classes.AMLChip} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2} xs={2}>
                    <CircularProgressbar
                      value={100}
                      // text={`${100}%`}
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: 'white',
                      })}
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                classes={{ root: classes.accordionDetails }}
              />
            </Accordion>
          </FadeIn>
        )}
      />
    </div>
  );
}
