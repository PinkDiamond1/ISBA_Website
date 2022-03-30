import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';

const useStyles = makeStyles((theme) => ({
  accordion: {
    borderBottom: `1px solid ${theme.palette.neutral.gray}`,
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
    minHeight: '56px',
  },
  accordionDetails: {
    display: 'block',
    padding: `${theme.spacing(2)}px`,
  },
  paragraph: {
    fontWeight: 100,
    marginBottom: `${theme.spacing(2)}px`,
    color: (bright) => (bright ? '#fff' : '#0c2454'),
  },
  expandIcon: {
    color: theme.palette.primary.main,
  },
  titleText: {
    marginBottom: `${theme.spacing(6)}px`,
    color: (bright) => (bright ? '#fff' : '#0c2454'),
    textAlign: 'center',
  },
  heading: {
    color: (bright) => (bright ? '#fff' : '#0c2454'),
    fontWeight: 'bold',
  },
  image: {
    display: (bright) => (bright ? 'flex' : 'none'),
    justifyContent: 'center',
    marginBottom: 10,
  },
}));

export default function DTTFaqsPanel(props) {
  let { bright } = props;
  bright = typeof bright === 'undefined' ? false : bright;
  const classes = useStyles(bright);

  return (
    <Section spacingBottom={10} classes={{ root: classes.container }}>
      <Typography variant="h4" classes={{ root: classes.titleText }}>
        Frequently Asked Questions
      </Typography>
      <div className={classes.borderBox}>
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
            <Typography variant="subtitle2" className={classes.heading}>How many XPLL do I need to stake to run a validator node?</Typography>
          </AccordionSummary>
          <AccordionDetails
            classes={{ root: classes.accordionDetails }}
          >
            <Typography variant="body2" classes={{ root: classes.paragraph }}>
              You will need to stake at least 500,000 XPLL to run a node.
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
            <Typography variant="subtitle2" className={classes.heading}>When will presale end? How do I participate?</Typography>
          </AccordionSummary>
          <AccordionDetails
            classes={{ root: classes.accordionDetails }}
          >
            <Typography variant="body2" classes={{ root: classes.paragraph }}>
              Presale supply is limited, the sale will end once it’s sold out. Send your
              application <a href="/xpll/get" style={{ color: '#38a5c9' }}>here</a>, good luck!
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
            <Typography variant="subtitle2" className={classes.heading}>What is the total supply of XPLL and how many are allocated for
              presales?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            classes={{ root: classes.accordionDetails }}
          >
            <Typography variant="body2" classes={{ root: classes.paragraph }}>
              250,000,000
              tokens are created at genesis, and the presale supply is
              limited to no more than half of that.
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
            <Typography variant="subtitle2" className={classes.heading}>Are there any other ways to get XPLL before listing?</Typography>
          </AccordionSummary>
          <AccordionDetails
            classes={{ root: classes.accordionDetails }}
          >
            <Typography variant="body2" classes={{ root: classes.paragraph }}>
              Follow us on <a href=" https://twitter.com/ParallelChainLB" style={{ color: '#38a5c9' }}>Twitter</a>
              {' '} and <a href="https://t.me/parallelchainofficial" style={{ color: '#38a5c9' }}>Telegram</a> to watch out for future events
              where you might get some XPLL for free!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          classes={{ root: classes.accordionLast }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            classes={{
              root: classes.accordionSummaryRoot,
            }}
          >
            <Typography variant="subtitle2" className={classes.heading}>I have more questions, where do I go?</Typography>
          </AccordionSummary>
          <AccordionDetails
            classes={{ root: classes.accordionDetails }}
          >
            <Typography variant="body2" classes={{ root: classes.paragraph }}>
              You may find the answers from our community on <a href="https://t.me/parallelchainofficial" style={{ color: '#38a5c9' }}>Telegram</a>. If not,
              drop us an email: <a href="mailto:xpll@parallelchain.io" style={{ color: '#38a5c9' }}>xpll@parallelchain.io</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Section>
  );
}
