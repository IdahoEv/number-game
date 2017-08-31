import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RandomNumbersPanel from './RandomNumbersPanel';

import { randomNumberGenerator } from '../store/util';
import { decrementTime } from '../store/actionCreators';

import  shuffle  from 'lodash.shuffle';

// initial data
//   target
//   x numbers for buttons
class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    remainingSeconds: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    decrementTime: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    updateScore: PropTypes.func.isRequired,
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
    this.randomNumbers = shuffle(this.randomNumbers);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => { this.props.decrementTime(); }, 1000);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  stopTimer = () =>  {
    clearInterval(this.intervalId);
    this.gameOver = true;
  }

  endGame = (status) => {
    if (status === 'won') {
      this.props.updateScore(this.props.remainingSeconds);
    }
    this.stopTimer();
  }

  computeGameStatus  = () => {
    const sum = this.props.selectedNumbers.reduce((acc, curr)=> acc + this.randomNumbers[curr], 0);
    // console.log(sum, this.target);
    if (this.props.remainingSeconds <= 0) {
      return 'lost';
    }
    if (sum < this.target) {
      return 'playing';
    }
    if (sum === this.target) {
      return 'won';
    }
    if ((sum > this.target) || (this.props.remainingSeconds <= 0)) {
      return 'lost';
    }
  }
  gameOver = () => {
    const status = this.computeGameStatus();
    return (status !== 'playing');
  }

  componentDidUpdate() {
    const status = this.computeGameStatus();
    if (status === 'won' || status === 'lost') {
      this.endGame(status);
    }
  }

  targetPanelColor(status) {
    if (status === 'won') return 'green';
    if (status === 'lost') return 'red';
  }

  canPlay = () => {
    return !(this.gameOver());
  }

  render() {
    const gameStatus = this.computeGameStatus( );
    return (
      <div id="game">
        <div id="stats-row">
          <div id="time-remaining">
            { this.gameOver() ? '--' : this.props.remainingSeconds }
          </div>
          <div id="score">
            { this.props.score }
          </div>
        </div>
        <div className='target'
          style={{ backgroundColor: this.targetPanelColor(gameStatus) }}
        >{ this.target }</div>
        <RandomNumbersPanel
          canPlay={ this.canPlay }
          randomNumbers={ this.randomNumbers }
        />
        { this.gameOver && <button onClick={ this.props.resetGame } >Play Again</button> }
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
