import React from 'react';
import {Link} from 'react-router-dom';

class MovieShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    if(this.props.movie === undefined) return "Movie does not exist";

    return (
      <>
        <div className="video-wrapper">
          <video className="video" 
            src={this.props.movie.video} controls autoPlay></video>
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