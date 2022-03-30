import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'block',
    color: theme.palette.neutral.black,
    cursor: 'auto',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.neutral.black,
    },
    '&:visited': {
      color: theme.palette.neutral.black,
    },
  },
}));

export default function BlockAnchor({ children, name }) {
  const classes = useStyles();

  return (
    <>
      <a className={classes.container} href={`#${name}`} name={name} id={name} />
      <div>
        { children }
      </div>
    </>
  );
}

BlockAnchor.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};
