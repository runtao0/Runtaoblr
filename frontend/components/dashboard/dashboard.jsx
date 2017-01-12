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
  //
  componentDidMount() {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
  }

  componentWillUnmount() {
    $(window).off('scroll');
    $('#return-to-top').off('click');
  }

  render() {
    return(
      <div className="dashboard">
        <section className="dashboard-header group">
          <GreetingContainer/>
        </section>

        <a id="return-to-top"><i className="icon-chevron-up"></i></a>
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
