import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit = term => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID f7b7460c741b55edc2d0eb7162079c6f959906d025969c049192f79cc8f14be8'

            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ margin: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )   
    }
}

export default App;