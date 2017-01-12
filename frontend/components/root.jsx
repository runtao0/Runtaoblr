import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './sessions/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import FollowingContainer from './following/following_container';
import UserSettingsContainer from './user_settings/user_settings_container';
import BlogContainer from './blog/blog_container';
import { SignUpFormContainer, SignInFormContainer} from './sessions/session_form_container';
import { receiveErrors } from "../actions/session_actions";
import { syncHistoryWithStore } from 'react-router-redux'

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    store.dispatch(receiveErrors([]));
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace("/dashboard");
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace("/login");
    }
  };

  const history = syncHistoryWithStore(hashHistory, store);

  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" component={ App } onEnter={_redirectIfLoggedIn}>
          <IndexRoute component={ SignInFormContainer } />
          <Route path="/login" component={ SignInFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={ SignUpFormContainer } onEnter={_redirectIfLoggedIn} />
        </Route>
        <Route path="/dashboard" component={ DashboardContainer } onEnter={_redirectIfNotLoggedIn} />
        <Route path="/user_settings" component={ UserSettingsContainer } onEnter={_redirectIfNotLoggedIn} />
        <Route path="/:username" component={ BlogContainer } />
      </Router>
    </Provider>);
}

// <Route path="/following" component={ FollowingContainer } onEnter={_redirectIfNotLoggedIn} />
// <IndexRoute component={SessionFormContainer} />
export default Root;
