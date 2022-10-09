import DISHES from '../data/Dishes';
import COMMENTS from '../data/Comments';
import { combineReducers } from 'redux';



const dishReducer = (dishState = DISHES, action) => {
    return dishState;
}

const commentReducer = (commentState = COMMENTS, action) => {
    if (action.type === 'ADD_COMMENT') {
        let comment = action.payload;
        comment.id = commentState.length;
        // console.log(comment);
        comment.date = new Date().toDateString();
        return commentState.concat(comment)
    }
    return commentState;
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})

