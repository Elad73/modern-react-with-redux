import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

const App = () => {
    const [lat, setLat] = useState(null); //the first is the value that we want to store and the second is a function to change that value
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []); //the empty array parameter, means only try to run this function one time in total for the entire life-cycle of this component

    let content;
    if(errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if(lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Loader message="Please accept location request"/>;
    }

    return <div className="border red">{content}</div>;
};

/* class App extends React.Component {
    
    state = { lat: null, errorMessage: '' }; //this is the state object 

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState( { lat: position.coords.latitude } ),
            err => this.setState( {errorMessage: err.message})
        );
    }

    renderContent() {

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Loader message="Please accept location request"/>;
    }

    //react says we have to deifn render!!!
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
} */

ReactDOM.render(<App />, document.getElementById('root'));
