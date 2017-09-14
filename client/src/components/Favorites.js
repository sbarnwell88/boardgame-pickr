import React, { Component } from 'react';
import axios from 'axios';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            favorites: []
        }
    }

    componentWillMount() {
        this._getFavorites();
    }

    _getFavorites = async () => {
        const res = await axios.get(`/api/favorites`)
        console.log(res.data)
        this.setState({ favorites: res.data})
        return res.data
    }

    render() {
        return (
            <div>
                 {this.state.favorites.map((favorite, index) => {
                    return <div key={index} >
                        <p>boardgame_id: {favorite.boardgame_id}</p>
                        </div>

                })} 
            </div>
        );
    }
}

export default Favorites;