import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const _nullUser = {
  currentUser: null,
  errors: [],
};

// regular action creators
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});



// thunk action creators
export function logIn(user) {
  return (dispatch) => {
    return APIUtil.logIn(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors))
      );
  };
}

export function signUp(user) {
  return (dispatch) => {
    return APIUtil.signUp(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors))
    );
  };
}

export function logOut() {
  return (dispatch) => {
    return APIUtil.logOut()
      .then(() => dispatch(receiveCurrentUser(null)),
        errors => dispatch(receiveErrors(errors))
    );
  };
}
