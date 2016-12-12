import { connect } from 'react-redux';
import Dashboard from './dashboard';


const mapStateToProps = ({ session, posts, suggestions }) => ({
  currentUser: session.currentUser,
  post_errors: posts.errors,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
