import React from 'react';

class SearchBar extends React.Component {

    state = { term: 'Hi there!'};

    onFormSubmit(event) {
        event.preventDefault(); //prevent the form from resubmitting upon default enter
    }


    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState( { term: e.target.value} )} 
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;