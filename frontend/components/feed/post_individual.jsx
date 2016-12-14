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
    this.handleDelete = this.handleDelete.bind(this);
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

  renderPicPost(post) {
    return(
      <div>
        <h2>{ post.title }</h2>
        <img src={ post.content } />
        <h3>{ post.notes } notes</h3>
      </div>
    );
  }

  renderFollowButton(post) {
    const followButtonDisplay = post.follow ? "unfollow" : "follow";
    const followContent = post.follow ? "-" : "+";
    if (post.own) {
      return (<div/>);
    } else {
      return (
        <button className={ followButtonDisplay }
          onClick={ this.handleFollow(post) }>
          { followContent }
        </button>
      );
    }
  }

  render(post = this.state.post) {
      if (this.state.edit) {
        return (
          <div className="post_form_container edit group">
            <div className="profile_pic">
              <img src={ post.profile_pic }></img>
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
