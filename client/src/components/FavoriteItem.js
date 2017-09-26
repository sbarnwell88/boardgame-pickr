import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaveList } from '../styles/Faves';
import { IndGame, Button, Buttons } from '../styles/ShowGame';


class FavoriteComp extends Component {
    constructor() {
        super();
        this.state = {
            favorite: {},
            game: {},
            user_id: ''
        }
    }

    componentWillMount() {
        this._checkAuth();
        this._getGame();
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
      await this._deleteFavorite();
    }
    catch (err) {
      await console.log(err)
      return err.message
    }
  }

    _getGame = async () => {
        try {
        const res = await axios.get(`/api/boardgames/`)
        this.setState({game: res.data})
        console.log(this.state.game)
        return res.data            
        }
        catch (error) {
            console.log(error)
        }
    }
    _getGameId = () => {
        this.state.game.map((game, index) => {
            return game.id;
            console.log(game.id)
        })
    }

    _deleteFavorite = async (e) => {
        e.preventDefault();
        const favoriteId = this.props.id;
        console.log(favoriteId);
        const user_id = this.state.user_id;
        console.log(user_id);
        const boardgame_id = this.props.id
        console.log(boardgame_id)
        const payload = {
            boardgame_id,
            user_id
        }
        console.log(payload)
        const res = await axios.delete(`/api/favorites/${favoriteId}`, {data:payload}) 
        window.location.reload();
    }

    render() {

        const name = this.props.name;

        return (
                <FaveList>
                        <div className="fave-list">
                            <div className="item"><Link to={`/boardgames/${this.props.api_id}`}>
                            {/* {name} */}
                            <img src={this.props.thumbnail} width="250" height="250"/></Link></div>
                             <Button onClick={this._deleteFavorite}>(x)</Button> 
                        </div>
                </FaveList>
                
        );
    }
}

export default FavoriteComp;