import React, { Component } from 'react';
import axios from 'axios';
import { IndGame, Button, Buttons } from '../styles/ShowGame';

class Randomize extends Component {
    constructor() {
        super();
        this.state = {
            game: {},
            active: 0
        }
    }

    componentWillMount() {
        this._getGame();
    }

    _getGame = async () => {
        try {
        const num = Math.floor((Math.random() * 10998) + 1);
        console.log('local sever')
        const res = await axios.get(`/api/boardgames/${num}`)
        console.log(res.data[0].id)
        this.setState({game: res.data[0]})
        return res.data            
        }
        catch (error) {
            try { 
                console.log('external api')
            const num = Math.floor((Math.random() * 10998) + 1);
            const res = await axios.get(`https://bgg-json.azurewebsites.net/thing/${num}`)
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

    _handleClick() {
        window.location.reload();
    }

    render() {
        return (
            <div>
                <IndGame>
                <div>
                    <div className="container">
                        <div className="show"><h1>{this.state.game.name}</h1></div>
                        <div className="show"><img src={this.state.game.image} /></div>
                        <div className="show">{this.state.game.description}</div>
                    </div>
                </div>
                </IndGame>
                <Buttons>
                <div className="buttons">
                    <Button onClick={this._addToFavorites}>Add To Favorites</Button>
                    <Button onClick={this._handleClick.bind(this)}>Random</Button>
                </div>
                </Buttons>
            </div>
        );
    }
}

export default Randomize;