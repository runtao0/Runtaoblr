import React from 'react';
import { Link, withRouter } from 'react-router';
import { allPosts } from '../../reducers/selectors';
import PostsContainer from './posts_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isInfiniteLoading: false,
    };
  }

  componentDidMount() {
    this.handleInfiniteLoad();
    $(window).scroll(() => {
        if ($(document).height() - $(window).height() == $(window).scrollTop()) {
          this.handleInfiniteLoad();
        }
    });
  }

  componentWillUnmount() {
    $(window).off('scroll');
  }

  renderFeedPosts() {
    let blogBool = false;
    if (this.props.blog) blogBool = true;
    const postsAsComponents = allPosts(this.props.posts).reverse().map((post) => {
      return (
        <PostsContainer
          post={ post }
          key={ post.id }
          blog={ blogBool }/>
      );
    });
    return postsAsComponents;
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

  infiniteElementClass(){
    let infiniteClass = "infinite-list-item";
    if (!this.state.isInfiniteLoading) infiniteClass = infiniteClass + " no-show";
    return infiniteClass;
  }

  render() {
    return (
      <div className="infinite">
        { this.renderFeedPosts() }
        <div className={ this.infiniteElementClass() }>
          Loading...
        </div>
      </div>
    );
  }
}

export default Feed;
