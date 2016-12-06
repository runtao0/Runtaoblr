import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  componentDidMount(){
    this.redirectIfLoggedIn();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
		if (this.props.errors) {
	    return (
	      <ul>
					{this.props.errors.map((error, ind) => (
						<li key={`error-${ind}`}>{ error }</li>
					))}
	      </ul>
	    );
	  } else {
			return <div></div>;
		}
  }
	// renders correct login or signup link
	navButton() {
		if (this.props.formType === "login") {
			return <Link to="/signup">Sign Up</Link>;
		} else {
			return <Link to="/login">Log In</Link>;
		}
	}

  render() {
		// refactor material
		const submitButton = (this.props.formType === "login") ? "Log In" : "Create Account";
    return(
      <div className="login_form_container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
				<h1>Welcome to Runtaoblr!</h1>
					<h2>Please {this.props.formType} or {this.navButton()} instead</h2>
					{this.renderErrors()}
					<div className="login-form">
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
					</div>
					<input type="submit" value={submitButton} />
				</form>
      </div>
    );
  }
}

export default SessionForm;
