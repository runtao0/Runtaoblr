import React from 'react';
import { Link } from 'react-router';

const loggedInGreeting = (currentUser, logOut) => {
  return(
    <header className="log_out">
      <button onClick={ logOut }>Log Out</button>
    </header>
  );
}

const notLoggedInGreeting = () => (
  <header className="log_buttons group">
    <ul className="button_list">
      <li><button><Link className="toggle_buttons" to="/login">Log In</Link></button></li>

      <li><button><Link className="toggle_buttons" to="/signup">Sign Up</Link></button></li>
    </ul>
  </header>
);

// these are unpacked props from container (mapped shit)
const Greeting = ({ currentUser, logOut}) => {
  if (currentUser === null) {
    return notLoggedInGreeting();
  } else {
    return loggedInGreeting(currentUser, logOut);
  }
}

export default Greeting;
