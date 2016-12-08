import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {kind: "", title: "", content: "" },
      buttons: true
    };
    this.changeDisplay = this.changeDisplay.bind(this);
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
        <div className="post_form">
          <img src={this.props.currentUser.info.profile_pic}></img>
          <section className="post_buttons">
            <ul>
              <li className="post_button"><button onClick={this.changeDisplay("text")}>Text</button></li>
              <li className="post_button"><button onClick={this.changeDisplay("pic")}>Photo</button></li>
              <li className="post_button"><button onClick={this.changeDisplay("quote")}>Quote</button></li>
              <li className="post_button"><button onClick={this.changeDisplay("audio")}>Audio</button></li>
              <li className="post_button"><button onClick={this.changeDisplay("video")}>Video</button></li>
            </ul>
          </section>
        </div>
      );
    } else {
      return (
        <div className="post_form">
          <img src={this.props.currentUser.info.profile_pic}></img>
          <section className="post_form">
            <h1>{this.props.currentUser.username} ♥ </h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.update("title")}
                className="post_title-input"/>
              <textarea placeholder="Content"
                onChange={this.update("content")}/>
              <input type="submit" value="Post"/>
            </form>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(PostForm);
