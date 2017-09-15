import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { FormComponent } from '../styles/Forms';


class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            redirect: false
        }
    }
componentWillMount() {
    this._isLoggedIn();
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
      console.log(this.state.user)
      let user = response.data.data;
      this.setState({user})
      console.log(this.state.user.id)
      return response.data
    }
    catch (err) {
      await console.log(err)
      return err.message
    }
  }
    _editProfile = async (e) => {
        e.preventDefault();
        const payload = this.state.user;
        const res = await axios.patch(`/api/users/${this.state.user.id}`, payload)
        this.setState({redirect: true})
        return res.data
    }

    _handleChange = (e) => {
        const newState = {...this.state.game};
        newState[e.target.name] = e.target.value;
        this.setState({user: newState});
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={`/users/${this.state.user.id}`} />
        }
        return (
            <div>
                <FormComponent>
                <h1>Edit Profile</h1>
                <form>
                    <div>
                        <label htmlFor="name"> Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.user.name} />
                    </div>
                    <div>
                        <label htmlFor="nickname">Nickname: </label>
                        <input onChange={this._handleChange} type="text" name="nickname" value={this.state.user.nickname} />
                    </div>
                    <div>
                        <label htmlFor="image">Picture: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.user.image} />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input onChange={this._handleChange} type="text" name="email" value={this.state.user.email} />
                    </div>

                    <button onClick={this._editProfile}>Submit</button>
                </form>
                </FormComponent>
            </div>
        );
    }
}

export default EditProfile;