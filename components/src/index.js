import React         from 'react';
import ReactDOM      from 'react-dom';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';



const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail 
                    autoFill='true' 
                    author='Elad' 
                    comment='This is not generated automatically' 
                    timeAgo={Date.toString()} 
                    imageSrc='' 
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                    author='Assaf'  
                    comment='This is not generated automatically' 
                    timeAgo={Date.toString()} 
                    imageSrc='' 
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                    autoFill='true' 
                    author='Or' 
                    comment='This is not generated automatically' 
                    timeAgo={Date.toString()} 
                    imageSrc='' 
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render( <App/ >, document.querySelector('#root'));
        
