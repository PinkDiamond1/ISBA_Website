import PropTypes from 'prop-types';
import NextLink from 'next/link';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useState, useEffect, useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Section from '../Section';
import TopbarSmallItem from './TopbarSmallItem';
import sections from '../../routes';

const useStyles = makeStyles((theme) => ({
  scrollMarker: {
    height: theme.sizes.topbar.small.top,
    position: 'absolute',
    top: -1,
  },
  background: {
    position: 'fixed',
    width: '100%',
    zIndex: 10,
    transition: 'all 500ms ease-in-out',
    backgroundColor: '#fafafa',
    boxShadow: '0 0 3px #d0d0d0',
    border: '1px solid #eee',
    minHeight: ({ isScrolled }) => {
      if (isScrolled) {
        return theme.sizes.topbar.small.scrolled;
      }
      return theme.sizes.topbar.small.top;
    },
  },
  subContainer: {
    padding: `0 ${theme.spacing(2)}px`,
  },
  horizontalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: ({ isScrolled }) => {
      if (isScrolled) {
        return theme.sizes.topbar.small.scrolled;
      }
      return theme.sizes.topbar.small.top;
    },
  },
  logo: {
    cursor: 'pointer',
    transition: 'height 500ms ease-in-out',
    height: ({ isScrolled }) => {
      if (isScrolled) {
        return '30px';
      }
      return '40px';
    },
    marginTop: '8px',
  },
  logoContainer: {
    cursor: 'pointer',
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    padding: `${theme.spacing(2)}px 0`,
    [theme.breakpoints.down('sm')]: {
      overflowX: 'scroll',
    },
  },
  specialButtonPill: {
    background: '#f15e5a',
    flexShrink: 0,
    borderRadius: '20px',
    color: '#FFFFFF',
    height: 36,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
    transition: '0.8s',
    backgroundSize: '150%',
    '&:hover': {
      backgroundPosition: 'right',
    },
  },
  specialButton: {
    background: 'none',
    flexShrink: 0,
    borderRadius: '7px',
    border: '1px solid #f15e5a',
    color: '#000000',
    height: 36,
    padding: '0 30px',
    transition: '0.8s',
    backgroundSize: '150%',
    '&:hover': {
      backgroundPosition: 'right',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
  hamburger: {
    color: ({ textColor }) => textColor,
  },
  sectionsContainer: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    marginTop: ({ isScrolled }) => {
      if (isScrolled) {
        return theme.sizes.topbar.small.scrolled;
      }
      return theme.sizes.topbar.small.top;
    },
    zIndex: 20,
    top: 0,
    left: 0,
    backgroundColor: '#fafafa',
    boxShadow: '0 0 3px #d0d0d0',
    border: '1px solid #eee',
    transform: 'translate(100%, 0)',
    transition: 'transform 500ms ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

  },
  open: {
    transform: 'none',
  },
}));

export default function TopbarSmall({ textColor }) {
  const scrollMarkerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const classes = useStyles({
    textColor, isExpanded, isScrolled,
  });

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: scrollMarkerRef.current,
      start: 'top top',
      end: 'bottom top',
      onEnter: () => setIsScrolled(false),
      onEnterBack: () => setIsScrolled(false),
      onLeave: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(true),
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <>
      <div className={classes.scrollMarker} ref={scrollMarkerRef} />
      <Section className={classes.background} subContainerClassName={classes.subContainer}>
        <div className={classes.horizontalContainer}>
          <NextLink href="/">
            <a>
              <img
                src={`/images/parallelchain-logo-block${textColor === theme.palette.neutral.white ? '-white' : ''}.svg`}
                alt="ParallelChain Lab"
                className={classes.logo}
              />
            </a>
          </NextLink>
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            <MenuIcon
              classes={{
                root: classes.hamburger,
              }}
            />
          </IconButton>
        </div>
        <div className={`${classes.sectionsContainer} ${isExpanded && classes.open}`}>
          <div className={classes.buttonsContainer}>
            {/* <Button
              classes={{
                root: `${classes.specialButton} push-left2`,
                label: classes.label,
              }}
              href="/xpll"
            >
              XPLL Token
            </Button> */}
            <Button
              classes={{
                root: `${classes.specialButton} push-left2`,
                label: classes.label,
              }}
              href="/parallelwallet"
            >
              ParallelWallet
            </Button>
            <Button
              classes={{
                root: `${classes.specialButton} push-left2`,
                label: classes.label,
              }}
              href="/reports-and-whitepapers"
            >
              Reports & Whitepapers
            </Button>
          </div>
          <TopbarSmallItem
            section={sections.technology}
            setIsExpanded={setIsExpanded}
            textColor={textColor}
          />
          <TopbarSmallItem
            section={sections.mainnet}
            setIsExpanded={setIsExpanded}
            textColor={textColor}
          />
          <TopbarSmallItem
            section={sections.enterprise}
            setIsExpanded={setIsExpanded}
            textColor={textColor}
          />
          <TopbarSmallItem
            section={sections.roadmap}
            setIsExpanded={setIsExpanded}
            textColor={textColor}
          />
          <TopbarSmallItem
            section={sections.applications}
            setIsExpanded={setIsExpanded}
            textColor={textColor}
          />
          <TopbarSmallItem
            section={sections.channelsAndPartners}
            setIsExpanded={setIsExpanded}
            textColor={textColor}
          />
          <TopbarSmallItem
            section={sections.company}
            setIsExpanded={setIsExpanded}
            textColor={textColor}
          />
        </div>
      </Section>
    </>
  );
}

TopbarSmall.propTypes = {
  textColor: PropTypes.string.isRequired,
};
