import React from 'react';
import ReactDOM from 'react-dom';
import { logIn, logOut, signUp } from './actions/session_actions';
import configureStore from "./store/store";
import Root from './components/root';

// window.logIn = logIn;
// window.logOut = logOut;
// window.signUp = signUp;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
