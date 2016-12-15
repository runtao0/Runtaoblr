import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import PostReducer from './posts_reducer';
import SuggestionReducer from './suggestions_reducer';
import FollowingsReducer from './followings_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostReducer,
  suggestions: SuggestionReducer,
  followings: FollowingsReducer,
});

export default rootReducer;
