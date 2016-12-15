import { connect } from 'react-redux';
import Following from './following';
import { requestFollowings, followInFollowings, unfollowInFollowings } from '../../actions/user_actions';


const mapStateToProps = ({ session, following }) => ({
  currentUser: session.currentUser,
  following,
});

const mapDispatchToProps = (dispatch) => ({
  requestFollowings: () => dispatch(requestFollowings()),
  follow: (id) => dispatch(followInFollowings(id)),
  unfollow: (id) => dispatch(unfollowInFollowings(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Following);
