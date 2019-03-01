import React from 'react';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : this.props.currentUser
    };
  }

  render() {
    
    return (
      <>
        <div className="curr_user">
          <h1>{this.props.currentUser.email}</h1>
        </div>
      </>
    )
  }
}

export default Browse;