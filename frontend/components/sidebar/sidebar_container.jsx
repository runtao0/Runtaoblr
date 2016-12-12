import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { follow, unfollow } from '../../util/user_api_util';
import { requestSuggestions } from '../../actions/user_actions';

const mapStateToProps = ({ session, suggestions }) => ({
  currentUser: session.currentUser,
  suggestions,
});

const mapDispatchToProps = (dispatch) => ({
  requestSuggestions: () => dispatch(requestSuggestions()),
  follow: (id) => follow(id),
  unfollow: (id) => unfollow(id),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
