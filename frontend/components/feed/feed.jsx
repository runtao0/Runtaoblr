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

    this.renderFeedPosts = this.renderFeedPosts.bind(this);
    this.handleLike = this.handleLike.bind(this);
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

  renderFeedPosts() {
    return allPosts(this.state.posts).reverse().map((post, ind) => {
      const buttonDisplay = post.liked ? "unlike" : "like";
      if (post.kind === "text") {
        return (
          <li key={ind} className="post_whole">
            <section className="post_profile_pic">
              <img src={post.profile_pic}/>
            </section>
            <section className="post_body">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <h3>Notes: {post.notes}</h3>
              <button onClick={this.handleLike(post.liked, post.id)}>{buttonDisplay}</button>
            </section>
          </li>
        );
      } else if (post.kind === "pic") {
        return (
          <li key={ind} className="post_whole">
            <section className="post_profile_pic">
              <img src={post.profile_pic} />
            </section>
            <section className="post_body">
              <h2>{post.title}</h2>
              <img src={post.content} />
              <h3>Notes: {post.notes}</h3>
              <button onClick={this.handleLike(post.liked, post.id)}>{buttonDisplay}</button>
            </section>
          </li>
        );
      }
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
        {this.renderFeedPosts()}
      </ul>
    );
  }
}

export default Feed;
