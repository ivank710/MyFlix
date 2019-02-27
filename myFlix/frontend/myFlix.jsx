import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {signup, login, logout} from './actions/session_actions'

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      session: { currentUser: window.currentUser }
    };
  }

  store = configureStore(preloadedState);

  window.getState = store.getState;  
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store }/>, root);
});