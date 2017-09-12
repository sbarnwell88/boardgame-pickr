import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class EditBoardgame extends Component {
    constructor() {
        super();
        this.state = {
            game: {
                name: '',
                description: '',
                thumbnail: '',
                image: '',
                id: ''
            },
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
        this.setState({game: res.data})
        return res.data            
        }
        catch (error) {
            try {
            const res = await axios.get(`https://bgg-json.azurewebsites.net/thing/${gameId}`)
            this.setState({game: res.data})
            return res.data
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }

    _editGame = async (e) => {
        e.preventDefault();
        const payload = this.state.game;
        const gameId = this.props.match.params.id;
        try {
            const res = await axios.patch(`/api/boardgames/${gameId}`, payload);
            this.setState({redirect: true})
            return res.data
        }
        catch(error) {
            console.log(error)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.game};
        newState[e.target.name] = e.target.value;
        this.setState({game: newState});
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={`/boardgames/${this.state.game.id}`} />
        }
        return (
            <div>
                <h1>Edit Boardgame</h1>
                <form>
                    <div>
                        <label htmlFor="name"> Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.game.name} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.game.description} />
                    </div>
                    <div>
                        <label htmlFor="thumbnail">Thumbnail: </label>
                        <input onChange={this._handleChange} type="text" name="thumbnail" value={this.state.game.thumbnail} />
                    </div>
                    <div>
                        <label htmlFor="image">Description: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.game.image} />
                    </div>

                    <button onClick={this._editGame}>Submit</button>
                </form>
                
            </div>
        );
    }
}

export default EditBoardgame;