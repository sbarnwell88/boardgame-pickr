import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { FormComponent } from '../styles/Forms';

class NewBoardgame extends Component {
    constructor() {
        super();
        this.state = {
            game : {
                name: '',
                description: '',
                thumbnail: '',
                image: '',
                id: ''
        },
        redirect: false
        }
    }
   
    _handleChange = (e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const game = {...this.state.game};
        game[attributeName] = attributeValue;
        this.setState({ game });
    }

    _newGame = async (e) => {
        e.preventDefault();
        const payload = this.state.game;
        console.log(payload)
        const res = await axios.post(`/api/boardgames`, payload);
        console.log(res.data.id)
        this.setState({ redirect: true, game: res.data})
    }


    render() {
        if(this.state.redirect) {
            const id = this.state.game.id;
            return <Redirect to={`/boardgames/${id}`} />
        }
        return (
            <div>
                <FormComponent>
                <h1>New Boardgame</h1>
                <form onSubmit={this._newGame}>
                    <div>
                        <label htmlFor="name">Boardgame Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.description} />
                    </div>
                    <div>
                        <label htmlFor="thumbnail">Thumbnail: </label>
                        <input onChange={this._handleChange} type="text" name="thumbnail" value={this.state.thumbnail} />
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.image} />
                    </div>

                    <button>Create New Boardgame</button>
                </form>
                </FormComponent>
            </div>
        );
    }
}

export default NewBoardgame;