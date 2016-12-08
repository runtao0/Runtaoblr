import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from '../greetings/greeting_container';
import PostFormContainer from '../post_form/post_form_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // this.renderFeedPosts = this.renderFeedPosts.bind(this);
    console.log(props);
  }

  // renderFeedPosts(props.posts) {
  //   return (posts.map((post) => {
  //     return post.id;
  //   }));
  // }

  componentDidMount() {
    // load feed here!
  }

  render() {
    return(
      <div className="dashboard_main">
        <section className="header group">
          <GreetingContainer/>
        </section>

        <section className="sidebar group">
          <h1>Filler until tomorrow</h1>
        </section>

        <PostFormContainer/>
        <section className="feed">
          <ul className="feed_posts">
          </ul>
        </section>
      </div>
    );
  }
}
// <li>{this.renderFeedPosts()}</li>

export default withRouter(Dashboard);

// return(
//   <div className="dashboard">
//     <header>
//       <section className="action_buttons">
//         <GreetingContainer/>
//       </section>
//     </header>
//     { this.props.children }
//   </div>
// );
