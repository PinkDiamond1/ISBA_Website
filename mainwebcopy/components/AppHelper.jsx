import {
  useState, useEffect, useContext, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { firebase, firebaseConfig } from '../utils/firebase';
import { PWThemeContext } from './PWThemeContext';
import TheTopbar from './topbar/TheTopbar';
import TheFooter from './TheFooter';
import 'firebase/analytics';

const useStyles = makeStyles((t) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  pageBackgroundPrev: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
    background: ({ background }) => background[0],
    zIndex: -1,
  },
  pageBackground: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
    background: ({ background }) => background[1],
    animation: `$fadeIn 2000ms ${t.transitions.easing.easeInOut}`,
    animationFillMode: 'both',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

export const useComponentWillMount = (func) => {
  const willMount = useRef(true);

  if (willMount.current) func();

  willMount.current = false;
};

export default function AppHelper({ children }) {
  const { background } = useContext(PWThemeContext);
  const [backgroundNonce, setBackgroundNonce] = useState(1);

  useEffect(() => {
    // Removed the console log
    setBackgroundNonce((prev) => prev + 1);
  }, [background]);

  const router = useRouter();

  const classes = useStyles({ background });

  useComponentWillMount(() => {
    // Initialize firebase on the client.
    if (process.browser) {
      try {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics().logEvent('init');
      } catch (e) {
        console.log('AppHelper: Firebase initialization error');
      }
    }

    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div className={classes.root}>
      <div key={`pageBackgroundPrev-${backgroundNonce}`} className={classes.pageBackgroundPrev} />
      <div key={`pageBackground-${backgroundNonce}`} className={classes.pageBackground} />

      <header>
        <TheTopbar />
      </header>

      { children }

      <footer style={{ zIndex: 0 }}>
        <TheFooter />
      </footer>
    </div>
  );
}

AppHelper.propTypes = {
  children: PropTypes.node.isRequired,
};
