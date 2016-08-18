
//TODO: import these things

const root = (
state = Immutable.Map({count:0}),
action = {
  type:'INC_COUNT'
}) => {
  switch (action.type) {
    case 'INC_COUNT':
      var oldCount = state.get('count');
      var newState = state.set('count', (oldCount+1));
      return newState;

    case 'DEC_COUNT':
      var oldCount = state.get('count');
      var newState = state.set('count', (oldCount-1));
      return newState;

    default:
      return state;
  }
  return state;
}

const store = Redux.createStore(root);
const ReduxBehavior = PolymerRedux(store);
