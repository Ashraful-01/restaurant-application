import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseURL } from './baseURL';


export const addComment = (dishId, rating, author, comment) => ({

    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }


})

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading());

    axios.get(baseURL + "dishes")
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)));

}