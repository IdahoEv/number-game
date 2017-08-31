// console.log('Store file');
import * as Redux from 'redux';

const initialState = {
  selectedNumbers: [ ]
};

const reducer = (state, action) => {
  console.log('calling reducer', action);
  // if (action.type === 'TEST1'){
  //   return { ...state,
  //     counter: 1
  //   }
  // if (action.type === 'TEST2') {
  //   return { ...state,
  //     counter: state.counter + 1
  //   }
  // }
  return state;
};

const store = Redux.createStore(reducer, initialState);
//
// console.log('getState', store.getState());
//
// store.dispatch({ type: 'TEST1' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST2' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST2' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST1' });
// console.log('getState', store.getState());
export default store;
