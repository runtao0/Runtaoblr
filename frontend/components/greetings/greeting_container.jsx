import { connect } from 'react-redux';
import { logIn, signUp, logOut } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => {
  return {
  currentUser: session.currentUser
}}

const DEMO = { user: { username: "runtao", password: "runtao" } };

const mapDispatchToProps = (dispatch) => ({
  demoUser: () => dispatch(logIn(DEMO)),
  logIn: (user) => dispatch(logIn(user)),
  signUp: (user) => dispatch(signUp(user)),
  logOut: () => dispatch(logOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
