import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    display: ({ display }) => display,
    opacity: ({ fadeOutInstead }) => (fadeOutInstead ? 1 : 0),
    transition: 'opacity 600ms ease-in-out',
    transitionDelay: ({ delay }) => delay,
  },
  boxIn: {
    opacity: ({ fadeOutInstead }) => (fadeOutInstead ? 0 : 1),
    animation: ({ variant }) => {
      switch (variant) {
        case 'up':
          return `fadeup 800ms ${theme.transitions.easing.easeInOut}`;
        case 'down':
          return `fadedown 800ms ${theme.transitions.easing.easeInOut}`;
        case 'left':
          return `fadeleft 800ms ${theme.transitions.easing.easeInOut}`;
        case 'right':
          return `faderight 800ms ${theme.transitions.easing.easeInOut}`;
        case 'out':
          return '';
        default:
          return `fadeup 800ms ${theme.transitions.easing.easeInOut}`;
      }
    },
    animationDelay: ({ delay }) => delay,
    // I moved the keyframes definition to layout.jsx
  },
}));

export default function FadeIn({
  display, in: boxIn, variant, children, boxRef, className, delay, fadeOutInstead,
}) {
  const classes = useStyles({
    variant, display, delay, fadeOutInstead,
  });

  return (
    <div
      ref={boxRef}
      className={`${classes.box} ${className} ${boxIn && classes.boxIn}`}
    >
      { children }
    </div>
  );
}

FadeIn.propTypes = {
  display: PropTypes.string,
  in: PropTypes.bool,
  variant: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
  children: PropTypes.node.isRequired,
  boxRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  className: PropTypes.string,
  delay: PropTypes.string,
  fadeOutInstead: PropTypes.bool,
};

FadeIn.defaultProps = {
  display: 'block',
  in: false,
  variant: 'up',
  boxRef: null,
  className: null,
  delay: '0ms',
  fadeOutInstead: false,
};
