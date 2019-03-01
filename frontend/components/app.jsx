import React from 'react';
import {Route, Switch} from 'react-router-dom';
import sign_in_form_container from '../components/session_form/sign_in_form_container';
import signup_form_container from '../components/session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';
import splash from './splash';
import browse_container from '../components/browse/browse_container';

const App = () => (
  <div>   

    <AuthRoute exact path="/login" component={sign_in_form_container} />
    <AuthRoute exact path="/signup" component={signup_form_container} />
    <ProtectedRoute exact path='/browse' component={browse_container} />
    <AuthRoute exact path="/" component={splash} />
 
   
  </div>
);

export default App;