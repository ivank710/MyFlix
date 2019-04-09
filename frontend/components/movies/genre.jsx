import React from 'react';
import {Link} from 'react-router-dom';

class Genre extends React.Component{
  constructor(props) {
    super(props);

    this.addListItem = this.addListItem.bind(this);
    
    // this.scrollLeft = this.scrollLeft.bind(this);
    // this.scrollRight = this.scrollRight.bind(this);

    this.scroll = this.scroll.bind(this);

  }

  addListItem(movieId) {
    this.props.createListItem(movieId);
  }

  // scrollLeft(event) {
  //   event.preventDefault();
  //   $('.pics').animate({
  //     marginLeft: "+=300px"
  //   }, "fast");
  // }

  // scrollRight(event) {
  //   event.preventDefault();
  //   $(".pics").animate(
  //     {
  //       marginLeft: "-=300px"
  //     },
  //     "fast"
  //   );
  // }

  scroll(event) {
    event.preventDefault();

    let $item = $('.image'), //Cache your DOM selector
      visible = 2, //Set the number of items that will be visible
      index = 0, //Starting index
      endIndex = ($item.length / visible) - 1; //End index (NOTE:: Requires visible to be a factor of $item.length... You can improve this by rounding...)

    $('#right-arrow').click(function () {
      if (index < endIndex) {
        index++;
        $item.animate({ 'left': '-=300px' });
      }
    });

    $('#left-arrow').click(function () {
      if (index > 0) {
        index--;
        $item.animate({ 'left': '+=300px' });
      }
    });
  }


  render() {
    let photos = this.props.movies.map(movie => {
      return (
        <>
          <div className="image" key={movie.title}>
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
            <div className="arrow" onClick={this.scroll}>
              <i id="left-arrow" className="fas fa-chevron-left" />
            </div>
            <div className="pics" id="photos">
              {photos}
            </div>
            <div className="arrow" onClick={this.scroll}>
              <i id="right-arrow" className="fas fa-chevron-right" />
            </div>
          </div>
        </div>
      </>
    );
  }

}


export default Genre;