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
      <div>{props.name}</div>
      <div>
        {photos}
      </div>
    </>
  )
};

export default Genre