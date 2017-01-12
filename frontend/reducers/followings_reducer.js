import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_FOLLOWINGS, FOLLOWINGS_ERRORS } from '../actions/user_actions';

const FollowingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_FOLLOWINGS:
      action.followings.forEach(following => newState[following.id] = following);
      return newState;
    case FOLLOWINGS_ERRORS:
      const errors = action.error.responseText;
      newState = merge( {}, state, { errors });
      return newState;
    default:
      return state;
  }
};

export default FollowingsReducer;
