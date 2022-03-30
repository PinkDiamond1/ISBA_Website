/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useBackdrop } from 'use-backdrop';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MagicBox from '../MagicBox';
import FadeIn from '../FadeIn';
import PWThemeSection from '../PWThemeSection';
import Section from '../Section';

const quotes = [
  {
    name: 'Dr. Radia Perlman',
    photo: '/images/index/dr-radia-perlman.svg',
    rectphoto: '/images/index/dr-radia-rect.svg',
    titles: [
      'Mother of the Internet',
      'US National Inventor Hall of Fame 2016',
      'US Academy of Engineering 2015',
      'Internet Hall of Fame 2014',
      'PhD, Massachussetts Institute of Technology',
    ],
    quote: `
      "ParallelChain Lab saw the insufficiencies of past-generation blockchains, and designed a network from the ground up with an impressive transaction speed and unlimited scalability."
    `,
  },
  {
    name: 'Anand Chandrasekher',
    photo: '/images/index/anand.svg',
    rectphoto: '/images/index/anand-rect.svg',
    titles: [
      'Fmr. Senior Vice President, Worldwide Sales & Marketing, Intel',
      'Fmr. Chief Marketing Officer, Qualcomm',
      'MS, MBA, Cornell University',
    ],
    quote: `
      "Congratulations to ParallelChain Lab for successfully innovating a seamless blockchain ecosystem capable of truly solving real-world problems."
    `,
  },
  {
    name: 'Dr. Dileep Bhandarkar',
    photo: '/images/index/dileep_bhandarkar.svg',
    rectphoto: '/images/index/dr-dileep-rect.svg',
    titles: [
      'Fmr. Vice President of Technology, Qualcomm (San Diego)',
      'Fmr. Director of Advanced Architecture at Intel',
      'PhD, Carnegie Mellon University',
    ],

    quote: `
      "ParallelChain Lab has created a breakthrough in blockchain technology that provides scalable transaction performance unmatched by others."
    `,
  },
  {
    name: 'Charlie Kaufman',
    photo: '/images/index/charlie-kaufman.svg',
    rectphoto: '/images/index/charlie-rect.svg',
    titles: [
      'Former Chief Network Security Architect,',
      'Microsoft Azure and IBM Lotus Notes / Domino',
      'MS, Dartmouth College',
    ],
    quote: `
      "I was impressed by the ParallelChain Lab team’s simple solution in proving a blockchain’s immutability, which, along with transparency, constitutes the foundation of blockchain technology."
    `,
  },

  {
    name: 'Richard H. L. Cheung​',
    photo: '/images/index/hl-cheung.svg',
    rectphoto: '/images/index/richard-rect.svg',
    titles: [
      'Fmr. Senior Vice President and General Manager, Apple US',
      'Fmr. General Manager, Foxconn Technology (China)​',
    ],
    quote: `
      "ParallelChain Lab is a truly innovative technology and product, which reminds me of the early days of Apple."
    `,
  },
  {
    name: 'Prof. Raj Jain​',
    photo: '/images/index/dr-raj-jain.svg',
    rectphoto: '/images/index/raj-rect.svg',
    titles: [
      'Barbara J. & Jerome R. Cox, Jr. Professor of Computer Science​, Washington University (St. Louis)​',
      'Fmr. Lecturer at Massachussetts Institute of Technology',
      'PhD, Harvard University',
    ],
    quote: `
      "Blockchain is the digital enabler for a shared and decentralized economy. With its ultra-high throughput, low latency, unlimited scalability and privacy compliance, ParallelChain Lab has made this a reality." 
    `,
  },

];

const useStyles = makeStyles((theme) => ({
  panelContainer: {
    width: '100vw',
    height: 'auto',
  },
  titleText: {
    marginBottom: `${theme.spacing(2)}px`,
    textAlign: 'left',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      marginBottom: `${theme.spacing(-2)}px`,
      paddingLeft: `${theme.spacing(4)}px`,
    },

  },
  overtitle: {
    color: '#546563',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: `${theme.spacing(4)}px`,
    },
  },
  subTitleText: {
    fontWeight: '300',
    textAlign: 'left',
    color: 'black',
    paddingBottom: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(4)}px`,
    marginTop: `${theme.spacing(4)}px`,
  },
  quoteTitleText: {
    fontWeight: '400',
    fontSize: '0.8rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      color: '#546563',
      fontWeight: '400',
    },
  },
  nameText: {
    fontWeight: '700',
    textAlign: 'center',
    color: '#546563',
    paddingBottom: `${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      fontWeight: '700',
      textAlign: 'left',
      fontSize: '1.0rem',
    },
  },
  container: {
    height: '600px',
    [theme.breakpoints.up('sm')]: {
      height: '500px',
    },
    [theme.breakpoints.up('md')]: {
      height: '350px',
    },
  },
  quoteCard: {
    backgroundColor: 'white',
    padding: `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(10)}px ${theme.spacing(22)}px`,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '400px',
    boxShadow: '2px 2px 2px #ccc',
  },
  quoteCardMobile: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: `${theme.spacing(3)}px`,
    margin: `0px ${theme.spacing(3)}px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '1.2px 1.2px 1.2px 1.2px #D3D3D3',
  },
  closeButton: {
    backgroundColor: 'rgba(175, 175, 175, 0.7)',
    marginTop: `${theme.spacing(6)}px`,
    marginBottom: `${theme.spacing(1)}px`,
  },
  avatarInactive: {
    width: '128px',
    height: 'auto',
    border: '8px solid #ccc',
    borderRadius: '64px',
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
      width: '130px',
      position: 'relative',
      opacity: 1,
    },
  },
  cardAvatarSmall: {
    width: '150px',
    height: '150px',
    margin: `${theme.spacing(4)}px`,
    border: '8px solid #ccc',
    borderRadius: '75px',
  },
  quoteContainer: {
    position: 'relative',
    padding: `${theme.spacing(5)}px ${theme.spacing(20)}px`,
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(5)}px ${theme.spacing(10)}px`,
    },
  },
  quoteImage: {
    position: 'absolute',
    height: '250px',
    left: '100px',
    top: '60px',
    [theme.breakpoints.down('md')]: {
      left: '10px',
      top: '60px',
    },
  },
  circleContainerBox: {
    position: 'absolute',
    left: '120px',
    top: '320px',
    [theme.breakpoints.down('md')]: {
      left: '40px',
      top: '320px',
    },

  },
  activeCircle: {
    backgroundColor: '#546563',
    borderRadius: '5px',
    width: '10px',
    height: '10px',
    margin: `${theme.spacing(1)}px`,
  },
  inactiveCircle: {
    backgroundColor: '#C7C8CA',
    borderRadius: '5px',
    width: '10px',
    height: '10px',
    margin: `${theme.spacing(1)}px`,
  },
  prevIcon: {
    position: 'absolute',
    top: '200px',
    left: '0px',
    opacity: 0.3,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      left: '-40px',
    },
    '&:hover': {
      opacity: 1,
    },
  },
  nextIcon: {
    position: 'absolute',
    top: '200px',
    right: '50px',
    opacity: 0.3,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      right: '30px',
    },
    '&:hover': {
      opacity: 1,
    },

  },
}));

export default function QuotesFromExpertPanelNew() {
  const theme = useTheme();
  const classes = useStyles();
  const [slide, setSlide] = useState(0);
  const smOrSmaller = useMediaQuery(theme.breakpoints.down('sm'));
  const { displayBackdrop } = useBackdrop();

  const displayQuote = (smslide) => displayBackdrop((closeBackdrop) => (
    <>
      <IconButton onClick={closeBackdrop} classes={{ root: classes.closeButton }}>
        <CloseIcon />
      </IconButton>
      <div className={classes.quoteCardMobile}>
        <Avatar src={quotes[smslide].photo} variant="circular" classes={{ root: classes.cardAvatarSmall }} />
        <div style={{ textAlign: 'left' }}>
          <Typography variant="h5" classes={{ root: classes.subTitleText }}>
            {quotes[smslide].quote}
          </Typography>
          <Typography classes={{ root: classes.nameText }}>
            {quotes[smslide].name}
          </Typography>

          { quotes[smslide].titles.map((title) => (
            <Typography classes={{ root: classes.quoteTitleText }}>{ title }</Typography>
          ))}
        </div>
      </div>
    </>
  ));
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((current) => (current === quotes.length - 1 ? 0 : current + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const mod = (a, b) => {
    const remain = a % b;
    return Math.floor(remain >= 0 ? remain : remain + b);
  };
  const prev = () => {
    setSlide(mod(slide - 1, 6));
  };
  const next = () => {
    setSlide(mod(slide + 1, 6));
  };

  return (
    <Section
      spacingTop={2}
      spacingBottom={2}
      className={classes.panelContainer}
    >
      <MagicBox
        render={(boxIn, boxRef) => (
          <FadeIn
            in={boxIn}
            boxRef={boxRef}
          >
            <Typography variant="h3" className={classes.overtitle}>
              Blockchain Done Right
            </Typography>
            <Typography variant="h2" classes={{ root: classes.titleText }}>
              What the Legends are Saying
            </Typography>
          </FadeIn>
        )}
      />
      {!smOrSmaller
      && (
      <div className={classes.quoteContainer}>
        <img
          className={classes.prevIcon}
          src="/images/index/left.svg"
          alt="prev"
          onClick={() => { prev(); }}
        />
        <img
          className={classes.nextIcon}
          src="/images/index/right.svg"
          alt="next"
          onClick={() => { next(); }}
        />
        <img src={quotes[slide].rectphoto} alt="Slide" className={classes.quoteImage} />
        <div className={classes.circleContainerBox}>
          <div className={classes.circleContainer}>
            <div
              className={slide === 0 ? classes.activeCircle : classes.inactiveCircle}
              onClick={() => setSlide(0)}
            />
            <div
              className={slide === 1 ? classes.activeCircle : classes.inactiveCircle}
              onClick={() => setSlide(1)}
            />
            <div
              className={slide === 2 ? classes.activeCircle : classes.inactiveCircle}
              onClick={() => setSlide(2)}
            />
            <div
              className={slide === 3 ? classes.activeCircle : classes.inactiveCircle}
              onClick={() => setSlide(3)}
            />
            <div
              className={slide === 4 ? classes.activeCircle : classes.inactiveCircle}
              onClick={() => setSlide(4)}
            />
            <div
              className={slide === 5 ? classes.activeCircle : classes.inactiveCircle}
              onClick={() => setSlide(5)}
            />
          </div>
        </div>

        <div className={classes.quoteCard}>
          <div style={{ textAlign: 'left', color: '#546563' }}>
            <Typography variant="h5" classes={{ root: classes.subTitleText }}>
              {quotes[slide].quote}
            </Typography>
            <Typography variant="h5" classes={{ root: classes.nameText }} style={{ textAlign: 'left' }}>
              {quotes[slide].name}
            </Typography>

            { quotes[slide].titles.map((title, index) => (
              <Typography key={index} className={classes.quoteTitleText}>{ title }</Typography>
            ))}
          </div>
        </div>
      </div>

      )}
      {smOrSmaller && (
        <Grid container direction="row" spacing={6} justifyContent="center">
          <Grid container item spacing={6} direction="column" alignItems="center" xs={6} style={{ marginTop: '40px' }}>
            <Grid item onClick={() => displayQuote(1)}>
              <img src={quotes[1].photo} alt="Anand Mobile" className={classes.avatarInactive} />
            </Grid>
            <Grid item onClick={() => displayQuote(3)}>
              <img src={quotes[3].photo} alt="Charlie Mobile" className={classes.avatarInactive} />
            </Grid>
            <Grid item onClick={() => displayQuote(5)}>
              <img src={quotes[5].photo} alt="Raj Mobile" className={classes.avatarInactive} />
            </Grid>
          </Grid>
          <Grid container item spacing={6} direction="column" alignItems="center" xs={6}>
            <Grid item onClick={() => displayQuote(0)}>
              <img src={quotes[0].photo} alt="Dr Radia Mobile" className={classes.avatarInactive} />
            </Grid>
            <Grid item onClick={() => displayQuote(2)}>
              <img src={quotes[2].photo} alt="Dr Dileep Mobile" className={classes.avatarInactive} />
            </Grid>
            <Grid item onClick={() => displayQuote(4)}>
              <img src={quotes[4].photo} alt="Richard Mobile" className={classes.avatarInactive} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Section>
  );
}
