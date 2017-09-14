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
            </div>
        );
    }
}

export default Favorites;