import React from 'react';
import Modal from '../Modal';

const actions = (
    <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
    </React.Fragment>
);

const StreamDelete = () => {
    return (
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"     
                content="ARe you sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    );
}

export default StreamDelete;