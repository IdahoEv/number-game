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
  return Redux.createStore(reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default storeFactory;
