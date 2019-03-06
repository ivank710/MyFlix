import React from 'react';
import {Link} from 'react-router-dom';

class Genre extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let photos = this.props.movies.map((movie) => {
      return (
        <div className="image">
          <img src={movie.photo} alt="" />
          <Link to={`/browse/${movie.id}`}>
            <div className="play">
              <i className="far fa-play-circle fa-2x"></i>
            </div>
          </Link>
          <br/>
        </div>
      )
    });

    return (
      <>
      <div className="genre_container">
   
        <div className="genre"><strong>{this.props.name}</strong></div>

        <div className="scrolling-wrapper">
          
            {photos}
     
        </div>
        
      </div>
    </>
    )
  }

}


export default Genre;