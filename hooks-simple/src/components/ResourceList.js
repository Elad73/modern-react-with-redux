import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
    state = { resources: [] };

    async fetchData() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: response.data});
    }

    componentDidMount() {
       this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.resource !== this.props.resource) {
            this.fetchData();
        }
    }

    render() {
        return <div>{this.state.resources.length}</div>;
    }
}

export default ResourceList;