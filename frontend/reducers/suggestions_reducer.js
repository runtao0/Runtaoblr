import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_SUGGESTIONS, SUGGESTION_ERRORS } from '../actions/user_actions';

const SuggestionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SUGGESTIONS:
      action.suggestions.forEach(suggestion => newState[suggestion.id] = suggestion);
      return newState;
    case SUGGESTION_ERRORS:
      const errors = action.error.responseText;
      newState = merge( {}, state, { errors });
      return newState;
    default:
      return state;
  }
};

export default SuggestionReducer;
