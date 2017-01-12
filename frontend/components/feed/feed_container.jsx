import { connect } from 'react-redux';
import Feed from './feed';
import { requestPosts, requestOnePost, createPost, clearPosts } from '../../actions/post_actions';
import { getBlogPosts, getBlogUser } from '../../actions/blog_actions';

const mapStateToProps = ({ session, posts, blogUser }) => ({
  currentUser: session.currentUser,
  posts,
  blogUser,
});

const mapDispatchToProps = (dispatch) => ({
  clearPosts: () => dispatch(clearPosts),
  requestPosts: (page) => dispatch(requestPosts(page)),
  requestOnePost: (post_id) => dispatch(requestOnePost(post_id)),
  getBlogPosts: (userID, page) => dispatch(getBlogPosts(userID, page)),
  getBlogUser: (username) => dispatch(getBlogUser(username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
