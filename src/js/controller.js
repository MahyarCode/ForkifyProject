// TODO the C part of MVC project architecture

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
const recipeContainer = document.querySelector('.recipe');

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipes = async function () {
    try {
        // DESC Get the hash from the url
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        //TODO 1. Loading recipe
        await model.loadRecipe(id);

        //TODO Rendering Recipe
        recipeView.render(model.state.recipe);
    } catch (error) {
        recipeView.renderError();
    }
};

const controlSearchResults = async function () {
    try {
        // TODO 1. Get search query
        const query = searchView.getQuery();
        if (!query) return;

        // TODO 2. Load search result
        await model.loadSearchResult(query);

        // TODO 3. Render search result
        console.log(model.state.search.result);
    } catch (error) {
        console.log(error);
    }
};

const init = function () {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
};
init();
