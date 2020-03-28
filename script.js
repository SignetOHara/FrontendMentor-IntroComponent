const form = document.getElementById('form');
const button = document.querySelector('.button');
const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// validation functions
const notEmpty = { func: x => x.trim() !== '', msg: (fieldName) => `${fieldName} cannot be empty` };
const validEmail = { func: x => regEx.test(x.trim()), msg: () => `Looks like this is not an email` };

// inputs
const inputValidations = [
	new InputValidation('FirstName', document.getElementById('first-name'), [notEmpty]),
	new InputValidation('LastName', document.getElementById('last-name'), [notEmpty]),
	new InputValidation('Email', document.getElementById('email'), [validEmail]),
	new InputValidation('Password', document.getElementById('password'), [notEmpty]),
];

form.addEventListener('submit', e => {
	e.preventDefault();
	validateForm();
});



// validation funcs
function validateForm() {
	clearInputs();
	const validationResult = validateInputs();
	
	if ( validationResult ) {
		setRegistered();
	}
}

function validateInputs() {
	let validationSucces = true;

	inputValidations.forEach( ({ inputName, inputElement, validations }) => {
		validations.forEach( ({func, msg}) => {
			if(!func(inputElement.value)) {
				setErrorFor(inputElement, msg(inputName))
				validationSucces = false;
			}
		});
	});

	return validationSucces;
}

function clearInputs() {
	inputValidations.forEach( ({ inputElement }) => {
		setSuccessFor(inputElement);
	});
}



// ui funcs
function setRegistered() {
	button.innerText = "You are registered!";
	button.disabled = 'true';
	button.style.background = 'hsl(154, 77%, 63%)';
	button.style.cursor = 'inherit';
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
