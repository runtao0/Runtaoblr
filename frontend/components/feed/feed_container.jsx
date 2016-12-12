import { connect } from 'react-redux';
import Feed from './feed';
import { follow, unfollow } from '../../util/user_api_util';
import { like, unlike } from '../../util/post_api_util';
import { requestPosts, requestOnePost, createPost, editPost, destroyPost }
from '../../actions/post_actions';

const mapStateToProps = ({ session, posts }) => ({
  currentUser: session.currentUser,
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts()),
  requestOnePost: (post_id) => dispatch(requestOnePost(post_id)),
  editPost: (post) => dispatch(editPost(post)),
  destroyPost: (post) => dispatch(destroyPost(post)),
  // follow: (id) => follow(id),
  // unfollow: (id) => unfollow(id),
  like: (id) => like(id),
  unlike: (id) => unlike(id),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
