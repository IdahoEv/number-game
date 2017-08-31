import React from 'react';

import PropTypes from 'prop-types';

import NumberButton from './NumberButton';

const RandomNumbersPanel = (props) => {
  return (
    <div id='random-numbers'>
      { props.randomNumbers.map((number, index) =>
        <NumberButton number={ number } key={ index } />
      ) }
    </div>
  );
};

RandomNumbersPanel.propTypes = {
  randomNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RandomNumbersPanel;
