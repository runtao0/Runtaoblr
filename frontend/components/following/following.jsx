import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from '../greetings/greeting_container';
import SidebarContainer from '../sidebar/sidebar_container';

class Following extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFollowings();
  }

  render() {
    return (
      <div className="following">
        <section className="dashboard-header group">
          <GreetingContainer/>
        </section>

        <div className="feed_and_sidebar">
          <SidebarContainer/>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default Following;
