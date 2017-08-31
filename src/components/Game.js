import React from 'react';
import PropTypes from 'prop-types';

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
  }
  render() {
    return (
      <div>
        <div id='target'>...</div>
        <div id='random-numbers'>TESTING: {this.props.numberCount}
         --
          { this.randomNumbers }
        </div>
      </div>
    );
  }
}

export default Game;
