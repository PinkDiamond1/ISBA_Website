import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  flipCard: {
    backgroundColor: 'transparent',
    width: '400px',
    height: '300px',
    display: 'flex',
    '&:hover > $flipCardInner': {
      transform: 'rotateY(180deg)',
    },
    [theme.breakpoints.down('md')]: {
      width: '320px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '400px',
    },
  },
  flipCardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: '0.65s ease-in-out',
    transformStyle: 'preserve-3d',
  },
  front: {
    position: 'absolute',
    '-webkit-backface-visibility': 'hidden',
    backfaceVisibility: 'hidden',
    color: '#000',
    margin: 'auto auto',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  back: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    '-webkit-backface-visibility': 'hidden',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    backgroundColor: '#fff',
    color: '#000',
    padding: `${theme.spacing(2)}px`,
    textAlign: 'left',
  },
}));

export default function CardFlip({
  children, content,
}) {
  const classes = useStyles();
  return (
    <div className={classes.flipCard}>
      <div className={classes.flipCardInner}>
        <div className={classes.front}>
          {children}
        </div>
        <div className={classes.back}>
          { (content.map((para) => (
            <>
              <Typography variant="h6"> {para} </Typography>
              <br />
            </>
          )))}

        </div>
      </div>
    </div>
  );
}

CardFlip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
