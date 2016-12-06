import React from 'react';
import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  _nullUser
} from '../actions/session_actions';

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    debugger
    const currentUser = action.currentUser;
    newState = merge(newState, currentUser);
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
    // wrap the errors in an object!
      newState = merge(newState, state, { errors });
      return newState;
    default:
      return state;
  }
};
 export default SessionReducer;
