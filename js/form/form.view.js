import putItem from "./form.test-data.js";


const elForm = {
  form: document.getElementById("form"),
  name: document.getElementById("name"),
  phone: document.getElementById("phone"),
  email: document.getElementById("email"),
  product: document.getElementById("product"),
};

// const data = {
//     name: elForm.name.value = putItem().name,
//     phone: elForm.phone.value = putItem().phone,
//     email: elForm.email.value = putItem().email,
//     product: elForm.product.value = putItem().product,
// }

function newData(putItem) {
  const newdata = {
    name: elForm.name.value = putItem.name,
    phone: elForm.phone.value = putItem.phone,
    email: elForm.email.value = putItem.email,
    product: elForm.product.value = putItem.product,
    status: putItem.status,
  };

  return newdata;
}

newData(putItem());

export {
  elForm,
  // data,
  newData,
};
