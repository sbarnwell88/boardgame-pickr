import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import BoardgameList from './BoardgameList';
import { LandingPage } from '../styles/Home';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            games: [],
            favorites: [],
            active: 0
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

    _handleClick() {
        let num = Math.floor((Math.random() * 10) + 1);
        this.setState({ active: num });
    }

    render() {
        return (
            <LandingPage>
            <div>
                <div className="hot-games">Trending Boardgames</div>
                    <Coverflow
                        width={960}
                        height={480}
                        displayQuantityOfSide={2}
                        navigation={true}
                        enableHeading={false}
                        active={this.state.active} >
                    {this.state.games.map((game, index) => (
                    <div key={index}>
                        <Link to={`/boardgames/${game.gameId}`}>
                        <img src={game.thumbnail} width="250" height="250"/>
                        <div>{game.name}</div>
                        </Link>
                    </div>
                    ))} 
                    </Coverflow>
                <button onClick={this._handleClick.bind(this)}>Random</button>
            </div>
            </LandingPage>
        );
    }
}
HomePage.defaultProps = {
    games: []
}

export default HomePage;