import React from 'react';
import { Link } from 'react-router';

const loggedInGreeting = (currentUser, logOut) => {
  return(
    <header className="log_buttons group">
      <ul className="button_list">
        <li><button className="log_out" onClick={ logOut }>Log Out</button></li>
      </ul>
    </header>
  );
}

const notLoggedInGreeting = (demoUser) => (
  <header className="log_buttons group">
    <ul className="button_list">
      <li><button className="toggle_buttons"><Link to="/login">Log In</Link></button></li>

      <li><button className="toggle_buttons"><Link to="/signup">Sign Up</Link></button></li>

      <li><button className="toggle_buttons" onClick={ demoUser }>Demo User</button></li>
    </ul>
  </header>
);

// these are unpacked props from container (mapped shit)
const Greeting = ({ currentUser, logOut, demoUser}) => {
  if (currentUser === null) {
    return notLoggedInGreeting(demoUser);
  } else {
    return loggedInGreeting(currentUser, logOut);
  }
}

export default Greeting;
