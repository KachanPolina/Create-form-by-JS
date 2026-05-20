'use strict';

class Person {
	constructor(firstName, lastName, displayName, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.displayName = displayName;
		this.email = email;
	}
}

const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const displayNameInput = document.querySelector('#display-name');
const emailnput = document.querySelector('#email');
const buttonCreateAccount = document.querySelector('.button-container > button');

function collectProps() {
	const person = new Person(
		firstNameInput.value,
		lastNameInput.value,
		displayNameInput.value,
		emailnput.value,
	);
    localStorage.setItem(`${person.lastName}`, JSON.stringify(person));
}

buttonCreateAccount.addEventListener('click', collectProps);
