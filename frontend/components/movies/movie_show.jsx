import React from 'react';

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
        <div>
          <div className="video_box">
            <video className="video" src={this.props.movie.video} controls autoPlay />
          </div>
        </div>
      </>
    )
  }

}

export default MovieShow;