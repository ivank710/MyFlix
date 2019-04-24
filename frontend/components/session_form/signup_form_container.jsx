import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {signup, clearSessionErrors, login} from '../../actions/session_actions';
import SessionForm from './session_form';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session,
  formType: 'Sign Up',
  navLink: <Link to="/login">Sign In</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  demoLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
