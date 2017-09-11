import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
            // loggedIn: false
        }
    }

componentWillMount() {
    const userId = this.props.match.params.id;
    this._isLoggedIn(userId);
  }

  _isLoggedIn = async (userId) => {
    const res = await axios.get(`/api/users/${userId}`);
    this.setState({
      user: res.data
    //   loggedIn: response.data.success
    });
    console.log(res.data)
    return res.data
  };
// /auth/validate_token

    render() {
       
        return (
            <div>
                Email: {this.state.user.email}
                Name: {this.state.user.name}
                Nickname: {this.state.user.nickname}
                Image: {this.state.user.image}
            </div>
        );
    }
}

export default UserProfile;