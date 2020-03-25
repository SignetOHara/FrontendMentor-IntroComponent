// const form = document.querySelector(".form");
// const formInputSection = document.querySelector(".form__input--section")
// const button = document.querySelector('.button');

// const errorFirstName = document.getElementById("form--errormsg__firstName")

// form.addEventListener('submit', (e) => {
  
//   if (firstName.value.trim() === '' || firstName.value == null) {
//     e.preventDefault()
//     firstName.appendChild
//     errorFirstName.innerHTML = 'First Name cannot be empty';
//   }
  
// })

// function validateEmail(email) {
//   let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return valid.test(String(email).toLowerCase());
// }

const emailInput = document.getElementById('email');
const button = document.querySelector('.button');
const regEx = /\S+@\S+\.\S+/;

function validate(e) {
  e.preventDefault();
	if (regEx.test(emailInput.value)) {
		console.log('Email valid');
	} else {
    emailInput.style.background = "url(images/icon-error.svg) no-repeat 90%"
		emailInput.style.border = "medium solid hsl(0, 100%, 74%)";
	}
}

button.addEventListener('click', validate);