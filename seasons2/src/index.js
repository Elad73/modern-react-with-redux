import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    
    //specific to js language. Not specific to react!
    constructor(props) {
        super(props);

        //this is the ONLY TIME we do direct assignment
        this.state = { lat: null, errorMessage: '' }; //this is the state object 
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState( { lat: position.coords.latitude } ),
            err => this.setState( {errorMessage: err.message})
        );
    }

    //react says we have to deifn render!!!
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>;
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
