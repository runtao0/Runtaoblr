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
    return allPosts(this.props.posts).reverse().map((post, ind) => {
      return (
        <PostsContainer
          post={ post }
          key={ ind }/>
      );
    });
  }

  componentDidMount() {
    this.props.requestPosts();
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
