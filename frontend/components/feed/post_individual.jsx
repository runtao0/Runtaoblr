import React from 'react';

class PostIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;

    this.handleLike = this.handleLike.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.renderTextPost = this.renderTextPost.bind(this);
    this.renderPicPost = this.renderPicPost.bind(this);
  }

  handleLike(post) {
    return (e) => {
      e.preventDefault();
      if (post.liked) {
        const newPost = this.state;
        newPost.liked = false;
        newPost.notes -= 1;
        this.props.unlikePost(post).then(() => {
          this.setState({ post: newPost });
        });
      } else {
        const newPost = this.state;
        newPost.liked = true;
        newPost.notes += 1;
        this.props.likePost(post).then(() => {
          this.setState({ post: newPost });
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
          this.setState({ post: newPost });
        });
      } else {
        const newPost = this.state;
        newPost.follow = true;
        this.props.follow(post).then(() => {
          this.setState({ post: newPost });
        });
      }
    };
  }

  renderTextPost(post, buttonDisplay) {
    return(
      <section className="post_body group">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <h3>{post.notes} notes</h3>
        <button onClick={this.handleLike(post)}
          className={buttonDisplay}>♥</button>
      </section>
    );
  }

  renderPicPost(post, buttonDisplay) {
    return(
      <section className="post_body group">
        <h2>{post.title}</h2>
        <img src={post.content} />
        <h3>{post.notes} notes</h3>
        <button onClick={this.handleLike(post)}
          className={buttonDisplay}>♥</button>
      </section>
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

  render(post = this.state) {
    const likeButtonDisplay = post.liked ? "unlike" : "like";
    let post_body;
    switch (post.kind) {
      case "text":
        post_body = this.renderTextPost(post, likeButtonDisplay);
        break;
      case "pic":
        post_body = this.renderPicPost(post, likeButtonDisplay);
        break;
      default:
        post_body = this.renderTextPost(post, likeButtonDisplay);
    }
      return (
        <li className="post_whole">
          <section className="post_profile_pic">
            <img src={ post.profile_pic }/>
            { this.renderFollowButton(post) }
          </section>
          { post_body }
        </li>
      );
  }
}

export default PostIndividual;
