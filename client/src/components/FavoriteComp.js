import React, { Component } from 'react';
import axios from 'axios';

class FavoriteComp extends Component {
    constructor() {
        super();
        this.state = {
            game: {}
        }
    }

    componentWillMount () {
        // this._getGame();
    }
    
    // _getGame = async(gameId) => {
    //         const res = await axios.get(`/api/boardgames/${}`)
    //         this.setState({game: {
    //             name: res.data.name,
    //             api_id: res.data.id 
    //         }
    //         })
    //         console.log(res.data)
    //         return res.data
    //     }

    render() {
        console.log(this.props.favoriteID)
        return (
            <div>
            </div>
        );
    }
}

export default FavoriteComp;