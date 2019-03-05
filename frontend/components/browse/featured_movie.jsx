import React from 'react';

const FeaturedMovie = (props) => (
    <>
    <div className="featured_vid">
      <video src="https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Piazza+dei+Miracoli_+Pisa_+Italy.mp4" className="vid" autoPlay loop muted/> 

      <div className="worldflix-original"> <strong>WORLDFLIX</strong> ORIGINAL</div>
      <br/>
      <div className="title">Title</div>

    </div>

      
    </>
  
);

export default FeaturedMovie;