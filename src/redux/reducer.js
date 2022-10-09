import DISHES from '../data/Dishes';
import COMMENTS from '../data/Comments';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';



const dishReducer = (dishState = DISHES, action) => {
    switch (action.type) {
        default:
            return dishState;
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            // console.log(comment);
            comment.date = new Date().toDateString();
            return commentState.concat(comment)

        default:
            return commentState;
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})

