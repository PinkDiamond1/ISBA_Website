import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'block',
    color: ({ color }) => color,
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: ({ color }) => color,
    },
    '&:visited': {
      color: ({ color }) => color,
    },
  },
});

export default function BlockLink({
  color, href, children, className,
}) {
  const classes = useStyles({ color });

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link href={href}>
      <a className={`${classes.container} ${className}`}>
        { children }
      </a>
    </Link>
  );
}

BlockLink.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BlockLink.defaultProps = {
  color: '#000000',
  className: '',
};
