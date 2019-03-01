import React from 'react';
import {Link} from 'react-router-dom';


const splash = () => (
  <>
  <div className="splash_background"></div>
  
  <Link to="/login">
    <button className='sign_in_button' type="submit">Sign In</button>
  </Link>

  <div className="logo_box">
    <div className="logo"></div>
  </div>
 
  <div className='splash_container'>

    <div className="splash_header">
      <div className="main_splash_text">
        <h1 className="main_text">See what's next. </h1>
      </div>

      <br/>

      <div className="sub_splash_text">
        <h2 className='sub_text'>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
        <br/>
      </div>

      <br/>
      <Link to="/signup">
        <button className='sign_up_button' type="submit">Sign Up Now</button>
      </Link>

    </div>
  </div>


  </>
);

export default splash;