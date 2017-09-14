import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";

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
        // this._checkAuth();
    }

    _getGame = async (gameId) => {
        try {
        console.log('local sever')
        const res = await axios.get(`/api/boardgames/${gameId}`)
        console.log(res)
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

    // _checkAuth = async () => {
    // const accessToken = localStorage.getItem("access-token")
    // const client = localStorage.getItem("client")
    // const uid = localStorage.getItem("uid")
    // const validateTokenPayload = {
    //   accessToken,
    //   client,
    //   uid
    // }
    // try {
    //   const response = await axios.get(`/auth/validate_token`, {
    //     params: {
    //       accessToken,
    //       client,
    //       uid
    //     }
    //   })
    //   await
    //   console.log(response)
    //   let user_id = response.data.data.id;
    //   this.setState({ user_id })
    //   return response.data
    // }
    // catch (err) {
    //   await console.log(err)
    //   return err.message
    // }
    // }
    // _addToFavorites = async (e) => {
    //     const gameId = this.props.match.params.id; 
    //     const game = this.state.game;
    //     const res = await axios.put(`/api/favorites/${gameId}`, game)
    //     await this.setState({ favorites: res.data })
    //     return res.data
    // }

    _addToFavorites = async () => {
        // const user_id = this.state.user_id;
        const boardgame_id = this.props.match.params.id;
        const payload = 
        {
            // user_id,
            boardgame_id
        }
        try {
        const res = await axios.post(`/api/favorites`, payload)
        console.log(res)
        return res.data
        }
    catch (error) {
        console.log( error )
    }   
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
                <div>{this.state.game.name}</div>
                <div>{this.state.game.description}</div>
                <div><img src={this.state.game.thumbnail} /></div>
                <img src={this.state.game.image} />
                <button onClick={this._addToFavorites}>Add To Favorites</button>
                <button><Link to={`/boardgames/${gameId}/edit`}>Edit</Link></button>
                <button onClick={this._deleteGame}>Delete Game</button>
            </div>
        );
    }
}

export default BoardgameList;