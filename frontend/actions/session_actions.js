import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// sync
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

// async
export function showUser() {
  return (dispatch) => {
    return APIUtil.showUser()
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors))
      );
  };
}

export function editUser(user) {
  return (dispatch) => {
    return APIUtil.editUser(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors))
      );
  };
}

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
