import React from 'react';
import dateFormat from 'dateformat';
import Loading from './loading';

const LoadComments = Props => {
    if (Props.commentIsLoading) {
        return <Loading />;
    }
    else {
        return (

            Props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p>{comment.date}</p>
                        <p>Rating:{comment.rating}</p>
                        <p>{dateFormat(comment.date, "dddd, mmmm ds, yyyy, h:MM TT")} </p>
                    </div>
                );

            })
        );
    }

}



export default LoadComments;