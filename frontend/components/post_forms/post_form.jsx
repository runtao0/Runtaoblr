import React from 'react';
import { Link, withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    const kind = props.kind;
    const title = props.title ? props.title : "";
    const content = props.content ? props.content : "";
    this.state = {
      kind,
      title,
      content,
    };

    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
  }

  usernameHeader(kind = this.props.kind) {
    if (this.state.error) {
      return (
        <h1>Woops! There was an error, try again</h1>
      );
    }
    return(
      <h1>Share your { kind } with everyone ♥ </h1>
    );
  }

  closeButton() {
    return (
      <button className="close_post_form" onClick={ this.props.resetDisplay(true) }>Close</button>
    );
  }

  inputTitle() {
    let title = "Title"
    if (this.state.kind === "quote") title = "Who said this?"
    return (
      <input type="text"
        placeholder={title}
        value={ this.state.title }
        onChange={ this.update("title").bind(this) }
        className="post_title-input"/>
    );
  }

  getMedia() {
    if (this.state.path) {
      switch (this.state.kind) {
        case "pic":
          return <img src={ this.state.path } />;
        case "video":
          return <video controls src={ this.state.path } />;
        case "audio":
          return <audio controls src={ this.state.path } />;
      }
    } else {
      if (this.state.kind === "pic" && this.state.content !== "") {
        return <img src={ this.state.content }/>;
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
    if (this.state.kind === "text" || this.state.kind === "quote") {
      submitFunc = this.handleTextSubmit;
    }
    return (
      <button className="submit_post"
              onClick={ submitFunc }>Post</button>
    );
  }

  // forms

  inputContent() {
    let placeholder = "Your content here";
      switch (this.state.kind) {
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
    if (this.state.kind === "quote") {
      return(
        <section className="post_form">
          <form className="form_content">
            { this.usernameHeader("quote") }
            { this.inputContent() }
            { this.inputTitle() }
          </form>
          { this.createPostButton() }
          { this.closeButton() }
        </section>
      );
    }
    return(
      <section className="post_form">
        <form className="form_content">
          { this.usernameHeader("text") }
          { this.inputTitle() }
          { this.inputContent() }
        </form>
        { this.createPostButton() }
        { this.closeButton() }
      </section>
    );
  }

  imageAudioVideoForm() {
    let kind = "image";
    let imageUrl = <div/>;
    switch(this.state.kind) {
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
    );
  }

  // update inputs

  update(field) {
    return (e) => {
      this.state[field] = e.currentTarget.value;
      this.setState( this.state );
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = () => {
      this.setState({
        file,
        path: fileReader.result,
      });
    }
  }

  // handle submits

  handleFileSubmit(e) {
    e.preventDefault();
    this.props.toggleLoaderState()
    if (!this.state.title){
      this.props.toggleLoaderState()
      alert("Your title cannot be blank");
    } else {
      const formData = new FormData();
      formData.append("post[title]", this.state.title);
      if (this.state.file) {
        switch(this.state.kind) {
          case "pic":
            formData.append("post[image]", this.state.file);
            break;
          case "video":
            formData.append("post[video]", this.state.file);
            break;
          case "audio":
            formData.append("post[audio]", this.state.file);
            break;
          default:
            break;
        }
      }
      formData.append("post[kind]", this.state.kind);
      formData.append("post[content]", this.state.content);
      this.props.createImagePost(formData).then(() =>{
        this.props.toggleLoaderState();
        this.props.resetDisplay();
      }, () => {
        this.setState({
          error: true
        })
      });
    }
  }

  handleTextSubmit(e) {
    e.preventDefault();
    this.props.toggleLoaderState();

    const post = this.state;
    if (!post.title || !post.content){
      this.props.toggleLoaderState();
      alert("Your post cannot be blank");
    } else {
      this.props.createPost({ post }).then(() =>{
        this.props.toggleLoaderState();
        this.props.resetDisplay();
      }, () => {
        this.setState({
          error: true
        })
      });
    }
  }

  render() {
    switch (this.state.kind) {
      case("text"):
        return this.textForm();
      case("quote"):
        return this.textForm();
      default:
        return this.imageAudioVideoForm();
    }
  }
}

export default withRouter(PostForm);
