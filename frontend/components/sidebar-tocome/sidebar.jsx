import React from 'react';
import { Link, withRouter } from 'react-router';

class Suggestion extends React.Component {
  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
    this.state = props.suggestion;
  }

  handleFollow(follow, id) {
    if (follow) {
      this.props.unfollow(id).then(() => {
        this.setState({ follow: true });
      });
    } else {
      this.props.follow(id).then(() => {
        this.setState({ follow: true });
      });
    }
  }


  render() {
    const buttonDisplay = this.state.suggestion.follow ? "follow" : "unfollow";
    return (
      <li key={ind} className="follow_suggestion">
        <section className="suggestion_profile_pic">
          <img src={this.state.suggestion.profile_pic} />
        </section>
        <h3>
          {this.state.suggestion.username}
        </h3>
        <button>{buttonDisplay}</button>
      </li>
    );
  }
}

export default Suggestion;
