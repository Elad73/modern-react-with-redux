import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        //TODO:
        // console.log("Google client id3 -------------------------------------->" + JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID))
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '476172398113-lj9druu0il4r3qrgf7gmkemtgcbj4b3u.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        console.log("inside onAuthChange-------------------------------------------->");
        if(isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {  
        console.log("inside renderAuthButton-------------------------------------------->");
        console.log("this.props.isSignedIn -------------------------------------------->" + JSON.stringify(this.props.isSignedIn));
        
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
};

const mapStateToProps = state => {
    console.log("inside mapStateToProps-------------------------------------------->");
    console.log("state -------------------------------------------->" + JSON.stringify(state));
    console.log("state.auth.isSignedIn -------------------------------------------->" + JSON.stringify(state.auth.isSignedIn));
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);