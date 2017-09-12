import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";

class BoardgameList extends Component {
    constructor() {
        super();
        this.state = {
            game: {},
            redirect: false
        }
    }

    componentWillMount() {
        const gameId = this.props.match.params.id;
        this._getGame(gameId);
    }

    _getGame = async (gameId) => {
        try {
        const res = await axios.get(`/api/boardgames/${gameId}`)
        console.log(res)
        this.setState({game: res.data})
        return res.data            
        }
        catch (error) {
            try {
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
            console.log(payload)
            const response = await axios.post(`/api/boardgames`, payload)
            this.setState({ game: response.data})
            }
            catch (error) {
                console.log(error.message)
            }
        }
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
                <Link to={`/boardgames/${gameId}/edit`}>Edit</Link>
            </div>
        );
    }
}

export default BoardgameList;