const elements = {
    tbody: document.querySelector('#tbody'),
    select: document.querySelector('#productSelect'),
    topStatusBar: document.querySelector('#topStatusBar'),
    leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
    leftPanelNav: document.querySelector('.left-panel__navigation'),
    badgeNew: document.querySelector('#badge-new'), 
}

function renderPeople(peopleArray) {
    const newProducts = {
        "course-html": "Курс по верстке",
        "course-js": "Курс по JavaScript",
        "course-vue": "Курс по VUE JS",
        "course-php": "Курс по PHP",
        "course-wordpress": "Курс по WordPress",
    };
    const badges = {
        new: 'badge-danger',
        inwork: 'badge-warning',
        complete: 'badge-success'
    };
    const statuses = {
        new: "Новая",
        inwork: "В работе",
        complete: "Завершена",
    };
    const peopleHTML = `<tr>
                            <th scope="row">${peopleArray.id}</th>
                            <td>${new Date(peopleArray.date).toLocaleDateString()}</td>
                            <td>${newProducts[peopleArray.product]}</td>
                            <td>${peopleArray.name}</td>
                            <td>${peopleArray.email}</td>
                            <td>${peopleArray.phone}</td>
                            <td>
                                <div class="badge badge-pill ${badges[peopleArray.status]}">${statuses[peopleArray.status]}</div>
                            </td>
                            <td>
                                <a href="edit.html?id=${peopleArray.id}">Редактировать</a>
                            </td>
                        </tr>`;

    return tbody.insertAdjacentHTML('beforeend', peopleHTML);    
}

function updateStatusLinks(value) {
    elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove('active'));
    elements.topStatusBar.querySelector(`a[data-value=${value}]`).classList.add('active');

    elements.leftStatusLinks.forEach((link) => link.classList.remove('active'));
    elements.leftPanelNav.querySelector(`a[data-value=${value}]`).classList.add('active');
}

function renderBadgeNew(number) {
    elements.badgeNew.innerText = number;

    if (number == 0) {
        elements.badgeNew.classList.add('none');
    }
}

function updateFilter(filter) {
    elements.select.value = filter.products;
    
    elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove('active'));
    elements.topStatusBar.querySelector(`a[data-value=${filter.status}]`).classList.add('active');

    elements.leftStatusLinks.forEach((link) => link.classList.remove('active'));
    elements.leftPanelNav.querySelector(`a[data-value=${filter.status}]`).classList.add('active');

}

export {
    elements,
    renderPeople,
    updateStatusLinks,
    renderBadgeNew,
    updateFilter,
};
