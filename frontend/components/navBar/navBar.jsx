import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);

  }
  
 

  render(){
    const email = this.props.currentUser.email;
    const idx = email.indexOf("@");
    const username = email.slice(0, idx);
 
    return (
      <>
        <div className="nav_bar_container">
            <div className="nav_logo"></div>

            <Link to="/browse">
              <div className="home">Home</div>
            </Link>

            <Link to={`/lists/${this.props.currentUser.id}`}>
              <div className="my-list-nav">My List</div>
            </Link>


            <div className="dropdown">
              <button className="dropbtn">
              </button>
              &nbsp;&nbsp;&nbsp;  

              <i className="fa fa-caret-down"></i>

              <div className="dropdown-content">
                <br/>
                <div className="welcome">Hello, {username}</div>
                  <hr/>
                <div className='sign_out_button' onClick={this.props.logout} type="submit">Sign out of Worldflix</div>

              </div>
            </div>

        </div>
      </>
    )
  }
}
export default NavBar;

