import React from 'react';
import {Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    // const demoUser = { email: 'flix1234@yahoo.com', password: '123456' };
    // this.props.demoLogin(demoUser);

    let email ='flix1234@yahoo.com'.split("");
    let password ='123456'.split("");
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <div className="background_img"></div>

        <div className="logo_box">
          <div className="signin_logo"></div>
        </div>

        <div className="login_form_container">
          <form onSubmit={this.handleSubmit} className="login_form_box">

            <div className='login_form'>
              <br/>
              <div className='sign_in_tag'>{this.props.formType}</div>
              <br/><br/><br/>
              <input type="text" value={this.state.email} onChange={this.update('email')} 
                className='login_input' placeholder="Email"/>
                <br/>
              <input type="password" value={this.state.password} onChange={this.update('password')} 
                className='login_input' placeholder="Password"/>

              <br /> 

              <div className="errors">
                {this.renderErrors()}
              </div>

              <br /> 
              <input type="submit" onClick={this.handleSubmit} 
                value={this.props.formType} className="session_submit" />
              <br /> 
              <input type="submit" onClick={this.handleDemoSubmit} 
                value='Demo' className="demo_submit" />

            <br /><br /><br /><br /> <br/><br/><br/>
              <div className='user_tag_parent'>
                <div className="form_type">Please {this.props.formType} or </div>
                &nbsp;&nbsp;
                <div className="nav_link"> {this.props.navLink} </div>
              </div>
            </div>


          </form>
        </div>

      </>
    )
  }

  
}

export default SessionForm;