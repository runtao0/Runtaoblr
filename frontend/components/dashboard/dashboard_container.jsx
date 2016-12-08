import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { allPosts } from '../../reducers/selectors';
import { requestPosts, requestOnePost, createPost, editPost, destroyPost }
from '../../actions/post_actions';

const mapStateToProps = ({ session, posts }) => ({
  currentUser: session.currentUser,
  posts: allPosts(posts),
  post_errors: posts.errors,
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts()),
  requestOnePost: (post_id) => dispatch(requestOnePost(post_id)),
  editPost: (post) => dispatch(editPost(post)),
  destroyPost: (post) => dispatch(destroyPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
