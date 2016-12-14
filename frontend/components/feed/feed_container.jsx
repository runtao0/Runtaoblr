import { connect } from 'react-redux';
import Feed from './feed';
import { requestPosts, requestOnePost, createPost }
from '../../actions/post_actions';

const mapStateToProps = ({ session, posts }) => ({
  currentUser: session.currentUser,
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts()),
  requestOnePost: (post_id) => dispatch(requestOnePost(post_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
