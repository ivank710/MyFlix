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
        <div className="nav_bar_container">
            <div className="nav_logo"></div>
          
            <div className="dropdown">
              <button className="dropbtn">
              </button>
              &nbsp;&nbsp;&nbsp;  
              
                <i className="fa fa-caret-down"></i>
              
              <div className="dropdown-content">
                <Link to="/login">
                  <button className='sign_out_button' onClick={this.props.logout} type="submit">Sign out of Worldflix</button>
                </Link>
                
              </div>
            </div>
            
          </div>
          
       
      </>
    )
  }
}

export default Browse;