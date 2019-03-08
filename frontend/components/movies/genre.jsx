import React from 'react';
import {Link} from 'react-router-dom';

class Genre extends React.Component{
  constructor(props) {
    super(props);

    this.addListItem = this.addListItem.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  addListItem(movieId) {
    this.props.createListItem(movieId);
  }

  scrollLeft(event) {
    event.preventDefault();
    $('#photos').animate({
      marginLeft: "+=400px"
    }, "fast");
  }

  scrollRight(event) {
    event.preventDefault();
    $('#photos').animate({
      marginLeft: "-=400px"
    }, "fast");
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
                <i className="far fa-play-circle fa-2x" id="play-genre"></i>
                <Link to={`/lists/${this.props.currentUser.id}`}>
                  <i className="fas fa-plus fa-2x" id="add-circle" onClick={() => this.addListItem(movie.id)}></i>
                </Link>
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


          <div className="pics_container">
            <span id="controlL" class="left-controls" role="button" >
              <b class="fa fa-chevron-left fa-chevron-left-extra" aria-hidden="true" onClick={this.scrollLeft}></b>
            </span>


            <div className="pics" id="photos">
                {photos}
            </div>

            <span id="controlR" class="right-controls" role="button" >
                <b class="fa fa-chevron-right fa-chevron-right-extra" aria-hidden="true" onClick={this.scrollRight}></b>
            </span>
          </div>

        </div>
        
      </div>
    </>
    )
  }

}


export default Genre;