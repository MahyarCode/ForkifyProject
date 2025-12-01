import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipe is found for the searched item. Please Try again';
    _successMessage = '';

    _generateHTML() {
        return this._data.map(result => previewView.render(result, false)).join('');
    }
}

export default new ResultsView();
