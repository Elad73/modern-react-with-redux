import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
import DragonConsole from '../../config/console';

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        DragonConsole.inspect("formValues", formValues);
        this.props.createStream(formValues);
    }

    render() {
        return (
           <div>
               <h3>Creat a Stream</h3>
               <StreamForm onSubmit={this.onSubmit} />
           </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);
