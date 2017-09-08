import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            games: []
        }
    }

    componentWillMount() {
        this._getGames();
         
    }

    _getGames = async () => {
        try {
            const res = await axios.get(`https://bgg-json.azurewebsites.net/hot`);
            await this.setState({ games: res.data })
            return res.data
        }
        catch (error) {
            await this.setState({ error: error.message})
            return error.message
        }
    }

    render() {
        return (
            <div>
                   {this.state.games.map((game, index) => (
                    <div>
                        <Link to={`#`} key={index}>{game.name}</Link>
                    </div>
                ))}   
            </div>
        );
    }
}
HomePage.defaultProps = {
    games: []
}

export default HomePage;