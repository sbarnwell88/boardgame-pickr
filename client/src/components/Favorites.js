import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FavoriteItem from './FavoriteItem';
import { FavePage, FaveList } from '../styles/Faves';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            favorites: [],
            user_id: ''
        }
    }

    componentWillMount() {
        this._checkAuth();
    }

    _checkAuth = async () => {
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
      let user_id = response.data.data.id;
      this.setState({user_id})
      console.log(this.state.user_id)
      await this._getFavorites();
    }
    catch (err) {
      await console.log(err)
      return err.message
    }
  }

    _getFavorites = async () => {
        console.log("Hit the getfavorites")
        const user_id = this.state.user_id;
        console.log(user_id)
        const res = await axios.get(`/api/favorites`, {
            params: {
              user_id
            }
        })
        console.log(res.data)
        this.setState({ favorites: res.data})
        console.log(this.state.favorites)
        return res.data
    }


    render() {

        return (
            <div>
                <FaveList><h1>My Favorites</h1></FaveList>
                <FavePage>
                    {this.state.favorites.map((favorite, index) => {
                    return <FavoriteItem {...favorite} key={index} />
                })}    
            </FavePage>
            </div>
        );
    }
}

export default Favorites;