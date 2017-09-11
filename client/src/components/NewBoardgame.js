import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewBoardgame extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            thumbnail: '',
            image: '',
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
        const payload = {
            name: this.state.name,
            description: this.state.description,
            thumbnail: this.state.thumbnail,
            image: this.state.image,
        }
        const res = await axios.post(`/api/boardgames`, payload);
        this.setState({
            name: res.data.name,
            description: res.data.description,
            thumbnail: res.data.thumbnail,
            image: res.data.image,
            redirect: true
        })
    }

    render() {
        if(this.state.redirect) {
            const gameId = this.props.match.params.id
            return <Redirect to={`/boardgames/${this.state.id}`} />
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

                    <label htmlFor="name">Image: </label>
                    <input onChange={this._handleChange} type="text" name="image" value={this.state.image} />

                    <button>Create New Boardgame</button>
                </form>
            </div>
        );
    }
}

export default NewBoardgame;