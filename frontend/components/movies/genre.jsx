import React from 'react';
import {Link} from 'react-router-dom';

class Genre extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
    };
  
    this.addListItem = this.addListItem.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  addListItem(movieId) {
    this.props.createListItem(movieId);
  }

  scrollLeft() {
    let pos = (this.state.start - 1) % this.props.movies.length;
    this.setState({start: pos});
  }

  scrollRight() {
    let pos = (this.state.start + 1) % this.props.movies.length;
    this.setState({ start: pos});
  }

  render() {
    let movies = this.props.movies;
    let start = this.state.start;
    let photos = movies.slice(start).concat(movies.slice(0,start)).map(movie => {
      return (
        <>
          <div className="image" key={movie.id}>
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

          <nav className="scrolling-wrapper" id="photoContainer">
            <button className="pn-Advancer pn-Advancer_Left" onClick={() => this.scrollLeft()}>
              <i id="arrow" className="fas fa-chevron-left fa-4x" />
            </button>
            <div className="pics" id="photoContents">
              {photos}
            </div>
            <button className="pn-Advancer pn-Advancer_Right" onClick={() => this.scrollRight()}>
              <i id="arrow" className="fas fa-chevron-right fa-4x" />
            </button>
          </nav>
        </div>
      </>
    );
  }
  
}


export default Genre;