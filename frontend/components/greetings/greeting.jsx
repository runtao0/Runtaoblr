import React from 'react';
import { Link, withRouter } from 'react-router';

const loggedInGreeting = (currentUser, out, dash) => {
  const linkToUserBlog = `/${currentUser.username}`
  let dashboardButton = <div/>;
  if (dash) {
    dashboardButton = <li>
      <button title="dashboard" className="toggle_buttons"><Link to="/dashboard"><i className="fa fa-tachometer" aria-hidden="true"></i></Link></button>
    </li>;
  }
  return(
    <header className="header group">
      <div className="logo">r</div>
      <ul className="button_list">
        <li>
          <button className="log_out" onClick={ out }>
            <i className="fa fa-power-off" aria-hidden="true"></i>
          </button>
        </li>
        <li>
          <button title="User Settings"className="toggle_buttons"><Link to="/user_settings"><i className="fa fa-cogs" aria-hidden="true"></i></Link></button>
        </li>
        <li>
          <button title="Your Blog" className="toggle_buttons"><Link to={linkToUserBlog}><i className="fa fa-th" aria-hidden="true"></i></Link></button>
        </li>
        { dashboardButton }
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

const Greeting = ({ currentUser, logOut, demoUser, router}) => {
  function logInDemo() {
    demoUser().then(() => {router.push("/dashboard");})
  }

  function out() {
    return logOut().then(() => {
      router.push("/");})
  }

  let dashBool = true;
  if (router.location.pathname === "/dashboard") dashBool = false;

  if (currentUser === null) {
    return notLoggedInGreeting(logInDemo.bind(this));
  } else {
    return loggedInGreeting(currentUser, out.bind(this), dashBool);
  }
}

export default withRouter(Greeting);
