import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function FutureProblemSolutionArrow({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 176.548 196.356"
      style={{
        display: 'block',
        margin: '0 auto',
        height: '36px',
        fill: color,
      }}
    >
      <ArrowDownwardIcon />
    </svg>
  );
}

FutureProblemSolutionArrow.propTypes = {
  color: PropTypes.string,
};

FutureProblemSolutionArrow.defaultProps = {
  color: '#ffffff',
};
