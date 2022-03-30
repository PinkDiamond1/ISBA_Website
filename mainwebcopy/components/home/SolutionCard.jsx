import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  card: {
    color: theme.palette.neutral.black,
    boxShadow: '0 3px 5px 2px rgb(0 0 0 / 10%)',
    border: `1px solid ${theme.palette.primary.light}`,
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    minHeight: '450px',
  },
}));

export default function FuturSolutionCard({ children }) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        { children }
      </CardContent>
    </Card>
  );
}

FuturSolutionCard.propTypes = {
  children: PropTypes.node.isRequired,
};
