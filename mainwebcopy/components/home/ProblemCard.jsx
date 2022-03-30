import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'transparent',
    color: '0c2454',
    border: `3px solid #0c2454`,
    borderRadius: '5px',
    boxShadow: 'none',
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.up('md')]: {
      height: '450px',
    },
  },
}));

export default function FutureProblemCard({ children }) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        { children }
      </CardContent>
    </Card>
  );
}

FutureProblemCard.propTypes = {
  children: PropTypes.node.isRequired,
};
