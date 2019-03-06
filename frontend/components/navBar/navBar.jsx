import React from 'react';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const email = this.props.currUser.email;
    const idx = email.indexOf("@");
    const username = email.slice(0, idx);
   console.log(this.props.logout)
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
                <br/>
                <div className="welcome">Hello, {username}</div>
                <br/>
                <div className='sign_out_button' onClick={this.props.logout} type="submit">Sign out of Worldflix</div>

              </div>
            </div>

        </div>
      </>
    )
  }
}
export default NavBar;

