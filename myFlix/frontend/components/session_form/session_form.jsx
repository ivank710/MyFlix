import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
      <div className="login_form_container">
        <form onSubmit={this.handleSubmit} className="login_form_box">
          Welcome to MyFlix!
        <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className='login_form'>
            <br />
            <label>Email:
            <input type="text" value={this.state.email} onChange={this.update('email')} className='login_input' />
            </label>
            <br />
            <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')} className='login_input' />
            </label>
            <br />
            <input type="submit" value={this.props.formType} className="session_submit" />
          </div>
        </form>
      </div>
    )

  }
}

export default SessionForm;