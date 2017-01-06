import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { requestSuggestions,
          follow, unfollow } from '../../actions/user_actions';

const mapStateToProps = ({ session, suggestions }) => ({
  currentUser: session.currentUser,
  suggestions,
});

const mapDispatchToProps = (dispatch) => ({
  requestSuggestions: () => dispatch(requestSuggestions()),
  follow: (id) => dispatch(follow(id)),
  unfollow: (id) => dispatch(unfollow(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
