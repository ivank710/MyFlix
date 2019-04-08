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
    $('.pics').animate({
      marginLeft: "+=300px"
    }, "fast");
  }

  scrollRight(event) {
    event.preventDefault();
    $(".pics").animate(
      {
        marginLeft: "-=300px"
      },
      "fast"
    );
  }


  render() {
    let photos = this.props.movies.map(movie => {
      return (
        <>
          <div className="image">
            <Link to={`/browse/${movie.id}`}>
              <img src={movie.photo} alt="" />
              <div className="play">
                <div className="pic_title">{movie.title}</div>
                <i className="far fa-play-circle fa-2x" id="play-genre" />
                <Link to={`/lists/${this.props.currentUser.id}`}>
                  <i
                    className="fas fa-plus fa-2x"
                    id="add-circle"
                    onClick={() => this.addListItem(movie.id)}
                  />
                </Link>
              </div>
            </Link>
          </div>
        </>
      );
    });

    return (
      <>
        <div className="genre_container">
          <div className="genre">{this.props.name}</div>
          
          <div className="scrolling-wrapper">
       
            <div className="arrow"><i id="left-arrow" class="fas fa-chevron-left" onClick={this.scrollLeft}></i></div>
              <div className="pics" id="photos">
                {photos}
              </div>
            <div className="arrow"><i id="right-arrow" class="fas fa-chevron-right" onClick={this.scrollRight}></i></div>
            
          </div>

        
        </div>
      </>
    );
  }

}


export default Genre;