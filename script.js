const form = document.querySelector(".form");
const formInputSection = document.querySelector(".form__input--section")
const button = document.querySelector('.button');

const errorFirstName = document.getElementById("form--errormsg__firstName")

form.addEventListener('submit', (e) => {
  
  if (firstName.value.trim() === '' || firstName.value == null) {
    e.preventDefault()
    firstName.appendChild
    errorFirstName.innerHTML = 'First Name cannot be empty';
  }
  
})

function validateEmail(email) {
  let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return valid.test(String(email).toLowerCase());
}