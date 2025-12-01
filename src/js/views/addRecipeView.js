import View from './View.js';

class AddRecipeView extends View {
    _parentElement = document.querySelector('.upload');
    _successMessage = 'Recipe successfully uploaded';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    constructor() {
        super();
        this._btnOpen.addEventListener('click', this._addHandlerWindowCloseAndOpen.bind(this));
        this._btnClose.addEventListener('click', this._addHandlerWindowCloseAndOpen.bind(this));
        this._overlay.addEventListener('click', this._addHandlerWindowCloseAndOpen.bind(this));
    }

    _addHandlerWindowCloseAndOpen() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

    _addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            const dataArray = [...new FormData(this)];
            const data = Object.fromEntries(dataArray);
            handler(data);
        });
    }

    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
}

export default new AddRecipeView();
