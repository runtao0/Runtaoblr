import React from 'react';
import { Link, withRouter } from 'react-router';
import { allSuggestions } from '../../reducers/selectors';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [{
        id: 0,
      }],
    };

    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(follow, id) {
    return (e) => {
      e.preventDefault();
      // if (follow) {
      //   const suggestions = this.state.suggestions;
      //   // suggestions[id].follow = false;
      //   this.props.unfollow(id).then(() => {
      //     this.setState({ suggestions });
      //   });
      // } else {
      //   const suggestions = this.state.suggestions;
        // suggestions[id].follow = true;
        this.props.follow(id);
      // }
    };
  }

  renderSuggestions() {
    return (allSuggestions(this.props.suggestions).map((suggestion, ind) => {
      const buttonClass = suggestion.follow ? "sidebar-unfollow" : "sidebar-follow";
      const buttonDisplay = suggestion.follow ? "-" : "+";
      return (
        <li key={ind} className="follow_suggestion group">
          <section className="suggestion_profile_pic">
            <img src={suggestion.profile_pic} />
          </section>
          <h3>
            {suggestion.username}
          </h3>
          <button onClick={this.handleFollow(suggestion.follow, suggestion.id, ind)}
            className={buttonClass}>
            {buttonDisplay}
          </button>
        </li>
      );
    })
  );
  }

  componentDidMount() {
    this.props.requestSuggestions();
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
