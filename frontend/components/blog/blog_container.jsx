import { connect } from 'react-redux';
import Blog from './blog';
import { follow, unfollow } from '../../actions/user_actions';
import { getBlogUser } from '../../actions/blog_actions';
import { clearPosts } from '../../actions/post_actions';

const mapStateToProps = ({ session, blogUser }) => ({
  currentUser: session.currentUser,
  blogUser: blogUser,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(follow(id)),
  unfollow: (id) => dispatch(unfollow(id)),
  getBlogUser: (username) => dispatch(getBlogUser(username)),
  clearPosts: () => dispatch(clearPosts),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
