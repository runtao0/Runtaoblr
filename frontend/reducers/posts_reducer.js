import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_POSTS, RECEIVE_ONE_POST, POST_ERRORS, REMOVE_POST, REMOVE_UNFOLLOW, CLEAR_POSTS } from '../actions/post_actions';
import { LOCATION_CHANGE } from 'react-router-redux';

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge( {}, state);
  switch(action.type) {
    case RECEIVE_POSTS:
      action.posts.forEach(post => newState[post.id] = post);
      return newState;

    case RECEIVE_ONE_POST:
      const post = {[action.post[0].id]: action.post[0]};
      return merge({}, state, post);

    case REMOVE_POST:
      newState = merge({}, state);
      for (let i = 0; i < action.posts.length; i++) {
        delete newState[action.posts[i].id];
      }
      return newState;

    case REMOVE_UNFOLLOW:
      newState = merge({}, state);
      for ( let post_id in newState ) {
        if (newState[post_id].author_id === action.id) delete newState[post_id];
      }
      return newState;

    case POST_ERRORS:
      const errors = action.error.responseText;
      newState = merge( {}, state, { errors });
      return newState;

    case LOCATION_CHANGE:
      return {};

    default:
      return state;
  }
};

export default PostReducer;
