import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logIn, signUp, logOut } from '../../actions/session_actions'

const mapStateToProps = ({ session }) => ({
    // neat trick!!!
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

// ownProps can give you the url path, and is only accessible in mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? logIn : signUp;

  return {
    formType,
    processForm: (user) => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export const SignUpFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export const SignInFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
