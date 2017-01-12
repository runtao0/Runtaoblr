import * as APIUtil from '../util/blog_api_util';
import { receivePosts, postError } from './post_actions';

export const RECEIVE_BLOG_USER = "RECEIVE_BLOG_USER";
export const BLOG_ERRORS = "BLOG_ERRORS";

export const receiveBlogUser = (blogUser) => ({
  type: RECEIVE_BLOG_USER,
  blogUser,
});

export const blogError = errors => ({
  type: BLOG_ERRORS,
  errors
});

export function getBlogUser(username) {
  return (dispatch) => {
    return APIUtil.fetchUserBlog(username)
      .then(blogUser => dispatch(receiveBlogUser(blogUser)),
      errors => dispatch(blogError(errors))
    );
  };
}

export function getBlogPosts(userID, page) {
  return (dispatch) => {
    return APIUtil.fetchBlogPosts(userID, page)
      .then(blogPosts => dispatch(receivePosts(blogPosts)),
      errors => dispatch(postError(errors))
    );
  };
}
