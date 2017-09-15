import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaveList } from '../styles/Faves';

class FavoriteComp extends Component {
    constructor() {
        super();
        this.state = {
            favorite: {}
        }
    }

    componentWillMount() {
    }

    _deleteFavorite = async (e) => {
        e.preventDefault();
        console.log(this.props.id)
        const res = await axios.delete(`/api/favorites/${this.props.id}`) 
        // #need user id and boardgame id
        this.setState({ favorite: res.data})
    }

    render() {

        const name = this.props.name;

        return (
            <div>
                <FaveList>
                        <div className="fave-list">
                            <Link to={`/boardgames/${this.props.api_id}`}>{name}</Link>
                            <img src={this.props.thumbnail} />
                        </div>
                </FaveList>
                {/* <button onClick={this._deleteFavorite}>(-)</button> */}
            </div>
        );
    }
}

export default FavoriteComp;