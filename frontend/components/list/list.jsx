import React from 'react';
import NavBarContainer from '../navBar/navBar_container';
import {Link} from 'react-router-dom';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lists: this.props.lists
    }

    this.removeListItem = this.removeListItem.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchListItems();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentUser.id !== this.props.match.params.currentUser){
      this.render();
    }
  }


  removeListItem(movieId) {
    this.props.deleteListItem(movieId);
  }

  render() {
    console.log(this.props.lists);

    let photos = this.props.lists.map((movie) => {
      return (
        <>
          <div className="list-photos">

              <Link to={`/browse/${movie.id}`}>
                <img src={movie.photo} alt=""/>

                <div className="list-play">
                  <div className="list-title">{movie.title}</div>
                  <i className="far fa-play-circle fa-2x"></i>
                    &nbsp;&nbsp;
                </div>
              </Link>
                  <i className="fas fa-minus-circle fa-2x" onClick={() => this.removeListItem(movie.id)}></i>

          </div>
        </>
      )
    })

    


    return (
      <>  
        <NavBarContainer />
          <br/><br/>
        <div className="list-container">
          <div className="my-list">MY LIST</div>

          <div className="list-items">

            <div className="pics">
              {photos}
            </div>

          </div>
        </div>
      </>
    )
  }

}

export default List;