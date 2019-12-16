import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = term => {
        unsplash.get('/search/photos', {
            params: { query: term}           
        }).then( (response) => {
            this.setState({ images: response.data.results });
        });
    }

    render() {
        return (
            <div className="ui container" style={{ margin: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        )   
    }
}

export default App;