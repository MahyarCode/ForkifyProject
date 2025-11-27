// TODO the V part of MVC project architecture
import View from './View.js';

class RecipeView extends View {
    addHandlerRender(handler) {
        // DESC when we want to execute multiple events for a single callback function
        // window.addEventListener('hashchange', controlRecipes);
        // window.addEventListener('load', controlRecipes);
        ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
    }
}

export default new RecipeView();
