import React from 'react';
import {Link} from 'react-router-dom';

class Genre extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let photos = this.props.movies.map((movie) => {
      return (
        <>
        
        <div className="image">
       
          <Link to={`/browse/${movie.id}`}>
            <img src={movie.photo} alt="" />
              <div className="play">
                <div className="pic_title">{movie.title}</div>
                <i className="far fa-play-circle fa-2x"></i>
                &nbsp;&nbsp;
                <i className="fas fa-plus fa-2x"></i>
              </div>
          </Link>
       
        </div>
        </>
      )
    });

    return (
      <>
      <div className="genre_container">
   
        <div className="genre">{this.props.name}</div>

        <div className="scrolling-wrapper">
          <div className="right_arrow"></div>
          <div className="pics_container">
            <div className="pics">
              {photos}
            </div>
          </div>
            
     
        </div>
        
      </div>
    </>
    )
  }

}


export default Genre;