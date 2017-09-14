import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
                   {this.state.favorites.map((favorite, index) => {
                    return <div key={index} >
                        <Link to={`#`}>{favorite.name}</Link>
                        </div>

                })}   
            </div>
        );
    }
}

export default Favorites;