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
    this.AudioForm = this.AudioForm.bind(this);
    this.TextForm = this.TextForm.bind(this);
    this.VideoForm = this.VideoForm.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handlePicSubmit = this.handlePicSubmit.bind(this);
    this.getImage = this.getImage.bind(this);
    this.parseYoutube = this.parseYoutube.bind(this);
    this.getVideo = this.getVideo.bind(this);
    this.handleVideoSubmit = this.handleVideoSubmit.bind(this);
  }

  handleVideoSubmit(e) {
    e.preventDefault();
    const post = this.state.post;
    if (!post.title || !post.content){
      alert("Your edit cannot be blank");
    } else {
      if (this.parseYoutube()) {
        post.content = this.parseYoutube();
      }
      this.props.createPost({ post }).then(() =>{
        this.setState({
          post: {kind: "", title: "", content: "" },
          buttons: true,
        });
      });
    }
  }

  parseYoutube() {
    if (this.state.post.content.includes("youtube")) {
      const youtubeURL = this.state.post.content.split("&")[0];
      const embedded = "https://youtube.com/embed/"
                        .concat(youtubeURL.substr(youtubeURL.length - 11));
      return embedded;
    } else {
      return false;
    }
  }

  getVideo() {
    if (this.parseYoutube()) {
      return (<iframe width="560" height="315" src={ this.parseYoutube() } ></iframe>);
    } else {
      return (<h2>This is not a valid youtube video</h2>);
    }
  }

  getImage() {
    if (this.state.post.imageURL) {
      return <img src={ this.state.post.imageURL }/>;
    } else {
      return <h2 className="select-image">Select a file!</h2>;
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
    if (this.state.post.imageFile) {
      formData.append("post[media_content]", this.state.post.imageFile);
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

  preview() {
    if (this.state.post.imageUrl) {
      return <img src={ this.state.post.imageUrl } />;
    } else {
      return <div/>;
    }
  }

  TextForm() {
    return(
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
            {this.getImage()}
            <input type="file" className="image_input_field" name="file"
              encType="multipart/form-data"
              onChange={this.updateFile} />
            <textarea placeholder="or use a url"
              onChange={this.update("content")}
              rows="3"/>
          </form>
          <button className="submit_post"
                  onClick={this.handlePicSubmit}>Post</button>
          <button className="close_post_form" onClick={this.resetDisplay}>Close</button>
        </section>
      </div>
    );
  }

  AudioForm () {
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
            <textarea placeholder="audio URL"
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

  VideoForm () {
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
            { this.getVideo () }
            <textarea placeholder="youtube video URL"
              onChange={this.update("content")}
              rows="3"/>
          </form>
          <button className="submit_post"
                  onClick={this.handleVideoSubmit}>Post</button>
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
        switch (this.state.post.kind) {
          case("pic"):
            return this.ImageForm();
          case("text"):
            return this.TextForm();
          case("audio"):
            return this.AudioForm();
          case("video"):
            return this.VideoForm();
          default:
            return this.TextForm();
        }
      }
    } else {
        return <div></div>;
      }
    }
  }

export default withRouter(PostForm);
