import * as model from '../model.js';
import * as view from './table.view.js';

function getPeopleItem() {
    if (localStorage.getItem('filter')) {
        model.filterRequests(model.loadFilter()).forEach(function(item) {
            view.renderPeople(item);
        });
    } else if (localStorage.getItem('people')) {
            model.getPeopleArr().forEach(function(item) {
                view.renderPeople(item);
            });
    }
}


function addEventListener() {
    view.elements.select.addEventListener('change', filterProducts);
    view.elements.topStatusBar.addEventListener('click', filterByStatus);
    view.elements.leftStatusLinks.forEach((link) => link.addEventListener('click', filterByStatus));
}

function filterProducts() {
    const filter = model.changeFilter('products', this.value);
    const filteredRequests = model.filterRequests(filter);
    
    view.elements.tbody.innerHTML = "";
    filteredRequests.forEach((item) => view.renderPeople(item));

}

function filterByStatus(e) {
    const filter = model.changeFilter('status', e.target.dataset.value);
    const filteredRequests = model.filterRequests(filter);

    view.elements.tbody.innerHTML = "";
    filteredRequests.forEach((item) => view.renderPeople(item));

    view.updateStatusLinks(e.target.dataset.value);
}   


getPeopleItem();
addEventListener();
view.renderBadgeNew(model.countNewRequests());
const filter = model.getFilter();
view.updateFilter(filter);
