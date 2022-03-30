import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDownRounded';

const useStyles = makeStyles((t) => ({
  root: {
    display: ({ display }) => display,
    transition: `transform 1000ms ${t.transitions.easing.easeInOut}`,
    color: ({ color }) => color,
  },
  toggled: {
    transform: 'rotate(0.5turn)',
  },
}));

export default function DropDownButton({
  onClick, display, color, toggled,
}) {
  const classes = useStyles({ display, color, toggled });

  return (
    <IconButton onClick={onClick} className={`${classes.root} ${toggled && classes.toggled}`}>
      <ArrowDropDownIcon />
    </IconButton>
  );
}

DropDownButton.propTypes = {
  onClick: PropTypes.func,
  display: PropTypes.string,
  color: PropTypes.string,
  toggled: PropTypes.bool,
};

DropDownButton.defaultProps = {
  onClick: () => {},
  display: 'inline',
  color: 'inherit',
  toggled: false,
};
