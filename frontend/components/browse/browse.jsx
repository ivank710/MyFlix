import React from 'react';
import {Link} from 'react-router-dom';
import FeaturedMovie from './featured_movie';
import Genre from '../movies/genre';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : this.props.currentUser
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
    
  }

  navBar(){
    const email = this.props.currentUser.email;
    const idx = email.indexOf("@");
    const username = email.slice(0, idx);

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
                <div className="welcome">Hello, {username} </div>
                <br/>
                <div className='sign_out_button' onClick={this.props.logout} type="submit">Sign out of Worldflix</div>
    
              </div>
            </div>
            
        </div>
      </>
    )
  }

  render() {
    const allMovies = this.props.movies;
    const euroMovies = allMovies.filter(movie => movie.genre === "Europe")
    console.log(euroMovies);

    return (
      <>
        <div>{this.navBar()}</div>

        <FeaturedMovie movie={this.props.movies[0]} className="vid" />
        
       
      </>
    )
  }
}

export default Browse;