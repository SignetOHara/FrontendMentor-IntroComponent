const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	validateInputs();
});

function validateInputs() {
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const button = document.querySelector('.button');
	const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (firstNameValue === '') {
		setErrorFor(firstName, 'First Name cannot be empty');
	} else {
		setSuccessFor(firstName);
	}

	if (lastNameValue === '') {
		setErrorFor(lastName, 'Last Name cannot be empty');
	} else {
		setSuccessFor(lastName);
	}

	if (regEx.test(emailValue)) {
		setSuccessFor(email);
	} else {
		setErrorFor(email, 'Looks like this is not an email');
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}

	if (firstName.classList.contains('success') && lastName.classList.contains('success') && email.classList.contains('success') && password.classList.contains('success')) {
		button.innerText = "You are registered!";
		button.disabled = 'true';
		button.style.background = 'hsl(154, 77%, 63%)';
		button.style.cursor = 'inherit';
	}
}

function setErrorFor(input, message) {
	let targetInput = input;
	const errorMsg = targetInput.nextElementSibling;

	input.placeholder = '';
	errorMsg.innerText = message;
	targetInput = input.classList.add('invalid');
	errorMsg.style.display = 'block';
}

function setSuccessFor(input) {
	let targetInput = input;
	const errorMsg = targetInput.nextElementSibling;

	targetInput = input.classList.add('success');
	targetInput = input.classList.remove('invalid');
	errorMsg.style.display = 'none';
}
