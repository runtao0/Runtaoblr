import React from 'react';
import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  LOGOUT
} from '../actions/session_actions';

const _nullUser = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors.responseJSON;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};
 export default SessionReducer;
