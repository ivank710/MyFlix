import React from 'react';
import {Link} from 'react-router-dom';
import FeaturedMovieContainer from './../browse/featured_movie_container';
import GenreContainer from '../../components/movies/genre_container';
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
    // console.log(this.props)
  
    return (
      <>
        <div>
          <div>
            <NavBarContainer />
          </div>

          <div>
            <FeaturedMovieContainer />
            <br/>
            <GenreContainer name={asia} movies={asianMovies}/>
            
            <GenreContainer name={euro} movies={euroMovies}/>
          </div>
        </div>
       
      </>
    )
  }
}

export default Browse;