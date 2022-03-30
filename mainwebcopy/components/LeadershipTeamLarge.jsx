import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const memberInfo = {
  'ian-huang': {
    bio: [
      `Ian Huang is an infrastructure technologist, with career journey
      included Tektronix, Northrop Grumman, Shugart, DEC and Hughes Network Systems.`,
      `Ian also contributed to the inventions of real-time multi-tasked OS, semiconductor design, dataflow & reduced instruction set
      CPU designs, multi-threaded I/O, deterministic and stochastic network protocol, and integration of synchronized and asynchronized systems,
      in TekDOS, Priority Sectoring Processor for the USAF A-10 Thunderbolt, SCSI, RISC, FDDI, ATM Switch and Ethernet/VPN Switch.`,
    ],
  },
  'geoff-yuen': {
    bio: [
      `Dr. Yuen oversees A.I. development at ParallelChain. 
      He began his scientific journey as Principal Investigator in 
      Neuroscience Engineering Lab, US Office of Naval Research. 
      Having spent years in spearheading emerging technology in 
      telecom and investment industries, Dr. Yuen is well-versed 
      in capturing the business value of new technologies.`,
      `Dr. Yuen holds a PhD in Biomedical 
      Engineering (Neuroscience) from 
      Case Western Reserve University.`,
    ],
  },
  'kelvin-lam': {
    bio: [
      `Kelvin is a lead engineer specializing
      in algorithm design and latency-sensitive 
      applications. His career spans from serving as 
      software engineer at Thomson Reuters to being a game 
      developer managing the full lifecycle of applications.`,
      `Kelvin holds a Bachelor of Science 
      in Computer Science from the City University of Hong Kong.`,
    ],
  },
  'clayton-mak': {
    bio: [
      `Clayton is a marketer with experience working 
      in tech-savvy companies such as Tesla and CryptoSX. 
      He brings to ParallelChain valuable knowledge and first-hand 
      experience in the operations, product management and KYC/AML 
      management at a digital assets exchange.`,
      'Clayton holds a Bachelor of Science from the University of Melbourne.',
    ],
  },
  'jessie-chan': {
    bio: [
      `Jessie coordinates and aligns the diverse business 
        lines of ParallelChain, including liaison with partners 
        and customers. Coming from a background in public policy 
        research and development, Jessie brings political 
        insight to help ParallelChain anticipate and navigate 
        the changing regulatory landscape.`,
      `Jessie holds a Master of Science in Policy 
        Studies from the University of Edinburgh.`,
    ],
  },
};

const useStyles = makeStyles((theme) => ({
  teamImageContainer: {
    marginBottom: `${theme.spacing(2)}px`,
    position: 'relative',
    display: 'flex',
    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
    // height: '150px',
    [theme.breakpoints.up('sm')]: {
      height: '155px',
    },
    [theme.breakpoints.up('md')]: {
      height: '350px',
    },
    pointerEvents: 'none',
    justifyContent: 'center',
  },
  teamImage: {
    marginBottom: `${theme.spacing(2)}px`,
    border: '1px solid #027D6F',
    padding: `${theme.spacing(1)}px`,
    display: 'block',
    width: '150px',
    height: '250px',
    [theme.breakpoints.up('sm')]: {
      width: '155px',
      height: '155px',
      borderRadius: '90px',
    },
    [theme.breakpoints.up('md')]: {
      width: '250px',
      height: '350px',
      borderRadius: '20px',
    },
    pointerEvents: 'none',
  },
  teamCategoryContainer: {
    marginTop: `${theme.spacing(0.5)}px`,
    marginBottom: `${theme.spacing(6)}px`,
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: '2',
    alignItems: 'baseline',
    [theme.breakpoints.up('lg')]: {
      flexWrap: 'nowrap',
    },
    transition: '2s',
  },
  teambioContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '250px',
  },
  teamTextContainer: {
    marginBottom: `${theme.spacing(2)}px`,
    padding: `${theme.spacing(1)}px`,
    display: 'block',
    pointerEvents: 'none',
  },
  nameTitle: {
    color: '#0C2454',
    fontWeight: 700,
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 700,
    textAlign: 'center',
  },
  contentText: {
    animation: `$fadeDown 2000ms ${theme.transitions.easing.easeInOut}`,
    animationDelay: '800ms',
    animationFillMode: 'both',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: '400px',
    },
    [theme.breakpoints.up('md')]: {
      width: '600px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '800px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '1000px',
    },
  },
  '@keyframes fadeDown': {
    from: {
      opacity: 0,
      transform: 'translateX(40px)',
    },

    to: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
  },
  '@keyframes fadeDownReverse': {
    from: {
      opacity: 1,
      transform: 'translateX(0px)',
    },

    to: {
      opacity: 0,
      transform: 'translateX(40px)',
    },
  },
}));

export default function LeadershipTeam() {
  const classes = useStyles();
  const [teamBio, setTeamBio] = useState(0);
  const [teamImage, setTeamImage] = useState(0);
  //   const theme = useTheme();
  //   const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));
  //   const mediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
  //   const largeOrLarger = useMediaQuery(theme.breakpoints.up('lg'));
  //   const xlargeOrxLarger = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Grid container classes={{ root: classes.teamCategoryContainer }}>
      {(teamImage === 0 || teamImage === 1) && (
        <Grid
          item
          xs={12}
          md={4}
          xl={2}
          classes={{ root: classes.teambioContainer }}
          onClick={() => {
            if (teamImage === 0) {
              setTeamBio(1);
              setTeamImage(1);
            } else {
              setTeamBio(0);
              setTeamImage(0);
            }
          }}
        >
          <div>
            <div className={classes.teamImageContainer}>
              <img
                src="/images/leadership/team/ian_new.jpg"
                className={classes.teamImage}
                alt="Ian HUANG"
              />
            </div>
            <div className={classes.teamTextContainer}>
              <Typography variant="h5" classes={{ root: classes.nameTitle }}>
                Ian HUANG
              </Typography>
              <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
                CEO
              </Typography>
            </div>
          </div>
          <Collapse
            in={(teamBio === 1)}
            style={{ marginLeft: '16px' }}
          >
            {(memberInfo['ian-huang'].bio.map((para) => (
              <>
                <Typography variant="h6" className={classes.contentText}> {para} </Typography>
                <br />
              </>
            )))}
          </Collapse>
        </Grid>
      )}
      {(teamImage === 0 || teamImage === 2)
        && (
          <Grid
            item
            xs={12}
            md={4}
            xl={2}
            classes={{ root: classes.teambioContainer }}
            onClick={() => {
              if (teamImage === 0) {
                setTeamBio(2);
                setTeamImage(2);
              } else {
                setTeamBio(0);
                setTeamImage(0);
              }
            }}
          >
            <div>
              <div className={classes.teamImageContainer}>
                <img
                  src="/images/leadership/team/geoff_new.jpg"
                  className={classes.teamImage}
                  alt="Geoffrey YUEN"
                />
              </div>
              <Typography variant="h5" classes={{ root: classes.nameTitle }}>
                Dr. Geoffrey YUEN
              </Typography>
              <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
                Chief Scientist
              </Typography>
            </div>
            <Collapse
              in={(teamBio === 2)}
              style={{ marginLeft: '16px' }}
            >
              {(memberInfo['geoff-yuen'].bio.map((para) => (
                <>
                  <Typography variant="h6" className={classes.contentText}> {para} </Typography>
                  <br />
                </>
              )))}
            </Collapse>
          </Grid>
        )}
      {(teamImage === 0 || teamImage === 3) && (
        <Grid
          item
          xs={12}
          md={4}
          xl={2}
          classes={{ root: classes.teambioContainer }}
          onClick={() => {
            if (teamImage === 0) {
              setTeamBio(3);
              setTeamImage(3);
            } else {
              setTeamBio(0);
              setTeamImage(0);
            }
          }}
        >
          <div>
            <div className={classes.teamImageContainer}>
              <img
                src="/images/leadership/team/jessie_new.jpg"
                className={classes.teamImage}
                alt="Jessie CHAN"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Jessie CHAN
              {' '}
            </Typography>
            <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
              Chief of Staff
            </Typography>
          </div>
          <Collapse
            in={(teamBio === 3)}
            style={{ marginLeft: '16px' }}
          >
            {(memberInfo['jessie-chan'].bio.map((para) => (
              <>
                <Typography variant="h6" className={classes.contentText}> {para} </Typography>
                <br />
              </>
            )))}
          </Collapse>
        </Grid>
      )}
      {(teamImage === 0 || teamImage === 4) && (
        <Grid
          item
          xs={12}
          md={4}
          xl={2}
          classes={{ root: classes.teambioContainer }}
          onClick={() => {
            if (teamImage === 0) {
              setTeamBio(4);
              setTeamImage(4);
            } else {
              setTeamBio(0);
              setTeamImage(0);
            }
          }}
        >
          <div>
            <div className={classes.teamImageContainer}>
              <img
                src="/images/leadership/team/kelvin_new.jpg"
                className={classes.teamImage}
                alt="Kevin LAM"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Kelvin LAM
            </Typography>
            <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
              Senior Staff Engineer
            </Typography>
          </div>
          <Collapse
            in={(teamBio === 4)}
            style={{ marginLeft: '16px' }}
          >
            {(memberInfo['kelvin-lam'].bio.map((para) => (
              <>
                <Typography variant="h6" className={classes.contentText}> {para} </Typography>
                <br />
              </>
            )))}
          </Collapse>
        </Grid>
      )}
      {(teamImage === 0 || teamImage === 5) && (
        <Grid
          item
          xs={12}
          md={4}
          xl={2}
          classes={{ root: classes.teambioContainer }}
          onClick={() => {
            if (teamImage === 0) {
              setTeamBio(5);
              setTeamImage(5);
            } else {
              setTeamBio(0);
              setTeamImage(0);
            }
          }}
        >
          <div>
            <div className={classes.teamImageContainer}>
              <img
                src="/images/leadership/team/clayton_new.jpg"
                className={classes.teamImage}
                alt="Clayton MAK"
              />
            </div>
            <Typography variant="h5" classes={{ root: classes.nameTitle }}>
              Clayton MAK
              {' '}
            </Typography>
            <Typography variant="h5" classes={{ root: classes.title }} gutterBottom>
              Director of Product Management
            </Typography>
          </div>
          <Collapse
            in={(teamBio === 5)}
            style={{ marginLeft: '16px' }}
          >
            {(memberInfo['clayton-mak'].bio.map((para) => (
              <>
                <Typography variant="h6" className={classes.contentText}> {para} </Typography>
                <br />
              </>
            )))}
          </Collapse>
        </Grid>
      )}
    </Grid>
  );
}
