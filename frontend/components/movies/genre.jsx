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
       
          <Link to={`/browse/${movie.id}`}>
            <img src={movie.photo} alt="" />
              <div className="play">
                <i className="far fa-play-circle fa-2x"></i>
              </div>
          </Link>
       
        </div>
      )
    });

    return (
      <>
      <div className="genre_container">
   
        <div className="genre"><strong>{this.props.name}</strong></div>

        <div className="scrolling-wrapper">
          <div className="pics">
            {photos}
          </div>
            
     
        </div>
        
      </div>
    </>
    )
  }

}


export default Genre;