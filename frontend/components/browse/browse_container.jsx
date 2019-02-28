import {connect} from 'react-redux';
import React from 'react';
import Browse from './browse';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  //navLink: <Link to="/login"></Link>
  //movies
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);