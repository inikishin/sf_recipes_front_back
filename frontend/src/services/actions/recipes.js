import {getCategoriesApi, getRecipesApi} from "../handle-api";

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_RECIPES_REQUEST = 'GET_RECIPES_REQUEST';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';

export const getCategories = () => {
    return function (dispatch) {
        console.log('getCategories action');
        dispatch({type: GET_CATEGORIES_REQUEST});

        getCategoriesApi().then(res => {
            if (res && res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Error: ${res.status}`);
            }
        }).then((data) => {
            dispatch({type: GET_CATEGORIES_SUCCESS, categories: data})
        });
    }
}

export const getRecipes = () => {
    return function (dispatch) {
        dispatch({type: GET_RECIPES_REQUEST});

        getRecipesApi().then(res => {
            if (res && res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Error: ${res.status}`);
            }
        }).then((data) => {
            dispatch({type: GET_RECIPES_SUCCESS, recipes: data})
        });
    }
}