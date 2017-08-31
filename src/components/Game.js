import React from 'react';
import PropTypes from 'prop-types';
import RandomNumbersPanel from './RandomNumbersPanel';

import { randomNumberGenerator } from '../store/util';

// initial data
//   target
//   x numbers for buttons
class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
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
  render() {
    return (
      <div>
        <div id='target'>{ this.target }</div>
        <RandomNumbersPanel randomNumbers={ this.randomNumbers }/>
      </div>
    );
  }
}


export default Game;
