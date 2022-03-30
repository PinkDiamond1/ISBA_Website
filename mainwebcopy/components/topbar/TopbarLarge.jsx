import PropTypes from 'prop-types';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useState, useEffect, useRef } from 'react';
import NextLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
import TopbarLargeItem from './TopbarLargeItem';
import TopbarProductsNew from './TopbarProductsNew';
import Section from '../Section';
import sections from '../../routes';

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'fixed',
    width: '100%',
    zIndex: 10,
    transition: 'all 400ms ease-in-out',
    backgroundColor: '#fafafa',
    boxShadow: '0 0 3px #d0d0d0',
    borderBottom: '1px solid #eee',
    height: ({ isExpanded, isScrolled }) => {
      if (isExpanded) {
        console.log('isExpanded: in');
        console.log(`theme.sizes.topbar.large.expanded: ${theme.sizes.topbar.large.expanded}`);
        return theme.sizes.topbar.large.expanded;
      } if (isScrolled) {
        return theme.sizes.topbar.large.scrolled;
      }
      return theme.sizes.topbar.large.top;
    },
  },
  subContainer: {
    padding: '0',
    position: 'relative',
  },
  horizontalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: ({ isScrolled }) => {
      if (isScrolled) {
        return '60px';
      }
      return '60px';
    },
    transition: 'height 400ms ease-in-out',
  },
  itemsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    cursor: 'pointer',
    height: ({ isScrolled }) => {
      if (isScrolled) {
        return '34px';
      }
      return '44px';
    },
    transition: 'height 400ms ease-in-out',
    marginTop: '5px',
  },
  logoContainer: {
    cursor: 'pointer',
  },
  mediaIcon: {
    width: '20px',
    height: '20px',
    marginRight: `${theme.spacing(3)}px`,
    pointerEvents: 'none',
  },
  trivialIcon: {
    width: '20px',
    height: '20px',
    marginRight: `${theme.spacing(1)}px`,
    pointerEvents: 'none',
  },
  text: {
    color: '#000000',
    marginRight: `${theme.spacing(3)}px`,
  },
  sectionLabel: {
    cursor: 'pointer',
    color: '#000000',
    padding: ` ${theme.spacing(2)}px`,
    transition: 'color 300ms ease-in-out',
    textTransform: 'uppercase',
    fontWeight: 300,
  },
  label: {
    color: '#000000',
    textTransform: 'capitalize',
  },
  walletButton: {
    background: 'none',
    border: '1px solid #000000',
    borderRadius: '7px',
    color: '#000000',
    height: '35px',
    padding: '15px 30px',
    marginLeft: `${theme.spacing(2)}px`,
    transition: '0.8s',
    backgroundSize: '150%',
    '&:hover': {
      backgroundPosition: 'right',
    },
  },
}));

export default function TopbarLarge({ textColor }) {
  const scrollMarkerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const classes = useStyles({
    isExpanded, isScrolled, textColor,
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
      <Section
        className={classes.background}
        subContainerClassName={classes.subContainer}
      >
        <div className={classes.horizontalContainer}>
          <NextLink href="/">
            <a>
              <img
                src="/images/parallelchain-logo-block.svg"
                alt="ParallelChain Lab"
                className={classes.logo}
              />
            </a>
          </NextLink>
          <div className={classes.itemsContainer}>
            <NextLink href="/technology">
              <Link
                display="inline"
                variant="subtitle1"
                classes={{
                  root: classes.sectionLabel,
                }}
              >
                Technology
              </Link>
            </NextLink>
            {/* <NextLink href="/parallelchain/mainnet">
              <Link
                display="inline"
                variant="subtitle1"
                classes={{
                  root: classes.sectionLabel,
                }}
              >
                Mainnet
              </Link>
            </NextLink> */}
            <TopbarLargeItem
              textColor={textColor}
              label={sections.mainnet.label}
              linkTo={sections.mainnet.linkTo}
              subSections={sections.mainnet.sub}
              setIsExpanded={setIsExpanded}
            />
            <TopbarProductsNew
              textColor={textColor}
              label={sections.products.label}
              subSections={sections.products.sub}
              setIsExpanded={setIsExpanded}
            />
            <NextLink href="/roadmap">
              <Link
                display="inline"
                variant="subtitle1"
                classes={{
                  root: classes.sectionLabel,
                }}
              >
                Roadmap
              </Link>
            </NextLink>
            <TopbarLargeItem
              textColor={textColor}
              label={sections.company.label}
              linkTo={sections.company.linkTo}
              subSections={sections.company.sub}
              setIsExpanded={setIsExpanded}
            />
            <Button
              classes={{
                root: classes.walletButton,
                label: classes.label,
              }}
              href="/parallelwallet"
            >
              ParallelWallet
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

TopbarLarge.propTypes = {
  textColor: PropTypes.string.isRequired,
};
