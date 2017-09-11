import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewBoardgame extends Component {
    constructor() {
        super();
        this.state = {
            game : {
            gameId: '',
            name: '',
            description: '',
            thumbnail: '',
            image: '',
            minPlayers: '',
            maxPlayers: '',
            playingTime: '',
            mechanics: '',
            isExpansion: false,
            yearPublished: '',
            bggRating: '',
            averageRating: '',
            rank: '',
            designers: '',
            publishers: '',
            artists: '',
            playerPollResults: '',
            expansions: ''
        },
        redirect: false
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    _newGame = async (e) => {
        e.preventDefault();
        const payload = this.state.game;
        const res = await axios.post(`/api/boardgames`, payload);
        this.setState({ redirect: true, id: res.data.id })
        console.log(res.data.id)
    }

    render() {
        if(this.state.redirect) {
            const id = this.props.match.params.id;
            return <Redirect to={`/boardgames/${id}`} />
        }
        return (
            <div>
                <h1>New Boardgame</h1>
                <form onSubmit={this._newGame}>

                    <label htmlFor="name">Boardgame Name: </label>
                    <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />

                    <label htmlFor="description">Description: </label>
                    <input onChange={this._handleChange} type="text" name="description" value={this.state.description} />

                    <label htmlFor="thumbnail">Thumbnail: </label>
                    <input onChange={this._handleChange} type="text" name="thumbnail" value={this.state.thumbnail} />

                    <label htmlFor="image">Image: </label>
                    <input onChange={this._handleChange} type="text" name="image" value={this.state.image} />

                    <label htmlFor="minPlayers">Min. Players: </label>
                    <input onChange={this._handleChange} type="text" name="minPlayers" value={this.state.minPlayers} />

                    <label htmlFor="maxPlayers">Max. Players: </label>
                    <input onChange={this._handleChange} type="text" name="maxPlayers" value={this.state.maxPlayers} />

                    <label htmlFor="playingTime">Playing Time: </label>
                    <input onChange={this._handleChange} type="text" name="playingTime" value={this.state.playingTime} />

                    <label htmlFor="mechanics">Mechanics: </label>
                    <input onChange={this._handleChange} type="text" name="mechanics" value={this.state.mechanics} />

                    <label htmlFor="isExpansion">isExpansion? </label>
                    <input onChange={this._handleChange} type="text" name="isExpansion" value={this.state.isExpansion} />

                    <label htmlFor="yearPublished">Year Published: </label>
                    <input onChange={this._handleChange} type="text" name="yearPublished" value={this.state.yearPublished} />

                    <label htmlFor="bggRating">Bgg Rating: </label>
                    <input onChange={this._handleChange} type="text" name="bggRating" value={this.state.bggRating} />

                    <label htmlFor="averageRating">Average Rating: </label>
                    <input onChange={this._handleChange} type="text" name="averageRating" value={this.state.averageRating} />

                    <label htmlFor="rank">Rank: </label>
                    <input onChange={this._handleChange} type="text" name="rank" value={this.state.rank} />

                    <label htmlFor="designers">Designers: </label>
                    <input onChange={this._handleChange} type="text" name="designers" value={this.state.designers} />

                    <label htmlFor="publishers">Publishers: </label>
                    <input onChange={this._handleChange} type="text" name="publishers" value={this.state.publishers} />

                    <label htmlFor="artists">Artists: </label>
                    <input onChange={this._handleChange} type="text" name="artists" value={this.state.artists} />

                    <label htmlFor="playerPollResults">Player Poll Results: </label>
                    <input onChange={this._handleChange} type="text" name="playerPollResults" value={this.state.playerPollResults} />

                    <label htmlFor="expansions">Expansions: </label>
                    <input onChange={this._handleChange} type="text" name="expansions" value={this.state.expansions} />

                    <button>Create New Boardgame</button>
                </form>
            </div>
        );
    }
}

export default NewBoardgame;