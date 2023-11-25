import * as model from "../model.js";
import * as view from "./edit.view.js";

function init() {
  const id = getPeopleId();
  const peopleRequest = model.getPeopleById(id);
  view.renderPeople(peopleRequest);
  setupEventListener();
}

function setupEventListener() {
  view.elements.form.addEventListener("submit", formSubmitHandler);
}

function getPeopleId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function formSubmitHandler(e) {
  e.preventDefault();
  const formData = view.getFormInput();
  model.updateRequest(formData);
  window.location = './table.html';
}

init();
