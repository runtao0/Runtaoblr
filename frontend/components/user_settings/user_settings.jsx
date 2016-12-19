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
      loading: false,
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
      return <img
        className="edit-profile-pic"
        src={this.state.newProfile}/>;
    } else {
      return <img
        className="edit-profile-pic"
        src={this.state.currentUser.profile_image}/>;
    }
  }

  getCover() {
    if (this.state.newCover) {
      return <img
        className="edit-cover-pic"
        src={this.state.newCover}/>;
    } else {
      return <img
        className="edit-cover-pic"
        src={this.state.currentUser.cover_pic}/>;
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
    const user = this.state.currentUser;
    const cover = this.state.newCover;
    const prof = this.state.newProfile;
    this.setState({
      currentUser: user,
      edit: true,
      newCover: cover,
      newProfile: prof,
      loading: true,
    });
    const formData = new FormData();
    // what if the username is not unique!!!!!??????

    if (this.state.newCover !== null) {
      formData.append("user[cover_pic]", this.state.currentUser.cover_pic);
    }
    if (this.state.newProfile !== null) {
      debugger
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
        loading: false,
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
        <div className="edit-content-container group">
          <h1>Account Info</h1>
          <div className="cover_pic-wrapper">
            <img className="edit-cover-pic"
              src={this.state.currentUser.cover_pic}/>
          </div>
          <div className="profile_pic-wrapper">
            <img className="edit-profile-pic"
              src={this.state.currentUser.profile_image}/>
          </div>
          <ul className="edit-text">
            <li className="edit-username group">
              <h2>{this.state.currentUser.username}</h2>
            </li>
            <li className="edit-description group">
              <p>{this.state.currentUser.description}</p>
            </li>
          </ul>
        </div>
        <button className="account-edit-toggle"
          onClick={ this.toggleEdit }>Edit</button>
      </section>
    );
  }

  renderEditSection () {
    return (
      <section className="user-edit">
        <div className="edit-content-container group">
          <h1>Account Info</h1>
          <label className="cover_pic-wrapper"
            for="cover-pic-file-form">
            { this.getCover() }
            <input type="file"
              onChange={this.updateFile("cover_pic")}
              className="cover-pic-file-form"
              id="cover-pic-file-form"/>
          </label>
          <label className="profile_pic-wrapper" for="profile-pic-file-form">
            { this.getProfile() }
            <input type="file"
              onChange={this.updateFile("profile_image")}
              className="profile-pic-file-form"
              id="profile-pic-file-form"/>
          </label>
          <ul className="edit-text">
            <li className="edit-username group">
              <input type="text"
                className="edit-username-form"
                value={this.state.currentUser.username}
                onChange={this.update("username")}/>
            </li>
            <li className="edit-description group">
              <textarea
                className="edit-description-form"
                value={this.state.currentUser.description}
                onChange={this.update("description")}/>
            </li>
          </ul>
        </div>
        <button className="account-edit-toggle"
          onClick={ this.handleSubmit }>Save</button>
        <button className="account-edit-cancel"
          onClick={ this.toggleEdit }>Cancel</button>
      </section>
    );
  }

  render() {
    let accountInfo;
    if (this.state.edit) {
      accountInfo = this.renderEditSection();
    } else {
      accountInfo = this.renderProfile();
    }
    if (this.state.loading) {
      return (
        <div className="following group">
          <section className="dashboard-header group">
            <GreetingContainer/>
          </section>
          <div className="feed_and_sidebar group">
            <div className="loader"/>
            <SidebarContainer/>
          </div>
          <footer></footer>
        </div>
      );
    } else {
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
}

export default UserSettings;
