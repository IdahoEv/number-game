// console.log('Store file');
import * as Redux from 'redux';

const initialState = {
  selectedNumbers: [ ]
};

const actionFunctions = {
  'SELECT_NUMBER': (state, payload) => {
    return {...state,
      selectedNumbers: [...state.selectedNumbers, payload.index ]
    };
  }
};

const reducer = (state, action) => {
  console.log('calling reducer', action);
  const actionFunction = actionFunctions[action.type];
  if (actionFunction) {
    return actionFunction(state, action.payload);
  }
  return state;
};

const storeFactory = () => {
  return Redux.createStore(reducer, initialState);
};
// store.dispatch( { type: 'SELECT_NUMBER', payload: { index: 3 }});
// console.log('getState', store.getState());
// store.dispatch( { type: 'SELECT_NUMBER', payload: { index: 2 }});
// console.log('getState', store.getState());
// store.dispatch( { type: 'SELECT_NUMBER', payload: { index: 1 }});
// console.log('getState', store.getState());
export default storeFactory;
