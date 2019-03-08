import React from 'react';
import NavBarContainer from '../navBar/navBar_container';
import {Link} from 'react-router-dom';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lists: this.props.lists
    };

    this.removeListItem = this.removeListItem.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchListItems();
  }

  removeListItem(movieId) {
    this.props.deleteListItem(movieId);
  }

  render() {
    console.log(this.props.lists);

    let pics = this.props.lists.map((movie) => {
      return (

        <div className="list-img">

          <Link to={`/browse/${movie.id}`}>
            <img src={movie.pic} alt=""/>
              <div className="list-title">{movie.title}</div>
              <div className="controls">
              <i className="far fa-play-circle fa-2x" id="play-circle"></i>
              <Link to={`/lists/${this.props.currentUser.id}`}>
                <i className="fas fa-minus-circle fa-2x" id="minus-circle" onClick={() => this.removeListItem(movie.id)}></i>
              </Link>
            </div>
          </Link>
        </div>

      )
    })

    return (
      <>  
        <NavBarContainer />
          
        <div className="list-container">
          <div className="my-list">My List</div>
          <br/>
          <div className="list-scroll">
        
            <div className="list-pics">
              {pics}
            </div>

          </div>
        </div>
      </>
    )
  }

}

export default List;