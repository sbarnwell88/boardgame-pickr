import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

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
        const res = await axios.get(`/api/boardgames/${gameId}`)
            if(res.status === 404 ) {
                axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            }
        this.setState({game: res.data})
        return res.data
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <div>{this.state.game.name}</div>
                <div>{this.state.game.description}</div>
                <div><img src={this.state.game.thumbnail} /></div>
                <img src={this.state.game.image} />
            </div>
        );
    }
}

export default BoardgameList;