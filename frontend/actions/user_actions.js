import * as APIUtil from '../util/user_api_util';

export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";
export const SUGGESTION_ERRORS = "SUGGESTION_ERRORS";
export const RECEIVE_FOLLOWINGS = "RECEIVE_FOLLOWINGS";
export const FOLLOWINGS_ERRORS = "FOLLOWINGS_ERRORS";

// sync
export const receiveSuggestions = suggestions => ({
  type: RECEIVE_SUGGESTIONS,
  suggestions,
});

export const suggestionError = error => ({
  type: SUGGESTION_ERRORS,
  error,
});

export const receiveFollowings = followings => ({
  type: RECEIVE_FOLLOWINGS,
  followings,
});

export const followingsError = error => ({
  type: FOLLOWINGS_ERRORS,
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

export function requestFollowings() {
  return (dispatch) => {
    return APIUtil.fetchFollowings()
      .then(followings => dispatch(receiveFollowings(followings)),
      error => dispatch(followingsError(error))
    );
  };
}

export function followInFollowings(id) {
  return (dispatch) => {
    return APIUtil.follow(id)
      .then(followings => dispatch(receiveFollowings(followings)),
      error => dispatch(followingsError(error))
    );
  };
}

export function unfollowInFollowings(id) {
  return (dispatch) => {
    return APIUtil.unfollow(id)
      .then(followings => dispatch(receiveFollowings(followings)),
      error => dispatch(followingsError(error))
    );
  };
}

export function followInSuggestion(id) {
  return (dispatch) => {
    return APIUtil.follow(id)
      .then(suggestions => dispatch(receiveSuggestions(suggestions)),
      error => dispatch(followingsError(error))
    );
  };
}

export function unfollowInSuggestion(id) {
  return (dispatch) => {
    return APIUtil.unfollow(id)
      .then(suggestions => dispatch(receiveSuggestions(suggestions)),
      error => dispatch(followingsError(error))
    );
  };
}
