import React from 'react';
import {Route} from 'react-router-dom';
import sign_in_form_container from '../components/session_form/sign_in_form_container';
import signup_form_container from '../components/session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>MyFlix </h1>
    </header>


    <Route path="/login" component={sign_in_form_container} />
    <Route path="/signup" component={signup_form_container} />

  </div>
);

export default App;