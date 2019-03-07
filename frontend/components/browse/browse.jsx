import React from 'react';
import {Link} from 'react-router-dom';
import FeaturedMovie from './featured_movie';
import Genre from '../movies/genre';
import NavBarContainer from '../navBar/navBar_container';

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

  getMoviesByGenre(genre) {
    const movies = this.props.movies.filter(movie => movie.genre === genre);
    return movies;
  }

  render() {
    const euro = "Europe";
    const asia = "Asia";
    const euroMovies = this.getMoviesByGenre("Europe");
    const asianMovies = this.getMoviesByGenre("Asia");
  
    return (
      <>
        <NavBarContainer currUser={this.state.currentUser}/>

        <FeaturedMovie className="vid" />
        <br/>
        <Genre name={asia} movies={asianMovies}/>
        <Genre name={euro} movies={euroMovies}/>
       
      </>
    )
  }
}

export default Browse;