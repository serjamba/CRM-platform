import * as model from '../model.js';
import * as view from './form.view.js';
import putItem from "./form.test-data.js";

view.elForm.form.addEventListener("submit", function(e) {
    e.preventDefault();
    model.addPeople(view.newData(putItem()));
    
});





