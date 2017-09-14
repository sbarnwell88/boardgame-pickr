import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import BoardgameList from './BoardgameList';
import { LandingPage } from '../styles/Home';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            games: [],
            favorites: []
        }
    }

    componentWillMount() {
        this._getGames();  
    }

    _getGames = async () => {
        try {
            const res = await axios.get(`https://bgg-json.azurewebsites.net/hot`) 
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
            <LandingPage>
            <div>
                <div className="hot-games">Trending Boardgames</div>
                   {this.state.games.map((game, index) => (
                    <div key={index}>
                        <Link to={`/boardgames/${game.gameId}`}>
                        {game.name}
                        <img src={game.thumbnail} />
                        </Link>
                    </div>
                ))} 
            </div>
            </LandingPage>
        );
    }
}
HomePage.defaultProps = {
    games: []
}

export default HomePage;