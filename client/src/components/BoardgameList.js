import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";
import { IndGame, Button, Buttons } from '../styles/ShowGame';

class BoardgameList extends Component {
    constructor() {
        super();
        this.state = {
            game: {},
            favorites: {},
            redirect: false,
            user_id: ''
        }
    }

    componentWillMount() {
        const gameId = this.props.match.params.id;
        this._getGame(gameId);
        this._checkAuth();
    }

    _getGame = async (gameId) => {
        try {
        console.log('local sever')
        const res = await axios.get(`/api/boardgames/${gameId}`)
        console.log(res.data[0].id)
        this.setState({game: res.data[0]})
        return res.data            
        }
        catch (error) {
            try { 
                console.log('external api')
            const res = await axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            this.setState({
                game: {
                    name: res.data.name,
                    description: res.data.description,
                    thumbnail: res.data.thumbnail,
                    image: res.data.image,
                    api_id: res.data.gameId
                }
            })
            const payload = this.state.game;
            const response = await axios.post(`/api/boardgames`, payload)
            this.setState({ game: response.data})
            }
            catch (error) {
                console.log(error.message)
            }
        }
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
      return response.data
    }
    catch (err) {
      await console.log(err)
      return err.message
    }
  
  }

    _addToFavorites = async (e) => {
        const game = this.state.game;
        const gameId = this.state.game.id;
        const user_id = this.state.user_id;
        const payload = {
            boardgame_id: gameId,
            user_id
        }
        console.log(payload)
        const res = await axios.post(`/api/favorites/`, payload)
        await this.setState({ favorites: res.data })
        return res.data
    }

    _deleteGame = async () => {
        const gameId = this.props.match.params.id;
        const res = await axios.delete(`/api/boardgames/${gameId}`)
        this.setState({ game: res.data, redirect: true })
    }

    render() {
        const gameId = this.props.match.params.id;
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <IndGame>
                <div>
                    <div className="container">
                        <div className="show"><h1>{this.state.game.name}</h1>
                        {this.state.game.description}</div>
                        <div className="show"><img src={this.state.game.image} height="400" width="400" /></div>
                    </div>
                </div>
                </IndGame>
                <Buttons>
                <div className="buttons">
                    <Button onClick={this._addToFavorites}>Add To Favorites</Button>
                    <Button><Link to={`/boardgames/${gameId}/edit`}>Edit</Link></Button>
                    <Button onClick={this._deleteGame}>Delete Game</Button>
                </div>
                </Buttons>
            </div>
        );
    }
}

export default BoardgameList;