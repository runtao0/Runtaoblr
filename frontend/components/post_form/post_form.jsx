import React from 'react';
import { withRouter } from 'react-router';
import { post_style } from './post_form_style';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ImageForm = this.ImageForm.bind(this);
  }

  changeDisplay(atype) {
    // neato!
    return () => {
      this.setState({
        post: { kind: atype, title: "", content: " " },
        buttons: false
      });
    };
  }

  resetDisplay() {
    const confirmDeletDraft = confirm("Are you sure you want to throw away your post?");
    if (confirmDeletDraft === true) {
      this.setState({
        post: {kind: "", title: "", content: " " },
        buttons: true
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state.post;
    if (!post.title || !post.content){
      alert("Your post cannot be blank");
    } else {
      this.props.createPost({ post }).then(() =>{
        this.setState({
          post: {kind: "", title: "", content: " " },
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

  ImageForm () {
    return (
      <div className="post_form_container group">
        <div className="profile_pic">
          <img src={this.profile_pic}></img>
        </div>
        <section className="post_form">
          <form className="form_content" onSubmit={this.handleSubmit}>
            <h1>{this.props.currentUser.username} ♥ </h1>
            <input type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update("title")}
              className="post_title-input"/>
            <input type="file" id="image_input_field" name="file"
              onChange={this.update("media_content")}/>
          </form>
          <button className="submit_post"
                  onClick={this.handleSubmit}>Post</button>
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
                <form className="form_content" onSubmit={this.handleSubmit}>
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
                        onClick={this.handleSubmit}>Post</button>
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
