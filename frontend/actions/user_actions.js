import * as APIUtil from '../util/user_api_util';

export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";
export const SUGGESTION_ERRORS = "SUGGESTION_ERRORS";

// sync
export const receiveSuggestions = suggestions => ({
  type: RECEIVE_SUGGESTIONS,
  suggestions,
});

export const suggestionError = error => ({
  type: SUGGESTION_ERRORS,
  error,
});

// async
export function requestSuggestions() {
  return (dispatch) => {
    return APIUtil.fetchSuggestions()
      .then(suggestions => dispatch(receiveSuggestions(suggestions)),
      error => dispatch(suggestionError(error))
    );
  };
}
