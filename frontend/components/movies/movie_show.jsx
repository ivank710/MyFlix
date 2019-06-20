import React from 'react';
import {Link} from 'react-router-dom';

class MovieShow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      euroMovies: ["1", "2", "3", "4", "5", "6", "7"],
      asiaMovies: ["8", "9", "10", "11", "12", "13", "14"]
    };

    this.playNextMovie = this.playNextMovie.bind(this);
  }

  componentDidMount() {
    let currMovieId = this.props.match.params.movieId;
    this.props.fetchMovie(currMovieId);
    
    let vid = document.getElementById('vid');
    vid.addEventListener('ended', this.playNextMovie, false);
  }

  getNewEuroMovieId(id) {
    let euroMoviesIds = this.state.euroMovies;
    let currIdx = euroMoviesIds.indexOf(id);
    let newId;
    
    if (currIdx === euroMoviesIds.length - 1) {
      newId = euroMoviesIds[0];
    } else {
      newId = euroMoviesIds[currIdx + 1];
    }

    return newId;
  }

  getNewAsiaMovieId(id) {
    let asiaMoviesIds = this.state.asiaMovies;
    let currIdx = asiaMoviesIds.indexOf(id);
    let newId;

    if (currIdx === asiaMoviesIds.length - 1) {
      newId = asiaMoviesIds[0];
    } else {
      newId = asiaMoviesIds[currIdx + 1];
    }

    return newId;
  }

  playNextMovie(e) {
    e.preventDefault();
    let euroMoviesId = this.state.euroMovies;
    let currMovieId = this.props.match.params.movieId;
    let newMovieId;

    if (euroMoviesId.includes(currMovieId)) {
      newMovieId = this.getNewEuroMovieId(currMovieId);
    } else {
      newMovieId = this.getNewAsiaMovieId(currMovieId);
    }

    this.props.history.push(`/browse/${newMovieId}`);
  }

  render() {
    if(this.props.movie === undefined) return "Movie does not exist";

    return (
      <>
        <div className="video-wrapper" id="vidWrapper">
          <video className="video" id="vid"src={this.props.movie.video} controls autoPlay></video>
        </div>

        <div className="back_container">
          <Link to="/browse">
              <div className="left-arrow">
                <i className="fas fa-arrow-left fa-3x"></i>
              </div>
          </Link>
        </div>
      </>
    )
  }

}

export default MovieShow;