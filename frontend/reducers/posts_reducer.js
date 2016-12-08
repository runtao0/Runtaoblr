import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_POSTS, RECEIVE_ONE_POST, POST_ERRORS, REMOVE_POST } from '../actions/post_actions';

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_POSTS:
      action.posts.forEach(post => newState[post.id] = post);
      return newState;
    // do I even need RECEIVE_ONE_POST?
    case RECEIVE_ONE_POST:
      const post = {[action.post.id]: action.post};
      return merge({}, state, post);
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    case POST_ERRORS:
      console.log(action.error.responseText);
      return state;
    default:
      return state;
  }
};

export default PostReducer;
