import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import PostReducer from './posts_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostReducer
});

export default rootReducer;
