import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { mdiAccountAlertOutline } from '@mdi/js';
import { mdiLockOpenAlertOutline } from '@mdi/js';
import { mdiCardAccountDetailsOutline } from '@mdi/js';
import { mdiCalendarClock } from '@mdi/js';
import { mdiAccountQuestionOutline } from '@mdi/js';
import { mdiDatabaseAlertOutline } from '@mdi/js';
import Section from '../Section';
import FutureProblemCard from './ProblemCard';
import FutureSolutionCard from './SolutionCard';
import FutureProblemSolutionArrow from './ProblemSolutionArrow';
import ParallelChainExpandButton from '../ecosystems-and-solutions/expand-button/ParallelChainExpandButton';
import PreventiveChainExpandButton from '../ecosystems-and-solutions/expand-button/PreventiveChainExpandButton';
import EkycChainExpandButton from '../ecosystems-and-solutions/expand-button/EkycChainExpandButton';
import ChattelChainExpandButton from '../ecosystems-and-solutions/expand-button/ChattelChainExpandButton';
import ApprovalChainExpandButton from '../ecosystems-and-solutions/expand-button/ApprovalChainExpandButton';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    backgroundColor: '#fafafa',
    color: theme.palette.neutral.dark,
  },
  titleContainer: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  titleBody: {
    fontWeight: 400,
    color: 'black'
  },
  expandContainer: {
    display: 'flex',
    marginTop: `${theme.spacing(2)}px`,
  },
  image: {
    display: 'block',
    margin: '0 auto',
    height: '80px',
    marginBottom: `${theme.spacing(2)}px`,
    pointerEvents: 'none',
  },
  emphasisText: {
    fontWeight: 500,
  },
  emphasisBodyText: {
    fontWeight: 'bold',
  },
  problemSolutionContainer: {
    '&>*': {
      margin: `${theme.spacing(2)}px 0`,
    },
  },
  problemTitleP: {
    display: 'block',
    color: theme.palette.primary.dark,
    textAlign: 'center',
    fontWeight: 'light',
  },
  problemTitle: {
    color: theme.palette.primary.dark,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: `${theme.spacing(2)}px`,
  },
  problemBody: {
    fontWeight: 100,
    color: theme.palette.primary.dark,
    textAlign: 'center',
  },
  solutionTitle: {
    color: theme.palette.primary.dark,
    fontWeight: '100',
    marginTop: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(2)}px`,
  },
  solutionBody: {
    fontWeight: 100,
    color: theme.palette.primary.dark,
  },
  callToActionText: {
    marginTop: `${theme.spacing(14)}px`,
    textAlign: 'center',
  },
  scheduleConsultationText: {
    color: theme.palette.future.accent,
    verticalAlign: 'center',
    cursor: 'pointer',
  },
  sectionContainer: {
    marginTop: '-10vh',
    paddingTop: '10vh',
  },
  overTitleText: {
    color: '#027D6F',
  },
  titleText: {
    color: theme.palette.neutral.dark,
  },
}));

export default function FutureApplicationsPanel() {
  const classes = useStyles();

  return (
    <Section
      spacingBottom={15}
      className={classes.container}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef} className={classes.titleContainer}>
            <Typography variant="h3" classes={{ root: classes.overTitleText }}>
              Unleashing Blockchain For Business
            </Typography>
            <Typography variant="h2" classes={{ root: classes.titleText }}>
              Bringing Blockchain to Bear on the World's Hardest Challenges
            </Typography>
          </FadeIn>
        )}
      />
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn variant="up" in={boxIn} boxRef={boxRef} className={classes.titleContainer}>
            <Typography display="block" variant="h3" className={classes.titleBody}>
              Held back by critical technological limitations, blockchain has failed to deliver
              on its commercial promise.
            </Typography>
            <br />
            <Typography display="block" variant="h3" className={classes.titleBody}>
              Our vision is to fulfil that promise.
            </Typography>
            <br />
            <Typography display="inline" variant="h3" className={classes.titleBody}>
              The ParallelChain® ecosystem is the only decentralized network with tailor-made
              applications that satisfy all information technology requirements in today's digital age.
            </Typography>
          </FadeIn>
        )}
      />
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} lg={4} classes={{ root: classes.problemSolutionContainer }}>
          <div className={classes.sectionContainer} id="data-leak-prevention">
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <FutureProblemCard>
                    <Icon path={mdiAccountAlertOutline} color="#0c2454" size={3} className={classes.image} />
                    {/*<img src="/images/ecosystems-and-solutions/insider-threats-white.svg" alt="cyber-threats" className={classes.image} />*/}
                    <Typography variant="body2" className={classes.problemTitleP}>
                      Challenge #1:
                    </Typography>
                    <Typography variant="h6" className={classes.problemTitle}>
                    Insider threats
                    </Typography>
                    <Typography variant="body2" className={classes.problemBody}>
                      Outside-facing protections do not work when cyber threats come from within an
                      organization.
                    </Typography>
                  </FutureProblemCard>
                </FadeIn>
              )}
            />
          </div>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureProblemSolutionArrow />
              </FadeIn>
            )}
          />
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureSolutionCard backgroundColor="linear-gradient(90deg, #d53369 0%, #daae51 100%)">
                <div className={classes.expandContainer}>
                  <PreventiveChainExpandButton />
                </div>
                  <Typography variant="h6" className={classes.solutionTitle}>
                    <b>PreventiveChain</b> solves this.
                  </Typography>
                  <Typography variant="body2" className={classes.solutionBody}>
                    3D face ID biometrics with anti-spoofing tracks users in real time,
                    while AI warns administrators if it suspects malicious activity.
                    Captured data is persisted in ParallelChain®.
                  </Typography>
                </FutureSolutionCard>
              </FadeIn>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4} classes={{ root: classes.problemSolutionContainer }}>
          <div className={classes.sectionContainer} id="work-from-home">
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <FutureProblemCard>
                  <Icon path={mdiLockOpenAlertOutline} color="#0c2454" size={3} className={classes.image} />
                    {/*
                    <img src="/images/ecosystems-and-solutions/home-access-white.svg" alt="Home access" className={classes.image} />
                    */}
                    <Typography variant="body2" className={classes.problemTitleP}>
                      Challenge #2:
                    </Typography>
                    <Typography variant="h6" className={classes.problemTitle}>
                      Data protection under work-from-home
                    </Typography>
                    <Typography variant="body2" className={classes.problemBody}>
                      Productive &apos;Work From Home&apos; invariably necessitates
                      moving sensitive company data out of the office,
                      increasing the risk of data leaks.
                    </Typography>
                  </FutureProblemCard>
                </FadeIn>
              )}
            />
          </div>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureProblemSolutionArrow />
              </FadeIn>
            )}
          />
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureSolutionCard backgroundColor="linear-gradient(90deg, #d53369 0%, #daae51 100%)">
                <div className={classes.expandContainer}>
                    <PreventiveChainExpandButton />
                  </div>
                  <Typography variant="h6" className={classes.solutionTitle}>
                    <b>PreventiveChain</b> solves this.
                  </Typography>
                  <Typography variant="body2" className={classes.solutionBody}>
                    PreventiveChain authenticates the current user of the computer and
                    blocks data extraction and screen
                    capture. Captured data is immutably persisted in ParallelChain®.
                  </Typography>
                </FutureSolutionCard>
              </FadeIn>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4} classes={{ root: classes.problemSolutionContainer }}>
          <div className={classes.sectionContainer} id="kyc-compliance">
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <FutureProblemCard>
                  <Icon path={mdiCardAccountDetailsOutline} color="#0c2454" size={3} className={classes.image} />
                    {/*
                    <img src="/images/ecosystems-and-solutions/sensitive-medical-info-white.svg" alt="Sensitive medical info" className={classes.image} />
                    */}
                    <Typography variant="body2" className={classes.problemTitleP}>
                      Challenge #3:
                    </Typography>
                    <Typography variant="h6" className={classes.problemTitle}>
                      Time-consuming and error-prone KYC process
                    </Typography>
                    <Typography variant="body2" className={classes.problemBody}>
                      Institutions struggle to perform KYC efficiently and keep the KYC data
                      updated and protected.
                    </Typography>
                  </FutureProblemCard>
                </FadeIn>
              )}
            />
          </div>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureProblemSolutionArrow />
              </FadeIn>
            )}
          />
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureSolutionCard backgroundColor="linear-gradient(90deg, #d53369 0%, #daae51 100%)">
                <div className={classes.expandContainer}>
                    <EkycChainExpandButton />
                    <PreventiveChainExpandButton />
                  </div>
                  <Typography variant="h6" className={classes.solutionTitle}>
                    <b>eKYC-Chain</b> and <b>PreventiveChain</b> solve this.
                  </Typography>
                  <Typography variant="body2" className={classes.solutionBody}>
                    eKYC-Chain digitizes the KYC process and achieves higher efficiency and
                    reliability with anti-spoofing facial recognition, real-time selfie-to-photo-ID
                    matching, KYC data management. Coupled with PreventiveChain, KYC
                    officers can perform their duties even when working from home.
                  </Typography>
                </FutureSolutionCard>
              </FadeIn>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4} classes={{ root: classes.problemSolutionContainer }}>
          <div className={classes.sectionContainer} id="trade-settlement">
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <FutureProblemCard>
                  <Icon path={mdiCalendarClock} color="#0c2454" size={3} className={classes.image} />
                    {/*
                    <img src="/images/ecosystems-and-solutions/slow-trading-white.svg" alt="Slow trading" className={classes.image} />
                    */}
                    <Typography variant="body2" className={classes.problemTitleP}>
                      Challenge #4:
                    </Typography>
                    <Typography variant="h6" className={classes.problemTitle}>
                      Slow settlement times
                    </Typography>
                    <Typography variant="body2" className={classes.problemBody}>
                      To meet acceptable security standards, stock trades have to go through a long
                      settlement process.
                    </Typography>
                  </FutureProblemCard>
                </FadeIn>
              )}
            />
          </div>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureProblemSolutionArrow />
              </FadeIn>
            )}
          />
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureSolutionCard backgroundColor="linear-gradient(90deg, #d53369 0%, #daae51 100%)">
                  <div className={classes.expandContainer}>
                    <ChattelChainExpandButton />
                  </div>
                  <Typography variant="h6" className={classes.solutionTitle}>
                    <b>ChattelChain</b> solves this.
                  </Typography>
                  <Typography variant="body2" className={classes.solutionBody}>
                    High throughput on the ParallelChain® protocol and smart contracts
                    on ChattelChain bring instant settlement trading compliant with
                    international security standards.
                  </Typography>
                </FutureSolutionCard>
              </FadeIn>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4} classes={{ root: classes.problemSolutionContainer }}>
          <div className={classes.sectionContainer} id="workplace-accountability">
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <FutureProblemCard>
                  <Icon path={mdiAccountQuestionOutline} color="#0c2454" size={3} className={classes.image} />
                    {/*
                    <img src="/images/ecosystems-and-solutions/disagreement-process-management-white.svg" alt="Disagreement in process management" className={classes.image} />
                    */}
                    <Typography variant="body2" className={classes.problemTitleP}>
                      Challenge #5:
                    </Typography>
                    <Typography variant="h6" className={classes.problemTitle}>
                      Lack of workplace accountability
                    </Typography>
                    <Typography variant="body2" className={classes.problemBody}>
                      Parties working on a single project disagree about who is
                      responsible for the successful completion of tasks, or failure
                      to meet requirements.
                    </Typography>
                  </FutureProblemCard>
                </FadeIn>
              )}
            />
          </div>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureProblemSolutionArrow />
              </FadeIn>
            )}
          />
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureSolutionCard backgroundColor="linear-gradient(90deg, #d53369 0%, #daae51 100%)">
                <div className={classes.expandContainer}>
                    <ApprovalChainExpandButton />
                    <eKYCChainExpandButton />
                  </div>
                  <Typography variant="h6" className={classes.solutionTitle}>
                    <b>ApprovalChain</b> solves this.
                  </Typography>
                  <Typography variant="body2" className={classes.solutionBody}>
                    Each activity in a process is immutably documented in ParallelChain®,
                    while the ApprovalChain app ensures that tasks are signed off as completed per
                    requirement only when agreement is reached.
                  </Typography>
                </FutureSolutionCard>
              </FadeIn>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4} classes={{ root: classes.problemSolutionContainer }}>
          <div className={classes.sectionContainer} id="data-security">
            <MagicBox
              render={(boxIn, boxRef) => (
                <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                  <FutureProblemCard>
                  <Icon path={mdiDatabaseAlertOutline} color="#0c2454" size={3} className={classes.image} />
                    {/*
                    <img src="/images/ecosystems-and-solutions/data-acidents.svg" alt="Persisting data" className={classes.image} />
                    */}
                    <Typography variant="body2" className={classes.problemTitleP}>
                      Challenge #6:
                    </Typography>
                    <Typography variant="h6" className={classes.problemTitle}>
                      Data are lost due to accidents or malicious activity
                    </Typography>
                    <Typography variant="body2" className={classes.problemBody}>
                      Data generated by vehicles or IoT systems become irretrievable when the
                      physical devices are lost or damaged, while cloud solutions leave the data
                      tampering issue unsolved.
                    </Typography>
                  </FutureProblemCard>
                </FadeIn>
              )}
            />
          </div>
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureProblemSolutionArrow />
              </FadeIn>
            )}
          />
          <MagicBox
            render={(boxIn, boxRef) => (
              <FadeIn variant="up" in={boxIn} boxRef={boxRef}>
                <FutureSolutionCard backgroundColor="linear-gradient(90deg, #d53369 0%, #daae51 100%)">
                <div className={classes.expandContainer}>
                    <ParallelChainExpandButton />
                </div>
                  <Typography variant="h6" className={classes.solutionTitle}>
                    <b>ParallelChain®</b> solves this.
                  </Typography>
                  <Typography variant="body2" className={classes.solutionBody}>
                    ParallelChain® provides immutable persistence of data, representing a
                    ‘virtual black-box’ that is undamageable and tamper-proof.
                  </Typography>
                </FutureSolutionCard>
              </FadeIn>
            )}
          />
        </Grid>
      </Grid>
    </Section>
  );
}
