import { connect } from 'react-redux';
import UserSettings from './user_settings';
import { showUser, editUser } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  showUser: () => dispatch(showUser()),
  editUser: (user) => dispatch(editUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);
