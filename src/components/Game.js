import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RandomNumbersPanel from './RandomNumbersPanel';

import { randomNumberGenerator } from '../store/util';

// initial data
//   target
//   x numbers for buttons
class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired
    // store: PropTypes.object.isRequired
  };

  constructor(props) {
    super();
    // this.target = 10 + Math.floor(40 * Math.random());
    this.randomNumbers = Array.from({ length: props.numberCount }).map(() =>
      randomNumberGenerator()
    );
    this.target = this.randomNumbers
      .slice(0, props.numberCount - 2 )
      .reduce((acc, curr) =>  acc + curr);
  }
  computeGameStatus  = () => {
    const sum = this.props.selectedNumbers.reduce((acc, curr)=> acc + this.randomNumbers[curr], 0);
    console.log(sum, this.target);
    if (sum < this.target) {
      return 'playing';
    }
    if (sum === this.target) {
      return 'won';
    }
    if (sum > this.target) {
      return 'lost';
    }
  }
  render() {
    const gameStatus = this.computeGameStatus( );
    console.log('Game Status:', gameStatus);
    return (
      <div id="game">
        <div className='target'>{ this.target }</div>
        <RandomNumbersPanel randomNumbers={ this.randomNumbers }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedNumbers: state.selectedNumbers
  };
};

export default connect(mapStateToProps)(Game);


// export default connect((state) => ({
//   selectedNumbers: state.selectedNumbers
// }))(Game);
