import React from 'react';
import faker from 'faker';

function randomizeUser() {
    const gender     = (Math.random()*10)%2;
    const author     = faker.name.firstName(gender);
    const comment    = faker.lorem.sentences((Math.random()*10)%10);
    const timeAgo    = faker.date.past((Math.random()*100)%50).toString();
    let imageSrc     = faker.image.avatar();

    return {
                gender: gender,
                author: author,
                comment: comment,
                timeAgo: timeAgo,
                imageSrc: imageSrc
            };
};


const CommentDetail = props => {

    const autoUser = randomizeUser();

    const author   = props.autoFill ? autoUser.author : props.author;
    const comment  = props.autoFill ? autoUser.comment : props.comment;
    const timeAgo    = props.autoFill ? autoUser.timeAgo : props.timeAgo;
    let imageSrc = props.autoFill ? autoUser.imageSrc : props.imageSrc;

    return (
        <div className="comment">
                <a href="/" className="avatar" >
                    <img alt="avatar" src={imageSrc} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                       {author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {timeAgo}
                        </span>
                    </div>
                    <div className="text">
                        {comment}
                    </div>
                </div>
            </div>
    );
};

export default CommentDetail; 