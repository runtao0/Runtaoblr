import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {kind: "", title: "", content: " " },
      buttons: true
    };

    this.profile_pic = this.props.currentUser.profile_pic;
    this.changeDisplay = this.changeDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.update = this.update.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.ImageForm = this.ImageForm.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handlePicSubmit = this.handlePicSubmit.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  getImage() {
    if (this.state.post.imageURL) {
      return <img src={this.state.post.imageURL}/>;
    } else {
      return <h2>Select a file!</h2>;
    }
  }

  changeDisplay(atype) {
    // neato!
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
          imageFile: file,
          imageURL: fileReader.result
        },
        buttons: false,
      });
    }.bind(this);
  }

  handlePicSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.post.title);
    formData.append("post[media_content]", this.state.post.imageFile);
    formData.append("post[kind]", this.state.post.kind);
    // post request, then reset to buttons
    this.props.createPost(formData).then(() =>{
      this.setState({
        post: {kind: "", title: "", content: "" },
        buttons: true
      });
    });
  }

  preview() {
    if (this.state.post.imageUrl) {
      return <img src={ this.state.post.imageUrl } />;
    } else {
      return <div/>;
    }
  }

  ImageForm () {

    return (
      <div className="post_form_container group">
        <div className="profile_pic">
          <img src={this.profile_pic}></img>
        </div>
        <section className="post_form">
          <form className="form_content">
            <h1>{this.props.currentUser.username} ♥ </h1>
            <input type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update("title")}
              className="post_title-input"/>
            <input type="file" className="image_input_field" name="file"
              encType="multipart/form-data"
              onChange={this.updateFile} />
          </form>
          {this.getImage()}
          <button className="submit_post"
                  onClick={this.handlePicSubmit}>Post</button>
          <button className="close_post_form" onClick={this.resetDisplay}>Close</button>
        </section>
      </div>
    );
  }

  render() {
      if (this.props.currentUser) {
        if(this.state.buttons) {
          return(
          <div className="post_form_container group">
            <div className="profile_pic">
              <img src={this.profile_pic}></img>
            </div>
            <section className="post_buttons">
              <ul className="post_button_list">
                <li className="post_button">
                  <button onClick={this.changeDisplay("text")}>
                    <div className="text_icon"></div>
                    Text</button>
                </li>
                <li className="post_button photo">
                  <button onClick={this.changeDisplay("pic")}>
                    <div className="pic_icon"></div>
                    Photo</button>
                </li>
                <li className="post_button">
                  <button onClick={this.changeDisplay("quote")}>
                    <div className="quote_icon"></div>
                    Quote</button>
                </li>
                <li className="post_button">
                  <button onClick={this.changeDisplay("audio")}>
                    <div className="audio_icon"></div>
                    Audio</button>
                </li>
                <li className="post_button">
                  <button onClick={this.changeDisplay("video")}>
                    <div className="video_icon"></div>
                    Video</button>
                </li>
              </ul>
            </section>
          </div>
        );
      } else {
        if (this.state.post.kind === "pic") {
          return this.ImageForm();
        } else {
          return (
            <div className="post_form_container group">
              <div className="profile_pic">
                <img src={this.profile_pic}></img>
              </div>
              <section className="post_form">
                <form className="form_content" onSubmit={this.handleTextSubmit}>
                  <h1>{this.props.currentUser.username} ♥ </h1>
                  <input type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.update("title")}
                    className="post_title-input"/>
                  <textarea placeholder="Your content here"
                    onChange={this.update("content")}
                    rows="3"/>
                </form>
                <button className="submit_post"
                        onClick={this.handleTextSubmit}>Post</button>
                <button className="close_post_form" onClick={this.resetDisplay}>Close</button>
              </section>
            </div>
          );
        }
      }
    } else {
        return <div></div>;
      }
    }
  }

export default withRouter(PostForm);
