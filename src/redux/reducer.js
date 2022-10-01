import DISHES from '../data/Dishes';
import COMMENTS from '../data/Comments';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    sample: "hello World"
}



export const Reducer = (state = initialState, action) => {
    return state;
}

