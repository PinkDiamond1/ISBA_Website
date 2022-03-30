import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

export default function Code({ children, language }) {
  return (
    <div>
      <Highlight
        className={language}
      >
        { children }
      </Highlight>
    </div>
  );
}

Code.propTypes = {
  language: PropTypes.oneOf(['javascript']).isRequired,
};
