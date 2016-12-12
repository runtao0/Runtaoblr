import React from 'react';
import { Link, withRouter } from 'react-router';
import { allSuggestions } from '../../reducers/selectors';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [{
        id: 0,
        follow: false,
      }],
    };

    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(follow, id) {
    return (e) => {
      e.preventDefault();
      if (follow) {
        const suggestions = this.state.suggestions;
        suggestions[id].follow = false;
        this.props.unfollow(id).then(() => {
          this.setState({ suggestions });
        });
      } else {
        const suggestions = this.state.suggestions;
        suggestions[id].follow = true;
        this.props.follow(id).then(() => {
          this.setState({ suggestions });
        });
      }
    };
  }

  renderSuggestions() {
    return (allSuggestions(this.state.suggestions).map((suggestion, ind) => {
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
    this.props.requestSuggestions().then(() => {
      this.setState({ suggestions: this.props.suggestions });
    });
  }

  render() {
    return (
      <section className="sidebar group">
        <h1>People to follow</h1>
        <ul className="suggestion_list">
          {this.renderSuggestions()}
        </ul>
      </section>
    );
  }
}

export default Sidebar;
