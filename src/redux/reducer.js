import DISHES from '../data/Dishes';
import COMMENTS from '../data/Comments';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS
}


export const Reducer = (state = initialState, action) => {
    // console.log("from Reducer:", action);
    return state;
}

