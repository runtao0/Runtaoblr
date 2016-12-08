import React from 'react';
import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  LOGOUT
} from '../actions/session_actions';

export const _nullUser = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      // changed _nullUser to state
      return merge({}, state, { currentUser });
    case RECEIVE_ERRORS:
      const newState = Object.assign({}, state);
      newState.errors = [];
      const errors = action.errors.responseJSON;
      return merge({}, newState, {
        errors
      });
    default:
      return state;
  }
};
 export default SessionReducer;
