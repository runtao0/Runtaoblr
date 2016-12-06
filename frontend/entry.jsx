import React from 'react';
import ReactDOM from 'react-dom';
import { logIn, logOut, signUp } from './actions/session_actions';
import configureStore from "./store/store";

const store = configureStore();
window.store = store;
window.logIn = logIn;
window.logOut = logOut;
window.signUp = signUp;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to My Greatest Achievement!!!</h1>, root);
});
