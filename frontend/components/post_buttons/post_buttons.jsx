import React from 'react';
import { Link, withRouter } from 'react-router';
import PostForm from '../post_forms/post_form';

class PostButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: true,
      loading: false
    };

    this.changeDisplay = this.changeDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.toggleLoaderState = this.toggleLoaderState.bind(this);
  }

  // component elements
  loadingWheel() {
    return <div className="loader"/>;
  }

  profilePicture() {
    const linkToUserBlog = `/${this.props.currentUser.username}`;
    return (
      <Link to={ linkToUserBlog }>
        <div className="profile_pic">
          <img src={this.props.currentUser.profile_pic}></img>
        </div>
      </Link>
    );
  }

  postButton(kind) {
    let buttonText = "";
    const buttonClass = kind + "_icon";
    switch (kind) {
      case "text":
        buttonText = "Text";
        break;
      case "pic":
        buttonText = "Photo";
        break;
      case "quote":
        buttonText = "Quote";
        break;
      case "audio":
        buttonText = "Audio";
        break;
      case "video":
        buttonText = "Video";
        break;
    }
    return (
      <li className="post_button">
        <button onClick={this.changeDisplay(kind)}>
          <div className={ buttonClass }></div>
          { buttonText }</button>
      </li>
    );
  }

  changeDisplay(atype) {
    if (this.state.buttons) {
      return () => {
        this.setState({
          kind: atype,
          buttons: false,
        });
      };
    } else {
      return () => {
        this.setState({
          kind: atype,
          buttons: true,
        });
      };
    }
  }

  resetDisplay(closeBool = false) {
    if (closeBool) {
      return (() => {
        const confirmDeletDraft = confirm("Are you sure you want to throw away your post?");
        if (confirmDeletDraft === true) {
          this.setState({
            buttons: true,
            loading: false,
          });
        }
      });
    } else {
      this.setState({
        buttons: true,
        loading: false,
      });
    }
  }

  toggleLoaderState() {
      this.setState({
        loading: !this.state.loading
      });
  }

  render() {
      if (this.props.currentUser) {
        if (this.state.loading) {
          return(
            <div className="post_form_container group">
              { this.profilePicture() }
              <section className="post_buttons">
                <ul className="post_button_list purple group">
                  { this.loadingWheel() }
                </ul>
              </section>
            </div>
          );
        } else if (this.state.buttons) {
          return(
          <div className="post_form_container group">
            { this.profilePicture() }
            <section className="post_buttons">
              <ul className="post_button_list">
                { this.postButton("text") }
                { this.postButton("pic") }
                { this.postButton("quote") }
                { this.postButton("audio") }
                { this.postButton("video") }
              </ul>
            </section>
          </div>
        );
      } else {
        return (
          <div className="post_form_container group">
            { this.profilePicture() }
            <PostForm kind={ this.state.kind }
              resetDisplay={ this.resetDisplay }
              createImagePost={ this.props.createImagePost }
              createPost={ this.props.createPost }
              toggleLoaderState={ this.toggleLoaderState }
              />
          </div>
        );
      }
    } else {
        return <div/>;
      }
    }
  }

export default withRouter(PostButtons);
