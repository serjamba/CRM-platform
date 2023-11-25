const people = localStorage.getItem("people") ? JSON.parse(localStorage.getItem("people")) : [];
 
const filter = loadFilter();

function addPeople(data) {
  const id = people.length > 0 ? people[people.length - 1]["id"] + 1 : 1;

  let date = new Date().toISOString();

  const newPeople = {
    id,
    ...data,
    date,
    statusName: data.status,
  };
  people.push(newPeople);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("people", JSON.stringify(people));
}

function getPeopleArr() {
  if (localStorage.getItem("people")) {
    const peopleArr = JSON.parse(localStorage.getItem("people"));
    return peopleArr;
  }
}

function getPeopleById(id) {
  const peopleArr = people.find((item) => item.id == id);

  return peopleArr;
}

function updateRequest(formData) {
  const request = getPeopleById(formData.get("id"));
  request.name = formData.get('name');
  request.email = formData.get('email');
  request.phone = formData.get('phone');
  request.product = formData.get('product');
  request.status = formData.get('status');

  saveToLocalStorage();
}

function changeFilter(prop, value) {
  filter[prop] = value;
  localStorage.setItem('filter', JSON.stringify(filter));
  return filter;
}

function loadFilter() {
  let filter = {
    products: 'all',
    status: 'all'
  };

  if (localStorage.getItem('filter')) {
    filter = JSON.parse(localStorage.getItem('filter'));
  }

  return filter;
}

function filterRequests(filter) {
  let filteredRequest;

  if (filter.products !== 'all') {
    filteredRequest = people.filter((el) => el.product == filter.products);
  } else {
    filteredRequest = [...people];
  }

  if (filter.status !== 'all') {
    filteredRequest = filteredRequest.filter((el) => el.status == filter.status);
  }

  return filteredRequest;
}

function countNewRequests() {
  return people.filter((el) => el.status === 'new').length;
}

function getFilter() {
  return {...filter};
}


export {
  addPeople,
  saveToLocalStorage,
  getPeopleArr,
  getPeopleById,
  updateRequest,
  changeFilter,
  filterRequests,
  countNewRequests,
  loadFilter,
  getFilter,
};
