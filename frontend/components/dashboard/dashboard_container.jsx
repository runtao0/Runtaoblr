import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { allPosts, allSuggestions } from '../../reducers/selectors';
import { requestPosts, requestOnePost, createPost, editPost, destroyPost }
from '../../actions/post_actions';
import { requestSuggestions } from '../../actions/user_actions';

const mapStateToProps = ({ session, posts, suggestions }) => ({
  currentUser: session.currentUser,
  posts: allPosts(posts),
  post_errors: posts.errors,
  suggestions: allSuggestions(suggestions),
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts()),
  requestOnePost: (post_id) => dispatch(requestOnePost(post_id)),
  editPost: (post) => dispatch(editPost(post)),
  destroyPost: (post) => dispatch(destroyPost(post)),
  requestSuggestions: () => dispatch(requestSuggestions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
