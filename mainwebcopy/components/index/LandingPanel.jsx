import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { theme } from 'dtl-react-components';
import PWThemeSection from '../PWThemeSection';

const useStyles = makeStyles((t) => ({
  subRoot: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
  },
  textGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.spacing(30)}px`,
    alignItems: 'flex-start',
    color: '#94EECB',
    letterSpacing: '0.8em',
  },
  textGroupSmall: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: `${theme.spacing(25)}px`,
    alignItems: 'center',
    color: t.palette.neutral.white,
    letterSpacing: '0.8em',
    textAlign: 'center',
    animation: `$revealTextGroupSmall 5000ms ${t.transitions.easing.easeInOut}`,
    animationDelay: '500ms',
    animationFillMode: 'both',
  },
  '@keyframes revealTextGroupSmall': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  blockchainText: {
    color: t.palette.neutral.white,
    animation: `$revealBlockchain 3000ms ${t.transitions.easing.easeInOut}`,
    animationDelay: '1000ms',
    animationFillMode: 'both',
    overflow: 'hidden',
  },
  '@keyframes revealBlockchain': {
    '0%': {
      maxWidth: '0px',
      opacity: 0,
    },
    '50%': {
      // Fixing this value as close as possible to the size my browser renders the
      // text makes the animation ease out smoothly, but might cause problems
      // with extra-large font settings.
      //
      // A solution is to set this to a very large value, and then form a cubic
      // bezier curve with a very long easing out (try this out should we come
      // across problems).
      maxWidth: '530px',
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  themText: {
    color: t.palette.neutral.white,
    animation: `$revealThem 3000ms ${t.transitions.easing.easeInOut}`,
    animationDelay: '1000ms',
    animationFillMode: 'both',
    overflow: 'hidden',
  },
  '@keyframes revealThem': {
    '0%': {
      maxWidth: '0px',
      opacity: 0,
    },
    '50%': {
      maxWidth: '250px',
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  scrollDownPrompt: {
    position: 'absolute',
    bottom: `${t.spacing(10)}px`,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: `${t.palette.neutral.white}`,
    textShadow: `${t.palette.neutral.black} 0px 0px 4px`,
  },
}));

const background = (url) => `url(${url}) center/cover`;

export default function LandingPanel() {
  const theme = useTheme();
  const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();

  if (mdOrSmaller) {
    return (
      <PWThemeSection subContainerClassName={classes.subRoot} background={`${background('/images/index/landing_bg.svg')}`}>
        <Typography className={classes.textGroupSmall}>
          <Typography variant="h2">
            ONE BLOCKCHAIN
          </Typography>
          <Typography variant="h2">
            RULES THEM ALL
          </Typography>
        </Typography>
        <Fade in style={{ transitionDelay: '5000ms' }}>
          <div className={classes.scrollDownPrompt}>
            <Typography variant="body1">
              scroll down to see more
            </Typography>
            {/* <DropDownButton /> */}
          </div>
        </Fade>

      </PWThemeSection>
    );
  }
  return (
    <PWThemeSection
      subContainerClassName={classes.subRoot}
      background={`${background('/images/index/landing_bg.svg')}`}
    >
      <Typography className={classes.textGroup}>
        <Typography variant="h1">
          ONE&nbsp;
        </Typography>
        <Typography className={classes.blockchainText} variant="h1">
          BLOCKCHAIN&nbsp;
        </Typography>
        <Typography variant="h1">
          RULES&nbsp;
        </Typography>
        <Typography className={classes.themText} variant="h1">
          THEM&nbsp;
        </Typography>
        <Typography variant="h1">
          ALL
        </Typography>
      </Typography>
      <Fade in style={{ transitionDelay: '5000ms' }}>
        <div className={classes.scrollDownPrompt}>
          <Typography variant="body1">
            scroll down to see more
          </Typography>
          {/* <DropDownButton /> */}
        </div>
      </Fade>
    </PWThemeSection>
  );
}
