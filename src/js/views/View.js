//TODO this going to be used only as a parent class; no instances will be made from it

import icons from 'url:../../img/icons.svg'; // Because of Parcel2

export default class View {
    _parentElement = document.querySelector('.recipe');
    _data;
    _errorMessage = "We couldn't find the food. Please try another one";
    _successMessage = '';

    /**
     * render the received object to the DOM
     * @param {Object | Object[]} data the data to be rendered (e.g. recipe)
     * @param {boolean} [render = true] (optional) if false, creates HTMLstring instead of rendering to the DOM
     * @returns {undefined | string} A HTML string is returned if render=false
     * @this {Object} View instance
     * @author Jonas Schmedtmann
     */
    render(data, render = true) {
        if (!data || (Array.isArray(data) && data.length === 0) || Object.keys(data).length === 0)
            return this.renderError();

        this._data = data;

        const HTML = this._generateHTML();

        if (!render) return HTML;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', HTML);
    }

    renderSpinner = function () {
        const html = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    };

    renderError(message = this._errorMessage) {
        const html = `
        <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }

    renderSuccessMessage(message = this._successMessage) {
        const html = `
        <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }

    update(data) {
        this._data = data;

        const newHTML = this._generateHTML();

        const newDOM = document.createRange().createContextualFragment(newHTML);
        const newElements = Array.from(newDOM.querySelectorAll('*'));

        // The element which we want to update
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];

            // Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
                curEl.textContent = newEl.textContent;
            }

            // Updates changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr =>
                    curEl.setAttribute(attr.name, attr.value)
                );
            }
        });
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }
}
