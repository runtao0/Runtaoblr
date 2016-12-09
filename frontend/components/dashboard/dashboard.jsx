import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from '../greetings/greeting_container';
import PostFormContainer from '../post_form/post_form_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.renderFeedPosts = this.renderFeedPosts.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
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
    return this.props.suggestions.map((suggestion, ind) => {
      return (
        <li key={ind} className="follow_suggestion">
          <section className="suggestion_profile_pic">
            <img src={suggestion.profile_pic} />
          </section>
          <h3>
            {suggestion.username}
          </h3>
        </li>
      );
    });
  }

  componentDidMount() {
    // load feed here!
    this.props.requestPosts();
    this.props.requestSuggestions();
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
