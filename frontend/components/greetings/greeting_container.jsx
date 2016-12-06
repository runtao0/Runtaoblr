import { connect } from 'react-redux';
import { logIn, signUp, logOut } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
  signUp: (user) => dispatch(signUp(user)),
  logOut: () => dispatch(logOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
