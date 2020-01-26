import React from 'react';
import Modal from '../Modal';

const actions = (
    <div className="actions">
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
    </div>
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