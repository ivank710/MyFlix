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

  render() {
    const euro = "Europe";
    const asia = "Asia";
    const recAdded = "Recently Added";
  
    return (
      <>
        <div>
          <div>
            <NavBarContainer />
          </div>

          <div>
            <FeaturedMovieContainer />
            <br/>
            <GenreContainer name={recAdded} movies={this.props.movies}/>
            <GenreContainer name={asia} movies={this.props.movies.filter(movie => movie.genre === "Asia")}/>
            <GenreContainer name={euro} movies={this.props.movies.filter(movie => movie.genre === "Europe")}/>
          </div>
        </div>
       
      </>
    )
  }
}

export default Browse;