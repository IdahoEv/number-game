import React from 'react';
import PropTypes from 'prop-types';

import store from '../store';
import NumberButton from './NumberButton';

const RandomNumbersPanel = (props) => {
  console.log(store.getState());
  const isNumberButtonSelected = (numberIndex) => {
    return store.getState().selectedNumbers.indexOf(numberIndex) >= 0;
  };
  return (
    <div id='random-numbers'>
      { props.randomNumbers.map((number, index) =>
        <NumberButton selected={ isNumberButtonSelected(index) } number={ number } key={ index } />
      ) }
    </div>
  );
};

RandomNumbersPanel.propTypes = {
  randomNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RandomNumbersPanel;
