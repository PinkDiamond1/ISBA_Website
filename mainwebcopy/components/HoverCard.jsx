import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  card: {
    transition: 'transform 300ms, box-shadow 300ms',
    borderRadius: ({ borderRadius }) => borderRadius,
    '&:hover': {
      transform: 'translate3d(0px, -4px, 0px) scale3d(1.04,1.04,1.04)',
    },
  },
});

export default function HoverCard({
  children, className, idleElevation, hoverElevation, borderRadius,
}) {
  const classes = useStyles({ borderRadius });

  const [elevation, setElevation] = useState(idleElevation);
  const handleMouseOver = () => setElevation(hoverElevation);
  const handleMouseOut = () => setElevation(idleElevation);

  return (
    <Card
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      classes={{ root: `${className} ${classes.card}` }}
    >
      { children }
    </Card>
  );
}

HoverCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  idleElevation: PropTypes.number.isRequired,
  hoverElevation: PropTypes.number.isRequired,
  borderRadius: PropTypes.string,
};

HoverCard.defaultProps = {
  className: undefined,
  borderRadius: '4px',
};
