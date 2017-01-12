import React from 'react';
import { Link, withRouter } from 'react-router';
import { allPosts } from '../../reducers/selectors';
import PostsContainer from './posts_container';
// import Infinite from 'react-infinite';

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

  // handleInfiniteLoad() {
  //   if (this.props.blog) {
  //     setTimeout(() => {
  //       this.setState({
  //         page: this.state.page,
  //         isInfiniteLoading: true
  //       });
  //       this.props.getBlogPosts(this.props.id, this.state.page).then(
  //         this.setState({
  //           page: this.state.page + 1,
  //           isInfiniteLoading: false
  //         })
  //       );}, 2000
  //     );
  //   } else {
  //     setTimeout(() => {
  //       this.setState({
  //         page: this.state.page,
  //         isInfiniteLoading: true
  //       });
  //       this.props.requestPosts(this.state.page).then(
  //         this.setState({
  //           page: this.state.page + 1,
  //           isInfiniteLoading: false
  //         })
  //       );}, 2000
  //     );
  //   }
  // }

  renderFeedPosts() {
    // if (this.state.error) return <h1>Something went wrong</h1>;
    let blogBool = false;
    if (this.props.blog) blogBool = true;
    const arr = allPosts(this.props.posts).reverse().map((post) => {
      return (
        <PostsContainer
          post={ post }
          key={ post.id }
          blog={ blogBool }/>
      );
    });
    return arr;
  }

  handleInfiniteLoad() {
    if (this.props.blog) {
      setTimeout(() => {
        this.setState({
          page: this.state.page,
          isInfiniteLoading: true
        });
        this.props.getBlogPosts(this.props.id, this.state.page).then(
          this.setState({
            page: this.state.page + 1,
            isInfiniteLoading: false
          })
        );}, 1000
      );
    } else {
      setTimeout(() => {
        this.setState({
          page: this.state.page,
          isInfiniteLoading: true
        });
        this.props.requestPosts(this.state.page).then(
          this.setState({
            page: this.state.page + 1,
            isInfiniteLoading: false
          })
        );}, 1000
      );
    }
  }

  componentDidMount() {
    this.handleInfiniteLoad();
    $(window).scroll(() => {
        if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
          this.handleInfiniteLoad();
        }
    });
  }

  componentWillUnmount() {
    $(window).off('scroll');
  }

  elementInfiniteLoad() {
     return (
       <div className="infinite-list-item">
         Loading...
       </div>
     );
  }

  render() {
    let feedClass = "";
    let loader = <div/>;
    if (this.props.blog) {
      feedClass = "blog_posts";
    } else {
      feedClass = "feed_posts";
    }
    if (this.state.isInfiniteLoading) loader = this.elementInfiniteLoad();
    return (
      <div className="infinite">
        { this.renderFeedPosts() }
        { loader }
      </div>
    );
  }
}

// <Infinite elementHeight={ window.innerHeight }
//               containerHeight={ window.innerHeight }
//                infiniteLoadBeginEdgeOffset={ 50 }
//                onInfiniteLoad={ this.handleInfiniteLoad }
//                loadingSpinnerDelegate={ this.elementInfiniteLoad() }
//                isInfiniteLoading={ this.state.isInfiniteLoading }
//                className={ feedClass }
//                useWindowAsScrollContainer
//                timeScrollStateLastsForAfterUserScrolls={ 150 }
//                >
// </Infinite>
export default Feed;
