import { combineReducers } from 'redux';

import state from './State'

const rootReducer = combineReducers({
  state: state,
})

export default rootReducer;
