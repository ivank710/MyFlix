import React from 'react';
import {Route, Switch} from 'react-router-dom';
import sign_in_form_container from '../components/session_form/sign_in_form_container';
import signup_form_container from '../components/session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>MyFlix </h1>
    </header>

    <AuthRoute exact path="/login" component={sign_in_form_container} />
    <AuthRoute exact path="/signup" component={signup_form_container} />
  </div>
);

export default App;