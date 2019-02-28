import React from 'react';
import {Link} from 'react-router-dom';


const splash = () => (
  <>
  <div className="splash_background"></div>

  <div className="sign_in_box">
    <div className="sign_in_button">
      <Link to="/login">Sign In</Link>
    </div>
  </div>

  <div className="splash_header">
    <div className="splash_text1">
      <h1>Unlimited movies, </h1>
      <h1>TV shows, and more.</h1>
    </div>
    <div className="splash_text2">
      <h2>Watch anywhere. Cancel anytime.</h2>
    </div>
  </div>

  <div className="sign_up button">
    <Link to="/signup">WATCH FREE FOR 30 DAYS ></Link>
  </div>
  </>
);

export default splash;