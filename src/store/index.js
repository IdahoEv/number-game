
// console.log('Store file');
import * as Redux from 'redux';

const initialState = {
  selectedNumbers: [ ],
  remainingSeconds: 10
};

const actionFunctions = {
  'SELECT_NUMBER': (state, payload) => {
    return {...state,
      selectedNumbers: [...state.selectedNumbers, payload.index ]
    };
  },
  'DECREMENT_TIME': (state) => {
    return {...state,
      remainingSeconds: state.remainingSeconds - 1
    };
  },
};

const reducer = (state, action) => {
  console.log('Reducer called with ', state, action);
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
