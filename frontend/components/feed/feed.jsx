import React from 'react';
import { Link, withRouter } from 'react-router';
import { allPosts } from '../../reducers/selectors';
import PostsContainer from './posts_container';
import Infinite from 'react-infinite';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isInfiniteLoading: false,
    };

    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.renderFeedPosts = this.renderFeedPosts.bind(this);
  }

  handleInfiniteLoad() {
    const nextPage = this.state.page + 1;
    const newPosts = this.state.posts;
    this.setState({
      page: nextPage,
      isInfiniteLoading: true
    });
    setTimeout(() => {
      this.props.requestPosts(this.state.page).then(
        this.setState({
          page: nextPage,
          // posts: newPosts.concat(allPosts(this.props.posts).reverse()),
          isInfiniteLoading: false
        })
      );
    }, 2500);
    // debugger
  }

  renderFeedPosts() {
    const arr = allPosts(this.props.posts).reverse().map((post) => {
    // const arr = this.state.posts.reverse().map((post) => {
      return (
        <PostsContainer
          post={ post }
          key={ post.id }/>
      );
    });
    console.log(arr);
    return arr;
  }
  //
  // componentDidMount() {
    // debugger
    // this.props.requestPosts();
  // }

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
                    containerHeight={600}
                     infiniteLoadBeginEdgeOffset={10}
                     onInfiniteLoad={this.handleInfiniteLoad}
                     loadingSpinnerDelegate={this.elementInfiniteLoad()}
                     isInfiniteLoading={this.state.isInfiniteLoading}
                     className="feed_posts"
                     useWindowAsScrollContainer
                     >

          { this.renderFeedPosts() }

      </Infinite>
    );
  }
}

export default Feed;
