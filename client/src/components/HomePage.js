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
                <StyleRoot>
                    <Coverflow
                        media={{
                            '@media (max-width: 900px)': {
                                width: '90%',
                                height: '300px'
                            },
                            '@media (min-width: 900px)': {
                                width: '90%',
                                height: '600px'
                            }
                            }}
                        displayQuantityOfSide={2}
                        navigation={true}
                        enableHeading={false}
                        active={this.state.active} >
                    {this.state.games.map((game, index) => (
                    <div key={index}>
                        <Link to={`/boardgames/${game.gameId}`}>
                            <img src={game.thumbnail} width="250" height="250"/>
                            <div className="game-list">{game.name}</div>
                        </Link>
                    </div>
                    ))} 
                    </Coverflow>
                </StyleRoot>
                <div className="random">
                    <button onClick={this._handleClick.bind(this)}>Random</button>
                </div>
            </div>
            </LandingPage>
        );
    }
}
HomePage.defaultProps = {
    games: []
}

export default HomePage;