import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FavoriteItem from './FavoriteItem';

class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            favorites: [],
        }
    }

    componentWillMount() {
        this._getFavorites();
    }

    _getFavorites = async () => {
        const res = await axios.get(`/api/favorites`)
        console.log(res.data)
        this.setState({ favorites: res.data})
        console.log(this.state.favorites)
        return res.data
    }


    render() {

        return (
            <div>
                <h1>My Favorites</h1>
                    {this.state.favorites.map((favorite, index) => {
                    return <FavoriteItem {...favorite} key={index} />
                })}    
            </div>
        );
    }
}

export default Favorites;