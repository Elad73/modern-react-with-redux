import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        console.log("Google client id3 -------------------------------------->" + JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID))
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '476172398113-lj9druu0il4r3qrgf7gmkemtgcbj4b3u.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() }) //updating at the component level state
            });
        });
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>I dont know if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>;
        } else {
            return <div>I am not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;