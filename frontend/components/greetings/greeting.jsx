import React from 'react';
import { Link } from 'react-router';

const loggedInGreeting = (currentUser, logOut) => {
  return(
    <header className="header-group">
      <h1>Greetings! { currentUser.username }</h1>
      <button onClick={ logOut }>Log Out</button>
    </header>
  );
}

const notLoggedInGreeting = () => (
  <nav>
    <Link to="/login">Log In</Link>
    <br/>
    <Link to="/signup">Sign Up</Link>
  </nav>
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
