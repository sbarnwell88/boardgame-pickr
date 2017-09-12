import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            games: [],
            search: ''
        }
    }
    _search = async(e) => {
        const res = await axios.get()
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Search;