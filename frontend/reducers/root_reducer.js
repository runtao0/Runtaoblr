import { combineReducers } from 'redux';
import SessionReducer from './sessions_reducer';
import PostReducer from './posts_reducer';
import SuggestionReducer from './suggestions_reducer';
import FollowingsReducer from './followings_reducer';
import BlogReducer from './blog_reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostReducer,
  suggestions: SuggestionReducer,
  followings: FollowingsReducer,
  blogUser: BlogReducer,
  routing: routerReducer,
});

export default rootReducer;
