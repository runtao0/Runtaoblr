import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_SUGGESTIONS,
         RECEIVE_ONE_SUGGESTION,
         SUGGESTION_ERRORS,
         REMOVE_SUGGESTION,
         SWAP_SUGGESTION
       } from '../actions/user_actions';

const SuggestionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SUGGESTIONS:
      action.suggestions.forEach(suggestion => newState[suggestion.id] = suggestion);
      return newState;
    case SWAP_SUGGESTION:
      const suggestion = action.suggestion[0];
      const suggestionToAdd = { [suggestion.id]: suggestion };
      newState = merge({}, state, suggestionToAdd);
      // suggestion is already and id only
      // debugger
      delete newState[action.id];
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
