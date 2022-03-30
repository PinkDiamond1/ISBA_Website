import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.black,
  },
}));

export default function SmallDateLabel({ date }) {
  const year = date.slice(0, 4);
  const month = months[parseInt(date.slice(5, 7) - 1, 10)];
  const day = date.slice(8, 10);

  const classes = useStyles();

  return (
    <Typography variant="h6" classes={{ root: classes.text }}>
      { `${day} ${month} ${year}`}
    </Typography>
  );
}

SmallDateLabel.propTypes = {
  // YYYY-MM-DD
  date: PropTypes.string.isRequired,
};
