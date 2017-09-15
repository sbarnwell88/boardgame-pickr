import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { UserInfo } from '../styles/User';
import EditProfile from './EditProfile';

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            pictures: []
        }
        this.onDrop = this.onDrop.bind(this);
    }

componentWillMount() {
    const userId = this.props.match.params.id;
    this._isLoggedIn(userId);
  }

_isLoggedIn = async () => {
    const accessToken = localStorage.getItem("access-token")
    const client = localStorage.getItem("client")
    const uid = localStorage.getItem("uid")
    const validateTokenPayload = {
      accessToken,
      client,
      uid
    }
    try {
      const response = await axios.get(`/auth/validate_token`, {
        params: {
          accessToken,
          client,
          uid
        }
      })
      await
      console.log(response)
      let user = response.data.data;
      this.setState({...user})
      return response.data
    }
    catch (err) {
      await console.log(err)
      return err.message
    }
  }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <UserInfo>
                <h1>My Profile</h1>
                <div className="item">Email: {this.state.email}</div>   
                <div className="item">Name: {this.state.name}</div>
                <div className="item">Nickname: {this.state.nickname}</div>
                <div className="item">Picture: {this.state.image}</div>
                {/* <Link to={`/user/${this.state.user.id}/edit`}>Update Profile</Link> */}
            </UserInfo>
        );
    }
}

UserProfile.defaultProps = {
    user: {
        data: {}
    }
}

export default UserProfile;