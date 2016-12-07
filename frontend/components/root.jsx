import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './sessions/session_form_container';
import { SignUpFormContainer, SignInFormContainer} from './sessions/session_form_container';
import { receiveErrors } from "../actions/session_actions";

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    store.dispatch(receiveErrors([]));
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace("/");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={SessionFormContainer} />
          <Route path="/login" component={ SignInFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={ SignUpFormContainer } onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>);
}

export default Root;
