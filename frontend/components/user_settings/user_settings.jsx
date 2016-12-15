import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from '../greetings/greeting_container';
import SidebarContainer from '../sidebar/sidebar_container';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      edit: false,
      newProfile: null,
      newCover: null,
    };
    this.renderEditSection = this.renderEditSection.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.update = this.update.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getCover = this.getCover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getProfile() {
    if (this.state.newProfile) {
      return <img src={this.state.newProfile}/>;
    } else {
      return <img src={this.state.currentUser.profile_image}/>;
    }
  }

  getCover() {
    if (this.state.newCover) {
      return <img src={this.state.newCover}/>;
    } else {
      return <img src={this.state.currentUser.cover_pic}/>;
    }
  }

  update(field) {
    return e => {
      const currentUser = Object.assign({}, this.state.currentUser);
      currentUser[field] = e.currentTarget.value;
      const newCover = this.state.newCover;
      const newProfile = this.state.newProfile;
      this.setState({
        currentUser,
        edit: true,
        newCover,
        newProfile,
      });
    };
  }

  toggleEdit(e) {
    e.preventDefault();
    const currentUser = this.props.currentUser;
    const edit = this.state.edit ? false : true;
    this.setState({
      currentUser,
      edit,
      newCover: null,
      newProfile: null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // what if the username is not unique!!!!!??????

    if (this.state.newCover) {
      formData.append("user[cover_pic]", this.state.currentUser.cover_pic);
    }
    if (this.state.newProfile) {
      formData.append("user[profile_image]", this.state.currentUser.profile_image);
    }
    formData.append("user[username]", this.state.currentUser.username);
    formData.append("user[description]", this.state.currentUser.description);
    // post request, then reset to buttons
    this.props.editUser(formData).then(() =>{
      this.setState({
        currentUser: this.props.currentUser,
        edit: false,
        newCover: null,
        newProfile: null,
      });
    });
  }

  updateFile(field) {
    return (e) => {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      let otherField;
      if (field === "profile_image") {
        if (this.state.newCover) {
          otherField = this.state.newCover;
        } else {
          otherField = this.state.currentUser.cover_pic;
        }
      } else {
        if (this.state.newProfile) {
          otherField = this.state.newProfile;
        } else {
          otherField = this.state.currentUser.profile_image;
        }
      }
      const currentUser = Object.assign({}, this.state.currentUser);
      currentUser[field] = file;
      if (file) {
        fileReader.readAsDataURL(file);
      }
        fileReader.onloadend = function () {
          if (field === "profile_image") {
            this.setState({
              currentUser,
              edit: true,
              newCover: otherField,
              newProfile: fileReader.result,
            });
          } else {
            this.setState({
              currentUser,
              edit: true,
              newCover: fileReader.result,
              newProfile: otherField,
            });
          }
        }.bind(this);
      };
    }


  renderProfile() {
    return (
      <section className="user-edit">
        <h1>Account Info</h1>
        <img className="edit-cover-pic"
          src={this.state.currentUser.cover_pic}/>
        <img className="edit-profile-pic"
          src={this.state.currentUser.profile_image}/>
        <ul className="edit-text">
          <li className="edit-username">
            <h2>Username</h2>
            <h3>{this.state.currentUser.username}</h3>
          </li>
          <li className="edit-description">
            <h2>Description</h2>
            <h3>{this.state.currentUser.description}</h3>
          </li>
        </ul>
        <button className="account-edit-toggle"
          onClick={ this.toggleEdit }>Edit</button>
      </section>
    );
  }

  renderEditSection () {
    return (
      <form className="user-edit">
        <h1>Account Info</h1>
        { this.getCover() }
        <input type="file"
          onChange={this.updateFile("cover_pic")}
          className="cover-pic-file-form"/>
        { this.getProfile() }
        <input type="file"
          onChange={this.updateFile("profile_image")}
          className="cover-pic-file-form"/>
        <ul className="edit-text">
          <li className="edit-username">
            <h2>Username</h2>
            <input type="text"
              className="edit-username-form"
              value={this.state.currentUser.username}
              onChange={this.update("username")}/>
          </li>
          <li className="edit-description">
            <h2>Description</h2>
              <input type="text"
                className="edit-description-form"
                value={this.state.currentUser.description}
                onChange={this.update("description")}/>
          </li>
        </ul>
        <button className="account-edit-toggle"
          onClick={ this.toggleEdit }>Cancel</button>
        <button className="account-edit-submit"
          onClick={ this.handleSubmit }>Save</button>
      </form>
    );
  }

  render() {
    let accountInfo;
    if (this.state.edit) {
      accountInfo = this.renderEditSection();
    } else {
      accountInfo = this.renderProfile();
    }
    return (
      <div className="following group">
        <section className="dashboard-header group">
          <GreetingContainer/>
        </section>
        <div className="feed_and_sidebar group">
          { accountInfo }
          <SidebarContainer/>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default UserSettings;
