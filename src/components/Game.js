import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RandomNumbersPanel from './RandomNumbersPanel';

import { randomNumberGenerator } from '../store/util';
import { decrementTime } from '../store/actionCreators';

// initial data
//   target
//   x numbers for buttons
class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    remainingSeconds: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    decrementTime: PropTypes.func.isRequired,
  };

  constructor(props) {
    super();
    // this.target = 10 + Math.floor(40 * Math.random());
    this.gameOver = false;
    this.randomNumbers = Array.from({ length: props.numberCount }).map(() =>
      randomNumberGenerator()
    );
    this.target = this.randomNumbers
      .slice(0, props.numberCount - 2 )
      .reduce((acc, curr) =>  acc + curr);
  }

  componentDidMount() {
    console.log('Component Did Mount');
    this.intervalId = setInterval(() => { this.props.decrementTime(); }, 1000);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  stopTimer = () =>  {
    clearInterval(this.intervalId);
    this.gameOver = true;
  }

  endGame = () => {
    this.stopTimer();
  }

  computeGameStatus  = () => {
    const sum = this.props.selectedNumbers.reduce((acc, curr)=> acc + this.randomNumbers[curr], 0);
    console.log(sum, this.target);
    if (this.props.remainingSeconds <= 0) {
      this.endGame();
      return 'lost';
    }
    if (sum < this.target) {
      return 'playing';
    }
    if (sum === this.target) {
      this.endGame();
      return 'won';
    }
    if ((sum > this.target) || (this.props.remainingSeconds <= 0)) {
      this.endGame();
      return 'lost';
    }
  }

  targetPanelColor(status) {
    if (status === 'won') return 'green';
    if (status === 'lost') return 'red';
  }

  render() {
    const gameStatus = this.computeGameStatus( );
    console.log('Game Status:', gameStatus);
    return (
      <div id="game">
        <div className="time-remaining">
          { this.gameOver ? '--' : this.props.remainingSeconds }
        </div>
        <div className='target'
          style={{ backgroundColor: this.targetPanelColor(gameStatus) }}
        >{ this.target }</div>
        <RandomNumbersPanel
          canPlay={ this.computeGameStatus() === 'playing' }
          randomNumbers={ this.randomNumbers }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedNumbers: state.selectedNumbers,
    remainingSeconds: state.remainingSeconds,
  };
};
export default connect(mapStateToProps, { decrementTime })(Game);
