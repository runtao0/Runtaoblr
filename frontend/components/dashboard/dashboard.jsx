import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from '../greetings/greeting_container';
import PostFormContainer from '../post_form/post_form_container';
// import sidebarContainer from '../siderbar/sidebar_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [{
        id: 0,
        follow: false,
      }]
    };
    this.handleFollow = this.handleFollow.bind(this);

    this.renderFeedPosts = this.renderFeedPosts.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
  }

  handleFollow(follow, id, index) {
    return (e) => {
      e.preventDefault();
      if (follow) {
        const suggestions = this.state.suggestions;
        suggestions[index].follow = false;
        this.props.unfollow(id).then(() => {
          this.setState({suggestions});
        });
      } else {
        const suggestions = this.state.suggestions;
        suggestions[index].follow = true;
        this.props.follow(id).then(() => {
          this.setState({suggestions});
        });
      }
    };
  }

  renderFeedPosts() {
    // debugger
    return this.props.posts.reverse().map((post, ind) => {
      if (post.kind === "text") {
        return (
          <li key={ind} className="post_whole">
            <section className="post_profile_pic">
              <img src={post.profile_pic}/>
            </section>
            <section className="post_body">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
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
            </section>
          </li>
        );
      }
    });
  }

  renderSuggestions() {
    return (this.state.suggestions.map((suggestion, ind) => {
      const buttonDisplay = suggestion.follow ? "unfollow" : "follow";
      return (
        <li key={ind} className="follow_suggestion">
          <section className="suggestion_profile_pic">
            <img src={suggestion.profile_pic} />
          </section>
          <h3>
            {suggestion.username}
          </h3>
          <button onClick={this.handleFollow(suggestion.follow, suggestion.id, ind)}>
            {buttonDisplay}
          </button>
        </li>
      );
    })
  );
  }

  componentDidMount() {
    // load feed here!
    this.props.requestPosts();
    this.props.requestSuggestions().then(() => {
      this.setState({ suggestions: this.props.suggestions });
    });
  }

  render() {
    return(
      <div className="dashboard">
        <section className="dashboard-header group">
          <GreetingContainer/>
        </section>

        <div className="feed_and_sidebar">
          <section className="sidebar group">
            <h1>People to follow</h1>
            <ul className="suggestion_list">
              {this.renderSuggestions()}
            </ul>
          </section>

          <section className="feed">
            <PostFormContainer/>
            <ul className="feed_posts">
              {this.renderFeedPosts()}
            </ul>
          </section>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default withRouter(Dashboard);
