import React from 'react';
import ReactDOM from 'react-dom';
import { logIn, logOut, signUp } from './actions/session_actions';
import configureStore from "./store/store";
import Root from './components/root';
import Modal from 'react-modal';

window.logIn = logIn;
window.logOut = logOut;
window.signUp = signUp;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser,
    errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);
});
