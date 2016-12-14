import React from 'react';
import { Link, withRouter } from 'react-router';
import { allPosts } from '../../reducers/selectors';
import PostsContainer from './posts_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.renderFeedPosts = this.renderFeedPosts.bind(this);
  }

  renderFeedPosts() {
    const arr = allPosts(this.props.posts).reverse().map((post) => {
      return (
        <PostsContainer
          post={ post }
          key={ post.id }/>
      );
    });
    return arr;
  }

  componentDidMount() {
    this.props.requestPosts();
  }

  componentDidUpdate() {
    console.log("updated!");
    console.log(this.props);
  }

  anotherFunction() {
    const something = this.renderFeedPosts();
    return something;
  }
  render () {
    return (
      <ul className="feed_posts">
        { this.anotherFunction() }
      </ul>
    );
  }
}

export default Feed;