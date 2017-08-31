import React from 'react';
import Game from './Game';
import storeFactory from  '../store';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
  }

  // getChildContext() {
  //   // same as { store: store }
  //   return { store: storeFactory() };
  // }
  //
  // static childContextTypes = {
  //   store: PropTypes.object.isRequired
  // };

  render() {
    return (
      <div>
        <Provider store={storeFactory()}>
          <Game numberCount={ 5 } />
        </Provider>
        {/* <hr />
        <Game numberCount={ 7 }/> */}
      </div>
    );
  }
}

export default App;
