// TODO the C part of MVC project architecture

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';

const controlRecipes = async function () {
    try {
        // DESC Get the hash from the url
        const id = window.location.hash.slice(1);
        if (!id) return;
        recipeView.renderSpinner();

        // model.state.search.page = 1;

        // TODO 0. results view to mark selected search result
        resultsView.update(model.getSearchResultPage());
        bookmarksView.update(model.state.bookmarks);

        //TODO 1. Loading recipe
        await model.loadRecipe(id);

        //TODO Rendering Recipe
        recipeView.render(model.state.recipe);
    } catch (error) {
        recipeView.renderError();
        console.error(error);
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

const controlServings = function (newServings) {
    // update the recipe servings (in state)
    model.updateServings(newServings);

    // update the recipe view
    // recipeView.render(model.state.recipe);
    recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
    // add and remove bookmark

    if (!model.state.recipe.bookmark) {
        model.addBookmark(model.state.recipe);
    } else {
        model.deleteBookmark(model.state.recipe);
    }

    // update recipe view
    recipeView.update(model.state.recipe);

    // render bookmarks
    bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
    bookmarksView.render(model.state.bookmarks);
};
const init = function () {
    bookmarksView.addHandlerRenderBookmark(controlBookmarks);
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
};
init();
