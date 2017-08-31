import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// console.log(ReactRedux);

import NumberButton from './NumberButton';

const RandomNumbersPanel = (props) => {
  // console.log(this.props.store.getState());
  const isNumberButtonSelected = (numberIndex) => {
    return props.selectedNumbers.indexOf(numberIndex) >= 0;
  };
  return (
    <div id='random-numbers'>
      { props.randomNumbers.map((number, index) =>
        <NumberButton selected={ isNumberButtonSelected(index) }
          onClick={ props.selectNumber }
          canPlay={ props.canPlay }
          number={ number }
          id={ index }
          key={ index } />
      ) }
    </div>
  );
};

RandomNumbersPanel.propTypes = {
  randomNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectNumber: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  canPlay: PropTypes.func.isRequired,
  // store: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  // props for this component coming from global rodux state
  return {
    selectedNumbers: state.selectedNumbers
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectNumber: (numberIndex) => {
      dispatch({ type: 'SELECT_NUMBER', payload: { index: numberIndex }});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomNumbersPanel);
