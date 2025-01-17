import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here

class Users extends Component {

  displayUsers = () => {
    let users = this.props.users
    users.map(u => <li>{u.username}</li>);
  }

  render() {
    let users = this.props.users.map((u) => <li>{u.username}</li>);

    return (
      <div>
        <ul>
          Users!
          {users}
        </ul>
           <p>{this.props.numberOfUsers}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users, numberOfUsers: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
