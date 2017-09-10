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
        const res = await axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
        this.setState({game: res.data})
        console.log(res.data)
        return res.data
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
        return (
            <div>
                {this.state.game.name}
            </div>
        );
    }
}

export default BoardgameList;