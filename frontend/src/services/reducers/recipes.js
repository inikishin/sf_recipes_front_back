import {
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_RECIPES_REQUEST,
    GET_RECIPES_SUCCESS
} from "../actions/recipes";

export const initialState = {
    categories: [],
    isLoadingCategories: false,
    recipes: [],
    isLoadingRecipes: false,
}

export const recipes = (state= initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST: {
            return {...state, isLoadingCategories: true}
        }

        case GET_RECIPES_REQUEST: {
            return {...state, isLoadingRecipes: true}
        }

        case GET_CATEGORIES_SUCCESS: {
            return {...state, isLoadingCategories: false, categories: action.categories}
        }

        case GET_RECIPES_SUCCESS: {
            return {...state, isLoadingRecipes: false, recipes: action.recipes}
        }

        default: {
            return {...state}
        }
    }
}