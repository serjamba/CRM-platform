const elements = {
  form: document.querySelector("#form"),
  number: document.querySelector("#number"),
  id: document.querySelector("#id"),
  date: document.querySelector("#date"),
  product: document.querySelector("#product"),
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  phone: document.querySelector("#phone"),
  status: document.querySelector("#status"),
};

function renderPeople(people) {
  elements.number.innerText = people.id;
  elements.id.value = people.id;
  elements.date.innerText = `${new Date(people.date).toLocaleDateString()} ${new Date(people.date).toLocaleTimeString()}`;
  elements.product.value = people.product;
  elements.name.value = people.name;
  elements.email.value = people.email;
  elements.phone.value = people.phone;
  elements.status.value = people.status;
}

function getFormInput() {
  return new FormData(elements.form);
}

export { elements, renderPeople, getFormInput };
