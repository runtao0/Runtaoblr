import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_BLOG_USER, BLOG_ERRORS } from '../actions/blog_actions';

const BlogReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_BLOG_USER:
      newState = action.blogUser;
      return newState;
    case BLOG_ERRORS:
      const errors = action.error.responseText;
      newState = merge( {}, state, { errors });
      return newState;
    default:
      return state;
  }
};

export default BlogReducer;
