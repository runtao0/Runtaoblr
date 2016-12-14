import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import PostReducer from './posts_reducer';
import SuggestionReducer from './suggestions_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostReducer,
  suggestions: SuggestionReducer,
});

export default rootReducer;
