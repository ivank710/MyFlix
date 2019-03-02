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

        <div className="nav_bar_container">

          <div className="nav_logo_box">
            <div className="nav_logo"></div>
          </div>

          <div className="dropdown_container">

            
            
              <Link to="/login">
                <button className="logout_button" onClick={this.props.logout}>Sign out of Netflix</button>
              </Link>
           
             
            
          </div>
          
        </div>

      </>
    )
  }
}

export default Browse;