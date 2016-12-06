import { combineReducers } from 'redux';

import SessionReducer from './sessions_reducer';

const rootReducer = combineReducers({
  session: SessionReducer
});

export default rootReducer;
