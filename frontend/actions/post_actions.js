import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_ONE_POST = "RECEIVE_ONE_POST";
export const POST_ERRORS = "POST_ERRORS";
export const REMOVE_POST = "REMOVE_POST";

// sync actions
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const receiveOnePost = post => ({
  type: RECEIVE_ONE_POST,
  post,
});

export const removePost = post => ({
  type: REMOVE_POST,
  post,
});

export const postError = error => ({
  type: POST_ERRORS,
  error
});

// async actions
export function createPost(post) {
  return (dispatch) => {
    // right now all post actions will return all posts
    return APIUtil.createPost(post)
      .then(posts => dispatch(receivePosts(posts)),
      errors => dispatch(postError(errors))
    );
  };
}

export function editPost(post) {
  return (dispatch) => {
    // right now all post actions will return all posts
    return APIUtil.editPost(post)
      .then(posts => dispatch(receivePosts(posts)),
      errors => dispatch(postError(errors))
    );
  };
}

export function destroyPost(post) {
  return (dispatch) => {
    // right now all post actions will return all posts
    return APIUtil.destroyPost(post)
      .then(posts => dispatch(receivePosts(posts)),
      errors => dispatch(postErrors(errors))
    );
  };
}

export function requestPosts() {
  return (dispatch) => {
    return APIUtil.fetchPosts()
      .then(posts => dispatch(receivePosts(posts)),
      errors => dispatch(postError(errors))
    );
  };
}

export function requestOnePost(post_id) {
  return (dispatch) => {
    // right now all post actions will return all posts
    return APIUtil.fetchOnePost(post_id)
      .then(post => dispatch(receiveOnePost(post)),
      errors => dispatch(postError(errors))
    );
  };
}
