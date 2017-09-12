import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class EditBoardgame extends Component {
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
        this.setState({game: res.data[0]})
        return res.data            
        }
        catch (error) {
            console.log(error)
        }
    }

    _editGame = async (e) => {
        e.preventDefault();
        const payload = this.state.game;
        const gameId = this.props.match.params.id;
        try {
            const res = await axios.patch(`/api/boardgames/${gameId}`, payload);
            this.setState({redirect: true})
            console.log(res.data)
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
            const id = this.props.match.params.id;
            return <Redirect to={`/boardgames/${id}`} />
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