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

  componentDidMount() {
    // this.scrollListener();
  }

  addListItem(movieId) {
    this.props.createListItem(movieId);
  }

  scrollLeft() {
    this.setState({start: this.state.start + 1});
  }

  scrollRight() {
    this.setState({ start: this.state.start - 1 });
  }

  render() {

    let photos = this.props.movies.slice(this.state.start % this.props.movies.length).map(movie => {
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

          <nav className="scrolling-wrapper" id="photoContainer">
            <button className="pn-Advancer pn-Advancer_Left" onClick={() => this.scrollLeft()}>
              <i id="arrow" className="fas fa-chevron-left fa-3x" />
            </button>
            <div className="pics" id="photoContents">
              {/* //className: image */}
              {photos}
            </div>
            <button className="pn-Advancer pn-Advancer_Right" onClick={() => this.scrollRight()}>
              <i id="arrow" className="fas fa-chevron-right fa-3x" />
            </button>
          </nav>
        </div>
      </>
    );
  }
  
}


export default Genre;