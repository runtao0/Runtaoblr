import React from 'react';
import { Link, withRouter } from 'react-router';
import { allPosts } from '../../reducers/selectors';
import PostsContainer from './posts_container';
import Infinite from 'react-infinite';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infinteScrollLoading: false,
    };

    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.renderFeedPosts = this.renderFeedPosts.bind(this);
  }

  handleInfiniteLoad() {
    const oldPosts = this.state.posts;
    this.setState({
      isInfiniteLoading: true
    });
    this.props.requestPosts();
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

  // render () {
  //   return (
  //     <ul className="feed_posts">
  //       { this.renderFeedPosts() }
  //     </ul>
  //   );
  // }

  elementInfiniteLoad() {
     return (
       <div className="infinite-list-item">
         Loading...
       </div>
     );
  }

  render() {
    return (
      <Infinite elementHeight={200}
                     containerHeight={900}
                     infiniteLoadBeginEdgeOffset={1}
                     onInfiniteLoad={this.handleInfiniteLoad}
                     loadingSpinnerDelegate={this.elementInfiniteLoad()}
                     isInfiniteLoading={this.state.isInfiniteLoading}
                     className="feed_posts"
                     >
                     <ul>
        { this.renderFeedPosts() }
      </ul>
      </Infinite>
    );
  }
}

export default Feed;
