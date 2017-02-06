import React from 'react';
import { Link, withRouter } from 'react-router';
import { allPosts } from '../../reducers/selectors';
import PostsContainer from '../feed/posts_container';
import FeedContainer from '../feed/feed_container';


class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.getBlogUser(this.props.params.username);
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 200) {
        $('#return-top').fadeIn(200);
      } else {
        $('#return-top').fadeOut(200);
      }
    });
    $('#return-top').click(function() {
      $('body,html').animate({
          scrollTop : 0
        }, 500);
    });
  }

  componentWillUnmount() {
    $(window).off('scroll');
    $('#return-top').off('click');
  }

  blogProfilePic() {
    return (
      <div className="profile_container">
        <img className="blog_profile_pic" src={this.props.blogUser.profile_image}/>
      </div>
    );
  }

  blogCoverPic() {
    return (
      { "backgroundImage": `url(${this.props.blogUser.cover_pic})` }
    );
  }

  blogDescription() {
    return (
      <h2>{this.props.blogUser.description}</h2>
    );
  }

  elementInfiniteLoad() {
     return (
       <div className="infinite-list-item">
         Loading...
       </div>
     );
  }

  renderFollow() {
    let text = "";
    if (this.props.blogUser.follow) {
      text = "unfollow";
    } else {
      text = "follow";
    }
    if (this.props.currentUser.id !== this.props.blogUser.id) {
      return (
        <li>
          <button onClick={this.handleFollow} className="toggle_buttons">{text}</button>
        </li>
      );
    }
    return <div></div>;
  }

  handleFollow() {
    if (this.props.blogUser.follow) {
      this.props.unfollow(this.props.blogUser.id).then(this.props.getBlogUser(this.props.blogUser.username));
    } else {
      this.props.follow(this.props.blogUser.id).then(this.props.getBlogUser(this.props.blogUser.username));
    }
  }



  render() {
    if (Object.keys(this.props.blogUser).length > 0) {
      return (
        <div className="blog_cover_pic" style={ this.blogCoverPic() }>
          <ul className="button_list group">
            <li>
              <button title="dashboard" className="toggle_buttons"><Link to="/dashboard"><i className="fa fa-tachometer" aria-hidden="true"></i></Link></button>
            </li>
            {this.renderFollow()}
          </ul>
          <div className="blog_container">
            { this.blogProfilePic() }
            <a id="return-top"><i className="icon-chevron-up"></i></a>
              <section className="blog">

                <h1>Welcome to {this.props.blogUser.username}'s blog </h1>
                { this.blogDescription() }
                <FeedContainer blog={true} id={ this.props.blogUser.id }/>
              </section>
          </div>
        </div>
      );
    } else {
      return this.elementInfiniteLoad();
    }
  }
}

export default withRouter(Blog);
