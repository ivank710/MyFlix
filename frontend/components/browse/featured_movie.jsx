import React from 'react';
import {Link} from 'react-router-dom';

const FeaturedMovie = (props) => (
    <>
    <div className="featured_vid">
      <video src="https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Piazza+dei+Miracoli_+Pisa_+Italy.mp4" className="vid" autoPlay loop muted/> 

    </div>
    
    <div className="vid-header">
        <div className="worldflix-original"> <strong>WORLDFLIX</strong> ORIGINAL</div>
        <Link to="/browse/1">
          <span className="play-button">
            <div className="play-text">
              ▶ &nbsp;Play
            </div>
          </span>
        </Link>
      <div className="title">The Piazza dei Miracoli </div>
      <div className="description-box">
        <div className="text">
            The Piazza dei Miracoli, an important centre of European medieval art and one of the finest architectural complexes in the world.
        </div>
      </div>
    </div>


   

      
    </>
  
);

export default FeaturedMovie;