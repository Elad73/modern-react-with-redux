import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return <div>{this.props.user}</div>;
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);