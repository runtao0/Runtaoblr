import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {kind: "", title: "", content: "" },
      buttons: true
    };
    this.profile_pic = this.props.currentUser.profile_pic;
    this.changeDisplay = this.changeDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeDisplay(atype) {
    // neato!
    return () => {
      this.setState({
        post: { kind: atype },
        buttons: false
      });
    };
  }

  resetDisplay() {
    this.setState({
      post: {kind: "", title: "", content: "" },
      buttons: true
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state.post;
    this.props.createPost({ post }).then(() =>{
      this.setState({
        post: {kind: "", title: "", content: "" },
        buttons: true
      });
    });
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

  render() {
    if (this.state.buttons) {
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
      return (
        <div className="post_form_container">
          <div className="profile_pic">
            <img src={this.profile_pic}></img>
          </div>
          <section className="post_form">
            <h1>{this.props.currentUser.username} ♥ </h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.update("title")}
                className="post_title-input"/>
              <textarea placeholder="Your content here"
                onChange={this.update("content")}/>
              <br/>
              <input type="submit" value="Post"/>
            </form>
            <button className="close_post_form" onClick={this.resetDisplay}>Close</button>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(PostForm);
