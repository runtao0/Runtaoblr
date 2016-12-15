import { connect } from 'react-redux';
import UserSettings from './user_settings';
import { requestFollowings, followInFollowings, unfollowInFollowings } from '../../actions/user_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  requestFollowings: () => dispatch(requestFollowings()),
  follow: (id) => dispatch(followInFollowings(id)),
  unfollow: (id) => dispatch(unfollowInFollowings(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);
