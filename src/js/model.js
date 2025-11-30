// TODO the M part of MVC project architecture

import { API_URL, RESULTS_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';
import { mockJSON } from './config.js';
import { mockIDjson } from './config.js';
export const state = {
    recipe: {},
    search: {
        query: '',
        result: [],
        resultsPerPage: RESULTS_PER_PAGE,
        page: 1,
    },
    bookmarks: [],
};

export const loadRecipe = async function (id) {
    try {
        // const recipe = JSON.parse(mockIDjson).data.recipe;
        // console.log(recipe);
        /////////////////////////////////////////
        // TODO this is the original ** add 'query argument in the function **
        const data = await getJSON(`${API_URL}/${id}`);
        const { recipe } = data.data;
        /////////////////////////////////////////
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            image: recipe.image_url,
            servings: recipe.servings,
            source: recipe.source_url,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        if (state.bookmarks.some(bookmark => bookmark.id === id)) {
            state.recipe.bookmark = true;
        } else {
            state.recipe.bookmark = false;
        }
    } catch (error) {
        console.error(`❌❌${error}❌❌`);
        throw error;
    }
};

export const loadSearchResult = async function () {
    try {
        //DESC delete this part !!!!!!!!!!!!!!!!! in main app
        const data = JSON.parse(mockJSON);
        /////////////////////////////////////////
        // TODO this is the original ** add 'query argument in the function **
        // state.search.query = query;
        // const data = await getJSON(`${API_URL}?search=${query}`);
        /////////////////////////////////////////
        // console.log(data);

        state.search.result = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            };
        });
        state.search.page = 1;
        // console.log(state.search.result);
    } catch (error) {
        console.error(`❌❌${error}❌❌`);
        throw error;
    }
};

export const getSearchResultPage = function (page = 1) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;

    return state.search.result.slice(start, end);
};

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = ing.quantity * (newServings / state.recipe.servings);
    });

    state.recipe.servings = newServings;
};

const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
    // add bookmark
    state.bookmarks.push(recipe);

    // Mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmark = true;
    persistBookmarks();
};

export const deleteBookmark = function (recipe) {
    // delete bookmark
    const indexItem = state.bookmarks.findIndex(item => item.id === recipe.id);
    state.bookmarks.splice(indexItem, 1);

    // Remove the current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmark = false;
    persistBookmarks();
};

const init = function () {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
console.log(state.bookmarks);
