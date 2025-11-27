// TODO the C part of MVC project architecture

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

const recipeContainer = document.querySelector('.recipe');

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
        resultsView.renderSpinner();

        // TODO 1. Get search query
        const query = searchView.getQuery();
        if (!query) return;

        // TODO 2. Load search result
        await model.loadSearchResult(query);

        // TODO 3. Render search result
        resultsView.render(model.getSearchResultPage());

        // TODO the initial pagination button:
        paginationView.render(model.state.search);
    } catch (error) {
        console.log(error);
    }
};

const controlPagination = function (goToPage) {
    // Render new results
    resultsView.render(model.getSearchResultPage(goToPage));
    // Render new pagination
    paginationView.render(model.state.search);
};

const init = function () {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
};
init();
