import React from 'react';
import { Link, withRouter } from 'react-router';

function Greeting(props) {

  const linkToUserBlog = () => {
    return `/${props.currentUser.username}`;
  }

  const logOut = () => {
    props.logOut().then(() => { props.router.push("/"); });
  }

  const logInDemo = () => {
    props.demoUser().then(() => { props.router.push("/dashboard"); })
  }

  function getLogo() {
    return(
      <div className="logo">r</div>
    );
  }

  function getDashboardButton() {
    if (props.router.location.pathname === "/dashboard") {
      return <div/>;
    } else {
      return(
        <li>
          <Link to="/dashboard"
            title="dashboard" className="toggle_buttons">
            <i className="fa fa-tachometer" aria-hidden="true"/>
          </Link>
        </li>
      );
    }
  }

  function getUserBlogButton() {
    return(
      <li>
        <Link to={ linkToUserBlog() }
          title="Your Blog" className="toggle_buttons">
          <i className="fa fa-th" aria-hidden="true"/>
        </Link>
      </li>
    );
  }

  function getUserSettingsButton() {
    return(
      <li>
        <Link to="/user_settings"
          title="User Settings"className="toggle_buttons">
          <i className="fa fa-cogs" aria-hidden="true"/>
        </Link>
      </li>
    );
  }

  function getLogOutButton() {
    return(
      <li>
        <button className="log_out" onClick={ logOut.bind(this) }>
          <i className="fa fa-power-off" aria-hidden="true"/>
        </button>
      </li>
    );
  }

  function loggedInGreeting() {
    return(
      <header className="header group">
        { getLogo() }
        <ul className="button_list">
          { getLogOutButton() }
          { getUserSettingsButton() }
          { getUserBlogButton() }
          { getDashboardButton() }
        </ul>
      </header>
    );
  }

  function getDemoUserButton() {
    // demo user
    return(
      <li>
        <button className="toggle_buttons" onClick={ logInDemo.bind(this) }>Demo User</button>
      </li>
    );
  }

  function getLogInButton() {
    return(
      <li>
        <Link to="/login" className="toggle_buttons">Log In</Link>
      </li>
    );
  }

  function getSignUpButton() {
    return(
      <li>
        <Link to="/signup" className="toggle_buttons">Sign Up</Link>
      </li>
    );
  }

  function notLoggedInGreeting() {
    return(
      <header className="log_buttons group">
        { getLogo() }
        <ul className="button_list">
          { getDemoUserButton() }
          { getLogInButton() }
          { getSignUpButton() }
        </ul>
      </header>
    );
  }

  if (props.currentUser === null) {
    return notLoggedInGreeting();
  } else {
    return loggedInGreeting();
  }

}

export default withRouter(Greeting);
