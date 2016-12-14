import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from '../greetings/greeting_container';
import PostFormContainer from '../post_form/post_form_container';
import SidebarContainer from '../sidebar/sidebar_container';
import FeedContainer from '../feed/feed_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="dashboard">
        <section className="dashboard-header group">
          <GreetingContainer/>
        </section>

        <div className="feed_and_sidebar">
          <SidebarContainer/>

          <section className="feed">
            <PostFormContainer/>
            <FeedContainer />
          </section>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default withRouter(Dashboard);
