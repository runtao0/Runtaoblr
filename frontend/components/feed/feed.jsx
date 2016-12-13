import React from 'react';
import { Link, withRouter } from 'react-router';
import { allPosts } from '../../reducers/selectors';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [{
        id: 0,
        like: false,
      }]
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.renderFeedPosts = this.renderFeedPosts.bind(this);
    this.renderTextPost = this.renderTextPost.bind(this);
    this.renderPicPost = this.renderPicPost.bind(this);
  }

  handleLike(liked, id) {
    return (e) => {
      e.preventDefault();
      if (liked) {
        const posts = this.state.posts;
        posts[id].liked = false;
        posts[id].notes -= 1;
        this.props.unlike(id).then(() => {
          this.setState({ posts });
        });
      } else {
        const posts = this.state.posts;
        posts[id].liked = true;
        posts[id].notes += 1;
        this.props.like(id).then(() => {
          this.setState({ posts });
        });
      }
    };
  }

  handleFollow(follow, author_id, post_id) {
    return (e) => {
      e.preventDefault();
      if (follow) {
        const posts = this.state.posts;
        posts[post_id].follow = false;
        this.props.unfollow(author_id).then(() => {
          this.setState({ posts });
        });
      } else {
        const posts = this.state.posts;
        posts[post_id].follow = true;
        this.props.follow(author_id).then(() => {
          this.setState({ posts });
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
        <button onClick={this.handleLike(post.liked, post.id)}
          className={buttonDisplay}>♥</button>
      </section>
    );
  }

  renderPicPost(post, buttonDisplay) {
    return(
      <section className="post_body">
        <h2>{post.title}</h2>
        <img src={post.content} />
        <h3>{post.notes} notes</h3>
        <button onClick={this.handleLike(post.liked, post.id)}
          className={buttonDisplay}>♥</button>
      </section>
    );
  }

  renderFollowButton(post) {
    const followButtonDisplay = post.follow ? "unfollow" : "follow";
    const followContent = post.follow ? "-" : "+";
    if (post.author_id === window.currentUser.id) {
      return (<div/>);
    } else {
      return (
        <button className={ followButtonDisplay }
          onClick={ this.handleFollow(post.follow, post.author_id, post.id) }>
          { followContent }
        </button>
      );
    }
  }

  renderFeedPosts() {
    return allPosts(this.state.posts).reverse().map((post, ind) => {
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
          <li key={ ind } className="post_whole">
            <section className="post_profile_pic">
              <img src={ post.profile_pic }/>
              { this.renderFollowButton(post) }
            </section>
            { post_body }
          </li>
        );
    });
  }

  componentDidMount() {
    // load feed here!
    this.props.requestPosts().then(() => {
      this.setState({ posts: this.props.posts });
    });
  }

  render () {
    return (
      <ul className="feed_posts">
        { this.renderFeedPosts() }
      </ul>
    );
  }
}

export default Feed;
