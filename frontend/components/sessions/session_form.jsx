import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", errors: this.props.errors };

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.redirectIfLoggedIn();
	}

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

	renderErrors() {
		return (
			<ul className="error_list">
				{this.props.errors.map((error, ind) => (
					<li className="error" key={`error-${ind}`}>{ error }</li>
				))}
			</ul>
		);
	}

	submitButton() {
		const submitButton = (this.props.formType === "login") ? "Log In" : "Create Account";
		return(
			<input type="submit"
				className="submit" value={ submitButton } />
		);
	}

	usernameInput() {
		return(
			<input type="text"
				placeholder="Username"
				value={this.state.username}
				onChange={this.update("username")}
				className="login-input" />
		);
	}

	passwordInput() {
		return(
			<input type="password"
				placeholder="Password"
				value={this.state.password}
				onChange={this.update("password")}
				className="login-input" />
		);
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user}).then(() =>{
			this.props.router.push("/dashboard") ;});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div className="login_form_container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{this.renderErrors()}
					<div className="login-form">
						{ this.usernameInput() }
						{ this.passwordInput() }
					</div>
					{ this.submitButton() }
				</form>
      </div>
    );
  }
}
export default withRouter(SessionForm);
