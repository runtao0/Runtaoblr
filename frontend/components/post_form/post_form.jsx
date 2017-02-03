import React from 'react';
import { Link, withRouter } from 'react-router';
import { validateUrl } from 'youtube-validator'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {kind: "", title: "", content: "" },
      buttons: true
    };

    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  // component elements
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

  usernameHeader(kind) {
    return(
      <h1>Share your { kind } with everyone ♥ </h1>
    );
  }

  closeButton() {
    return (
      <button className="close_post_form" onClick={ this.resetDisplay.bind(this) }>Close</button>
    );
  }

  inputTitle() {
    let title = "Title"
    if (this.state.post.kind === "quote") title = "Who said this?"
    return (
      <input type="text"
        placeholder={title}
        value={this.state.title}
        onChange={this.update("title")}
        className="post_title-input"/>
    );
  }

  getMedia() {
    if (this.state.post.path) {
      switch (this.state.post.kind) {
        case "pic":
          return <img src={ this.state.post.path } />;
        case "video":
          return <video controls src={ this.state.post.path } />;
        case "audio":
          return <audio controls src={ this.state.post.path } />;
      }
    } else {
      if (this.state.post.kind === "pic" && this.state.post.content !== "") {
        return <img src={ this.state.post.content }/>;
      } else {
        return <h2 className="select-image">Select a file!</h2>;
      }
    }
  }

  inputButton() {
    return (
      <input type="file" name="file"
        onChange={ this.updateFile }/>
    );
  }

  createPostButton() {
    let submitFunc = this.handleFileSubmit;
    if (this.state.post.kind === "text" || this.state.post.kind === "quote") {
      submitFunc = this.handleTextSubmit;
    }
    return (
      <button className="submit_post"
              onClick={ submitFunc }>Post</button>
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

  // forms

  inputContent() {
    let placeholder = "Your content here";
      switch (this.state.post.kind) {
        case "pic":
          placeholder = "Or use a URL";
          break;
        case "quote":
          placeholder = "What was said?";
          break;
      }
    return (
      <textarea placeholder={ placeholder }
      onChange={this.update("content")}
      rows="3"/>
    );
  }

  textForm() {
    if (this.state.post.kind === "quote") {
      return(
        <div className="post_form_container group">
          { this.profilePicture() }
          <section className="post_form">
            <form className="form_content">
              { this.usernameHeader("quote") }
              { this.inputContent() }
              { this.inputTitle() }
            </form>
            { this.createPostButton() }
            { this.closeButton() }
          </section>
        </div>
      );
    }
    return(
      <div className="post_form_container group">
        { this.profilePicture() }
        <section className="post_form">
          <form className="form_content">
            { this.usernameHeader("text") }
            { this.inputTitle() }
            { this.inputContent() }
          </form>
          { this.createPostButton() }
          { this.closeButton() }
        </section>
      </div>
    );
  }

  imageAudioVideoForm() {
    let kind = "image";
    let imageUrl = <div/>;
    switch(this.state.post.kind) {
      case "pic":
        imageUrl = this.inputContent();
        break;
      case "video":
        kind = "video";
        break;
      case "audio":
        kind = "audio";
        break;
    }
    return (
      <div className="post_form_container group">
        { this.profilePicture() }
        <section className="post_form">
          <form className="form_content">
            { this.usernameHeader(kind) }
            { this.inputTitle() }
            { this.getMedia() }
            { this.inputButton() }
            { imageUrl }
          </form>
          { this.createPostButton() }
          { this.closeButton() }
        </section>
      </div>
    );
  }

  // update inputs

  update(field) {
    return e => {
      const post = Object.assign({}, this.state.post);
      post[field] = e.currentTarget.value;
      this.setState({
        post
      });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    const title = this.state.post.title;
    const kind = this.state.post.kind;
    if (file) {
      fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = function () {
      this.setState({
        post: {
          kind,
          title,
          file,
          path: fileReader.result
        },
        buttons: false,
      });
    }.bind(this);
  }

  changeDisplay(atype) {
    return () => {
      this.setState({
        post: { kind: atype, title: "", content: "" },
        buttons: false
      });
    };
  }

  resetDisplay() {
    const confirmDeletDraft = confirm("Are you sure you want to throw away your post?");
    if (confirmDeletDraft === true) {
      this.setState({
        post: {kind: "", title: "", content: "" },
        buttons: true
      });
    }
  }

  // handle submits

  handleFileSubmit(e) {
    e.preventDefault();
    if (!this.state.post.title){
      alert("Your title cannot be blank");
    } else {
    const formData = new FormData();
    formData.append("post[title]", this.state.post.title);
    if (this.state.post.file) {
      switch(this.state.post.kind) {
        case "pic":
          formData.append("post[image]", this.state.post.file);
          break;
        case "video":
          formData.append("post[video]", this.state.post.file);
          break;
        case "audio":
          formData.append("post[audio]", this.state.post.file);
          break;
        default:
          break;
      }
    }
    formData.append("post[kind]", this.state.post.kind);
    formData.append("post[content]", this.state.post.content);
    // post request, then reset to buttons
    this.props.createImagePost(formData).then(() =>{
      this.setState({
        post: {kind: "", title: "", content: "" },
        buttons: true
      });
    });
  }
  }

  handleTextSubmit(e) {
    e.preventDefault();
    const post = this.state.post;
    if (!post.title || !post.content){
      alert("Your post cannot be blank");
    } else {
      this.props.createPost({ post }).then(() =>{
        this.setState({
          post: {kind: "", title: "", content: "" },
          buttons: true
        });
      });
    }
  }

  render() {
      if (this.props.currentUser) {
        if(this.state.buttons) {
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
        switch (this.state.post.kind) {
          case("text"):
            return this.textForm();
          case("quote"):
            return this.textForm();
          default:
            return this.imageAudioVideoForm();
        }
      }
    } else {
        return <div/>;
      }
    }
  }

export default withRouter(PostForm);
