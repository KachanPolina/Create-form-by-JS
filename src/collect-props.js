'use strict';

const buttonCreateAccount = document.querySelector('.button-container > button');

class Person {
	constructor() {
        const inputs = document.querySelectorAll('.input-to-enter');
        inputs.forEach((input) => {
            if(input.name === 'password' || input.name === 'password-confirm') return;
            this[input.name] = input.value;
        })
	}
}

function collectProps() {
	const person = new Person();
	localStorage.setItem(person['last-name'], JSON.stringify(person));
}

buttonCreateAccount.addEventListener('click', collectProps);
