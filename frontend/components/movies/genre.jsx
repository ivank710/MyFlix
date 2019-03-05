import React from 'react';

const Genre = (props) => {
  let photos = props.photos.map((photo) => {
    return (
      <div>
        <img src={photo} alt="" />
      </div>
    )
  });

  

  return(
    <>
      <div className="genre_container">
   
        <div className="genre"><strong>{props.name}</strong></div>
        <div className="scrolling-wrapper">
          <div className="image">
            <h2>{photos[1]}</h2>
            <div className="play"><i class="far fa-play-circle fa-2x "></i></div>
          </div>&nbsp;&nbsp;
        
          <div className="image">
            <h2>{photos[3]}</h2>
            <div className="play"><i class="far fa-play-circle fa-2x"></i></div>
          </div>&nbsp;&nbsp;
       
          <div className="image">
            <h2>{photos[5]}</h2>
            <div className="play"><i class="far fa-play-circle fa-2x"></i></div>
          </div>&nbsp;&nbsp;
    
          <div className="image">
            <h2>{photos[0]}</h2>
            <div className="play"><i class="far fa-play-circle fa-2x"></i></div>
          </div>&nbsp;&nbsp;
          
          <div className="image">
            <h2>{photos[2]}</h2>
            <div className="play"><i class="far fa-play-circle fa-2x"></i></div>
          </div>&nbsp;&nbsp;
         
          <div className="image">
            <h2>{photos[4]}</h2>
            <div className="play"><i class="far fa-play-circle fa-2x"></i></div>
          </div>&nbsp;&nbsp;
          
          <div className="image">
            <h2>{photos[6]}</h2>
            <div className="play"><i class="far fa-play-circle fa-2x"></i></div>
          </div>&nbsp;&nbsp;
        </div>

      </div>
    </>
  )
};

export default Genre