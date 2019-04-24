import React from 'react';

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
    
    let demoEmail = 'demo@gmail.com'.split("");
    let demoPassword = '123456'.split("");

    this.setState({
      email: this.state.email,
      password: this.state.password,
    }, () => this.demoLogin(demoEmail, demoPassword));
  }


  demoLogin(email, password) {
    if(email.length > 0) {
      this.setState({email: this.state.email += email.shift()},
        () => window.setTimeout(() => this.demoLogin(email, password), 60));
    } else if(password.length > 0) {
      this.setState({password: this.state.password += password.shift()},
        () => window.setTimeout(() => this.demoLogin(email, password), 70));
    } else if(email.length === 0 && password.length === 0) {
      this.props.demoLogin(this.state);
    }
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
              <input type="text" value={this.state.email} onChange={this.update('email')} 
                className='login_input' placeholder="Email" id="email"/>
                <br/>
              <input type="password" value={this.state.password} onChange={this.update('password')} 
                className='login_input' placeholder="Password" id="password"/>
              <br/><br/>

              <div className="errors_box">
                <div className="errors">{this.renderErrors()}</div>
              </div>

              <br/><br/>
              <input type="submit" onClick={this.handleSubmit} 
                value={this.props.formType} className="session_submit" id="submit"/>
              <input type="submit" onClick={this.handleDemoSubmit} 
                value='Demo' className="demo_submit" />

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