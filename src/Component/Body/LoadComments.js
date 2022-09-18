import React from 'react';


const LoadComments = Props => {
    return (

        Props.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>{comment.date}</p>
                </div>
            );

        })
    );
}



export default LoadComments;