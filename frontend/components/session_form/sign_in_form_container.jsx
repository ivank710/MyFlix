import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session,
  formType: 'Sign In',
  navLink: <Link to="/signup">Sign Up</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));