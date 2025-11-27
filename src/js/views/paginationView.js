import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Because of Parcel2

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--inline');

            if (!btn) return;

            const gotoPage = +btn.dataset.goto;
            handler(gotoPage);
        });
    }

    _generateHTML() {
        // first, we need to know how many pages there are:
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.result.length / this._data.resultsPerPage); // round it to next number

        // Scenario 1: we are at page 1 and we HAVE other pages
        if (currentPage === 1 && numPages > 1) {
            return `
          <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
            `;
        }

        // Scenario 2: we are in other pages
        if (currentPage !== 1 && currentPage < numPages) {
            return `
          <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
            `;
        }
        // Scenario 3: we are in the last page
        if (currentPage === numPages && numPages > 1) {
            return `
          <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
            `;
        }
        // Scenario 4: we are at page 1 and THERE IS NO other pages
        return '';
    }
}

export default new PaginationView();
