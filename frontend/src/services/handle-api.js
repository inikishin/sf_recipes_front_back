export const url = 'http://127.0.0.1:8000/api/'

export const getCategoriesApi = async () => {
    return await fetch(url + 'categories/?format=json');
}

export const getRecipesApi = async () => {
    return await fetch(url + 'recipes/?format=json');
}