import React from 'react';
import {Link} from 'react-router-dom'

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : this.props.currentUser
    };
  }

  render() {
    return (
      <>
        <div className="nav_bar_color"></div>

        <ul className="nav_bar_container">
          <li className="nav_logo"></li>
          
          <li><div className="dropdown_img"></div> </li>
          <li><div className="caret"><i className="fas fa-caret-down fa-1.5x"></i></div></li>
          
        </ul>

        <Link to="/login">
          <button className="logout_button" onClick={this.props.logout}>Sign out of Netflix</button>
        </Link>

      </>
    )
  }
}

export default Browse;