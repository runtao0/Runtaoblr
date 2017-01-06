import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_POSTS, RECEIVE_ONE_POST, POST_ERRORS, REMOVE_POST } from '../actions/post_actions';

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge( {}, state);
  switch(action.type) {
    case RECEIVE_POSTS:
      action.posts.forEach(post => newState[post.id] = post);
      return newState;
    // do I even need RECEIVE_ONE_POST?
    case RECEIVE_ONE_POST:
      const post = {[action.post[0].id]: action.post[0]};
      return merge({}, state, post);
    case REMOVE_POST:
      newState = merge({}, state);
      debugger
      for (let i = 0; i < action.posts.length; i++) {
        delete newState[action.posts[i].id];
      }
      return newState;
    case POST_ERRORS:
      const errors = action.error.responseText;
      newState = merge( {}, state, { errors });
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
