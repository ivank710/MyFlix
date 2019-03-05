import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//test
import {fetchMovie, fetchMovies} from './actions/movies_actions';

window.fetchMovie = fetchMovie;
window.fetchMovies = fetchMovies;



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: { currentUser: window.currentUser },
    };
    //delete window.currentUser;
  }

  store = configureStore(preloadedState);

  window.getState = store.getState;  
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store }/>, root);
});