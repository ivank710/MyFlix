import React from 'react';
import NavBarContainer from '../navBar/navBar_container';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      movies: []
    };
  }

  render() {
    return (
      <>  
        <NavBarContainer  />
      </>
    )
  }

}

export default List;