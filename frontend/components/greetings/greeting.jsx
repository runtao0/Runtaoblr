import React from 'react';
import { Link, withRouter } from 'react-router';

const loggedInGreeting = (currentUser, out) => {
  return(
    <header className="header group">
      <div className="logo">r</div>
      <ul className="button_list">
        <li>
          <button className="log_out" onClick={ out }>
            Log Out
          </button>
        </li>
      </ul>
    </header>
  );
}


const notLoggedInGreeting = (demoUser) => (
  <header className="log_buttons group">
    <div className="logo">r</div>
    <ul className="button_list">
      <li><button className="toggle_buttons" onClick={ demoUser }>Demo User</button></li>
      <li><button className="toggle_buttons"><Link to="/login">Log In</Link></button></li>
      <li><button className="toggle_buttons"><Link to="/signup">Sign Up</Link></button></li>

    </ul>
  </header>
);

// these are unpacked props from container (mapped shit)
const Greeting = ({ currentUser, logOut, demoUser, router}) => {
  function logInDemo() {
    demoUser().then(() => {router.push("/dashboard");})
  }

  function out() {
    logOut().then(() => {router.push("/");})
  }
  if (currentUser === null) {
    return notLoggedInGreeting(logInDemo.bind(this));
  } else {
    return loggedInGreeting(currentUser, out.bind(this));
  }
}

export default withRouter(Greeting);
