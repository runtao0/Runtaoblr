import React from 'react';
import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  LOGOUT,
  _nullUser
} from '../actions/session_actions';


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
      return merge({}, _nullUser, {
        errors
      });
    default:
      return state;
  }
};
 export default SessionReducer;
