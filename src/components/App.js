import React from 'react';
import Game from './Game';
import storeFactory from  '../store';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
  }
  store = storeFactory();

  state = {
    score: 0,
    gameId: 1
  }

  resetGame = () => {
    this.store = storeFactory();
    this.setState( { gameId: Date.now() } );
  }

  updateScore = (secondsRemaining) => {
    this.setState((prevState) => {
      return { score: prevState.score + 100 * secondsRemaining };
    });
  }

  render() {
    return (
      <div>
        <Provider key={ this.state.gameId } store={ this.store }>
          <div id="container">
            <div id="score">{ this.state.score } </div>
            <Game numberCount={ 5 } resetGame={this.resetGame} updateScore={this.updateScore} />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
