import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { clearPosts } from '../../actions/post_actions';


const mapStateToProps = ({ session, posts, suggestions }) => ({
  currentUser: session.currentUser,
  post_errors: posts.errors,
});

const mapDispatchToProps = (dispatch) => ({
  clearPosts: () => dispatch(clearPosts),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
