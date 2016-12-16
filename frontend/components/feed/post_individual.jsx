import React from 'react';

class PostIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.post,
      edit: false,
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.renderTextPost = this.renderTextPost.bind(this);
    this.renderPicPost = this.renderPicPost.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.update = this.update.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleVideoEdit = this.handleVideoEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderAudioPost = this.renderAudioPost.bind(this);
    this.getVideo = this.getVideo.bind(this);
    this.parseYoutube = this.parseYoutube.bind(this);
    this.editVideo = this.editVideo.bind(this);
    this.editPic = this.editPic.bind(this);
    this.handlePicSubmit = this.handlePicSubmit.bind(this);
    this.getImage = this.getImage.bind(this);
    this.editText = this.editText.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    // const title = this.state.post.title;
    // const id = this.state.post.id;
    // const content = this.state.post.content;
    const file = e.currentTarget.files[0];
    const post = this.state.post;
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }
    post.media = file;
    fileReader.onloadend = function () {
      this.setState({
        post,
        //   media: file,
        //   title,
        //   id,
        //
        //   content,
        // },
        imageURL: fileReader.result,
        buttons: false,
      });
    }.bind(this);
  }

  handlePicSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.post.title);
    formData.append("id", this.state.post.id);
    if (this.state.imageURL) {
      formData.append("post[media_content]", this.state.post.media);
    }
    formData.append("post[kind]", this.state.post.kind);
    formData.append("post[content]", this.state.post.content);
    const post = this.state.post;
    // post request, then reset to buttons
    this.props.editPicPost(formData).then(() =>{
      this.setState({
        post: this.props.post,
        edit: false,
      });
    });
  }

  getImage() {
    if (this.state.imageURL) {
      return <img src={this.state.imageURL}/>;
    } else {
      if (this.state.post.media !== "/media_contents/original/missing.png") {
        return <img src={this.state.post.media}/>;
      } else {
        return <img src={this.state.post.content}/>;
      }
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

  update(field) {
    return e => {
      const post = Object.assign({}, this.state.post);
      post[field] = e.currentTarget.value;
      this.setState({
        post,
        edit: true,
      });
    };
  }

  toggleEdit () {
    const post = this.state.post;
    this.setState({
      post,
      edit: true,
    });
  }

  resetDisplay() {
    const confirmDeletDraft = confirm("Are you sure you want to throw away your edits?");
    if (confirmDeletDraft === true) {
      this.setState({
        post: this.props.post,
        edit: false,
      });
    }
  }

  handleEdit(e) {
    e.preventDefault();
    const post = this.state.post;
    if (!post.title || !post.content){
      alert("Your edit cannot be blank");
    } else {
      this.props.editPost(post).then(() =>{
        this.setState({
          post,
          edit: false,
        });
      });
    }
  }

  handleVideoEdit(e) {
    e.preventDefault();
    const post = this.state.post;
    if (!post.title || !post.content){
      alert("Your edit cannot be blank");
    } else {
      if (this.parseYoutube()) {
        post.content = this.parseYoutube();
      }
      this.props.editPost(post).then(() =>{
        this.setState({
          post,
          edit: false,
        });
      });
    }
  }

  handleDelete() {
    const confirmDelete = confirm("Are you sure you want to delete this post, FOREVER?");
    if (confirmDelete) {
      const post = this.state.post;
      this.props.destroyPost(post);
    }
  }

  handleLike(post) {
    return (e) => {
      e.preventDefault();
      if (post.liked) {
        const newPost = this.state.post;
        newPost.liked = false;
        newPost.notes -= 1;
        this.props.unlikePost(post).then(() => {
          this.setState({
            post: newPost,
            edit: false,
          });
        });
      } else {
        const newPost = this.state.post;
        newPost.liked = true;
        newPost.notes += 1;
        this.props.likePost(post).then(() => {
          this.setState({
            post: newPost,
            edit: false,
          });
        });
      }
    };
  }

  handleFollow(post) {
    return (e) => {
      e.preventDefault();
      if (post.follow) {
        const newPost = this.state;
        newPost.follow = false;
        this.props.unfollow(post).then(() => {
          this.setState({
            post: newPost,
            edit: false,
          });
        });
      } else {
        const newPost = this.state;
        newPost.follow = true;
        this.props.follow(post).then(() => {
          this.setState({
            post: newPost,
            edit: false,
          });
        });
      }
    };
  }

  renderTextPost(post) {
    return(
      <div>
        <h2>{ post.title }</h2>
        <p>{ post.content }</p>
        <h3>{ post.notes } notes</h3>
      </div>
    );
  }

  renderAudioPost(post) {
    return(
      <div>
        <h2>{ post.title }</h2>
        <audio src={ post.content } controls/>
        <h3>{ post.notes } notes</h3>
      </div>
    );
  }

  renderVideoPost(post) {
    return(
      <div>
        <h2>{ post.title }</h2>
          <iframe width="560" height="315" src={ post.content } ></iframe>
        <h3>{ post.notes } notes</h3>
      </div>
    );
  }

  renderPicPost(post) {
    let imageURL;
    if (post.media === "/media_contents/original/missing.png") {
      imageURL = post.content;
    } else {
      imageURL = post.media;
    }
    return(
      <div>
        <h2>{ post.title }</h2>
        <img src={ imageURL } />
        <h3>{ post.notes } notes</h3>
      </div>
    );
  }

  renderFollowButton(post) {
    const followButtonDisplay = post.follow ? "unfollow" : "follow";
    if (post.own) {
      return (<div/>);
    } else {
      return (
        <button className={ followButtonDisplay }
          onClick={ this.handleFollow(post) }>
          { followButtonDisplay }
        </button>
      );
    }
  }

  editText() {
    return (
      <div className="post_form_container edit group">
        <div className="profile_pic">
          <img src={ this.state.post.profile_pic }></img>
        </div>
        <section className="post_form">
          <form className="form_content">
            <h1>{this.props.currentUser.username} ♥ </h1>
            <input type="text"
              value={this.state.post.title}
              onChange={this.update("title")}
              className="post_title-input"/>
            <textarea value={this.state.post.content}
              onChange={this.update("content")}
              rows="3"/>
          </form>
          <button className="submit_post"
                  onClick={this.handleEdit}>Edit</button>
          <button className="delete_post"
            onClick={this.handleDelete}>Delete</button>
          <button className="close_post_form" onClick={this.resetDisplay}>Close</button>
        </section>
      </div>
    );
  }

  editVideo() {
    return (
      <div className="post_form_container edit group">
        <div className="profile_pic">
          <img src={ this.state.post.profile_pic }></img>
        </div>
        <section className="post_form">
          <form className="form_content">
            <h1>{this.props.currentUser.username} ♥ </h1>
            <input type="text"
              value={this.state.post.title}
              onChange={this.update("title")}
              className="post_title-input"/>
            { this.getVideo () }
            <textarea value={this.state.post.content}
              onChange={this.update("content")}
              rows="3"/>
          </form>
          <button className="submit_post"
                  onClick={this.handleVideoEdit}>Edit</button>
          <button className="delete_post"
            onClick={this.handleDelete}>Delete</button>
          <button className="close_post_form" onClick={this.resetDisplay}>Close</button>
        </section>
      </div>
    );
  }

  editPic() {
    let picContent;
    let submit_button;
    if (this.state.post.media === "/media_contents/original/missing.png") {
      picContent = (<textarea placeholder={this.state.post.content}
      onChange={this.update("content")}
      rows="3"/>);
      submit_button = (<button className="submit_post"
              onClick={this.handleEdit}>Edit</button>);
    } else {
      picContent = (<input type="file" className="image_input_field" name="file"
      encType="multipart/form-data"
      onChange={this.updateFile} />);
      submit_button = (<button className="submit_post"
              onClick={this.handlePicSubmit}>Edit</button>);
    }
    return (
      <div className="post_form_container edit group">
        <div className="profile_pic">
          <img src={ this.state.post.profile_pic }></img>
        </div>
        <section className="post_form">
          <form className="form_content">
            <h1>{this.props.currentUser.username} ♥ </h1>
            <input type="text"
              placeholder="Title"
              value={ this.state.post.title }
              onChange={this.update("title")}
              className="post_title-input"/>
            { this.getImage() }
            { picContent }
          </form>
          { submit_button }
          <button className="delete_post"
            onClick={this.handleDelete}>Delete</button>
          <button className="close_post_form" onClick={this.resetDisplay}>Close</button>
        </section>
      </div>
    );
  }

  render(post = this.state.post) {
      if (this.state.edit) {
          switch(post.kind){
            case("text"):
              return this.editText();
            case("pic"):
              return this.editPic();
            case("video"):
              return this.editVideo();
            default:
              return this.editText();
          }
      } else {
      const likeButtonDisplay = post.liked ? "unlike" : "like";
      let post_body;
      let edit_button;
      switch (post.kind) {
        case "text":
          post_body = this.renderTextPost(post);
          break;
        case "pic":
          post_body = this.renderPicPost(post);
          break;
        case "audio":
          post_body = this.renderAudioPost(post);
          break;
        case "video":
          post_body = this.renderVideoPost(post);
          break;
        default:
          post_body = this.renderTextPost(post);
      }
      if (post.own) {
        edit_button = <button
          onClick={ this.toggleEdit }
          className="post_edit"></button>;
      } else {
        edit_button = <div></div>;
      }
        return (
          <li className="post_whole">
            <section className="post_profile_pic">
              <img src={ post.profile_pic }/>
              { this.renderFollowButton(post) }
            </section>
            <section className="post_body group">
              { post_body }
              <section className="edit_post_buttons group">
                { edit_button }
                <button onClick={ this.handleLike(post) }
                  className={ likeButtonDisplay }>♥</button>
              </section>
            </section>
          </li>
        );
    }
  }
}

export default PostIndividual;
