import React         from 'react';
import ReactDOM      from 'react-dom';
import CommentDetail from './CommentDetail';





const App = () => {

    return (
        <div className="ui container comments">
   
            <CommentDetail 
                autoFill='true' 
                author='Elad' 
                comment='This is not generated automatically' 
                timeAgo={Date.toString()} 
                imageSrc='' 
            />
            <CommentDetail 
                author='Assaf'  
                comment='This is not generated automatically' 
                timeAgo={Date.toString()} 
                imageSrc='' 
            />
            <CommentDetail 
                autoFill='true' 
                author='Or' 
                comment='This is not generated automatically' 
                timeAgo={Date.toString()} 
                imageSrc='' 
            />
        </div>
    );
};


ReactDOM.render( <App/ >, document.querySelector('#root'));
        
