import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class PostIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.post,
      edit: false,
    };

    this.handleFileSubmit = this.handleFileSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.getMedia = this.getMedia.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  // component elements

  getMedia() {
    switch (this.state.post.kind) {
      case "pic":
        if (this.state.post.file) {
          if ( this.state.path ) {
            return <img src={ this.state.path } />;
          } else {
            return <img src={ this.state.post.file } />;
          }
        } else {
          return <img src={ this.state.post.content }/>;
        }
      case "video":
        return <video controls src={ this.state.post.file } />;
      case "audio":
        return <audio controls src={ this.state.post.file } />;
    }
  }

  notes() {
    return <h3>{ this.state.post.notes } notes</h3>;
  }

  renderFollowButton(post) {
    const followButtonDisplay = post.follow ? "unfollow" : "follow";
    if (post.own) {
      return (<div/>);
    } else {
      return (
        <button className={ followButtonDisplay }
          onClick={ this.handleFollow() }>
          { followButtonDisplay }
        </button>
      );
    }
  }

  title() {
    if (this.state.post.kind === "quote") {
      return <h2>--{ this.state.post.title }</h2>;
    } else {
      return <h2>{ this.state.post.title }</h2>;
    }
  }

  titleInput() {
    return <input type="text"
      placeholder="Title"
      value={ this.state.post.title }
      onChange={this.update("title")}
      className="post_title-input"/>;
  }

  contentTextInput() {
    return <textarea value={this.state.post.content}
      onChange={this.update("content")}
      rows="3"/>;
  }

  contentFileInput() {
    return <input type="file" className="file_input_field" name="file"
      encType="multipart/form-data"
      onChange={ this.updateFile } />;
  }

  addProfPic() {
    const linkToUserBlog = `/${this.state.post.username}`;
    if (this.props.blog) {
      return <div/>;
    } else {
      return (
        <Link to={linkToUserBlog}>
        <div className="post_profile_pic">
          <img src={ this.state.post.profile_pic }></img>
          { this.renderFollowButton(this.state.post) }
        </div>
        </Link>
      );
    }
  }

  submitFileButton() {
    return <button className="submit_post"
            onClick={this.handleFileSubmit}>Edit</button>;
  }

  submitTextButton() {
    return <button className="submit_post"
            onClick={this.handleEdit}>Edit</button>;
  }

  deleteButton() {
    return <button className="delete_post"
      onClick={this.handleDelete}>Delete</button>;
  }

  closeButton() {
    return <button className="close_post_form" onClick={this.toggleEdit}>Close</button>;
  }

  editButton() {
    if ( this.state.post.own ) {
      return <a onClick={ this.toggleEdit }
        className="post_edit">
        <i className="fa fa-cog" aria-hidden="true"></i>
      </a>;
    } else {
      return <div></div>;
    }
  }

  likeButton() {
    const likeButtonDisplay = this.state.post.liked ? "unlike" : "like";
    return <button onClick={ this.handleLike() }
      className={ likeButtonDisplay }>♥</button>;
  }

  post(post = this.state.post) {
    let tag = <p>{ post.content }</p>;
    switch (post.kind) {
      case "audio":
        tag = <audio controls src={ post.file } />;
        break;
      case "video":
        tag = <video controls src={ post.file } />;
        break;
      case "pic":
        if (post.file === "/media_contents/original/missing.png") {
          tag = <img src={ post.content } />;
        } else {
          tag = <img src={ post.file } />;
        }
        break;
    }
    if (post.kind === "quote") {
      return(
        <div>
          { tag }
          { this.title() }
          { this.notes() }
        </div>
      );
    }
    return(
      <div>
        { this.title() }
        { tag }
        { this.notes() }
      </div>
    );
  }

  edit() {
    switch(this.state.post.kind){
      case "text":
        return (
          <section className="post_form">
            <form className="form_content">
              { this.titleInput() }
              { this.contentTextInput() }
            </form>
            { this.submitTextButton() }
            { this.deleteButton() }
            { this.closeButton() }
          </section>
        );
      case "quote":
        return (
          <section className="post_form">
            <form className="form_content">
              { this.contentTextInput() }
              { this.titleInput() }
            </form>
            { this.submitTextButton() }
            { this.deleteButton() }
            { this.closeButton() }
          </section>
        );
      default:
        return (
          <section className="post_form">
            <form className="form_content">
              { this.titleInput() }
              { this.getMedia() }
              { this.contentFileInput() }
            </form>
            { this.submitFileButton() }
            { this.deleteButton() }
            { this.closeButton() }
          </section>
        );
    }
  }

  // update inputs

  toggleEdit () {
    if (!this.state.edit) {
      const post = this.props.post;
      this.setState({
        post,
        edit: true,
      });
    } else {
      const confirmDeletDraft = confirm("Are you sure you want to throw away your edits?");
      if (confirmDeletDraft === true) {
        this.setState({
          post: this.props.post,
          edit: false,
        });
      }
    }
  }

  updateFile(e) {
    const post = merge({}, this.state.post) ;
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }
    post.newFile = file;
    fileReader.onloadend = function () {
      this.setState({
        post,
        path: fileReader.result,
        edit: true,
      });
    }.bind(this);
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

  handleEdit(e) {
    e.preventDefault();
    const post = this.state.post;
    if (!post.title || !post.content){
      alert("Your edit cannot be blank");
    } else {
      this.props.editPost({ post }).then(() =>{
        this.setState({
          post,
          edit: false,
        });
      });
    }
  }

  // handle events

    // submits

  handleFileSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.post.title);
    formData.append("id", this.state.post.id);
    if (this.state.post.newFile) {
      switch(this.state.post.kind) {
        case "pic":
          formData.append("post[image]", this.state.post.newFile);
          break;
        case "video":
          formData.append("post[video]", this.state.post.newFile);
          break;
        case "audio":
          formData.append("post[audio]", this.state.post.newFile);
          break;
        default:
          break;
      }
    }
    formData.append("post[kind]", this.state.post.kind);
    formData.append("post[content]", "");
    const post = this.state.post;
    this.props.editFilePost(formData).then(() =>{
      this.setState({
        post: this.props.post,
        edit: false,
      });
    });
  }

  handleDelete() {
    const confirmDelete = confirm("Are you sure you want to delete this post, FOREVER?");
    if (confirmDelete) {
      const post = this.state.post;
      this.props.destroyPost(post);
    }
  }

  handleLike(post = this.state.post) {
    return (e) => {
      e.preventDefault();
      if (post.liked) {
        const newPost = post;
        newPost.liked = false;
        newPost.notes -= 1;
        this.props.unlikePost(post).then(() => {
          this.setState({
            post: newPost,
            edit: false,
          });
        });
      } else {
        const newPost = post;
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

    // Follows

  handleFollow(post = this.state.post) {
    return (e) => {
      e.preventDefault();
      if (post.follow) {
        const newPost = this.state;
        newPost.follow = false;
        this.props.unfollow(post);
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

  render(post = this.state.post) {
    if (this.state.edit) {
      return (
        <div className="post_form_container edit group">
          { this.addProfPic() }
          { this.edit() }
        </div>
      );
    } else {
      return (
        <div className="post_whole">
          { this.addProfPic() }
          <section className="post_body group">
            { this.post() }
            <section className="edit_post_buttons group">
              { this.editButton() }
              { this.likeButton() }
            </section>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(PostIndividual);
