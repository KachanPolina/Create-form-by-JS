'use strict';

const formContainer = document.createElement('div');
formContainer.className = 'form-container';
document.body.append(formContainer);

const title = document.createElement('div');
title.className = 'title';
formContainer.append(title);

const titleH2 = document.createElement('h2');
titleH2.textContent = 'CREATE AN ACCOUNT';
title.append(titleH2);

const titleP = document.createElement('p');
titleP.textContent = 'We always keep your name and email adress private';
title.append(titleP);

const form = document.createElement('form');
formContainer.append(form);

// Inputs
const inputContainer = document.createElement('div');
inputContainer.className = 'input-container';
form.append(inputContainer);

const firstInputFields = document.createElement('div');
firstInputFields.className = 'input-field';
inputContainer.append(firstInputFields);

const firstInput = document.createElement('input');
firstInputFields.append(firstInput);
firstInput.setAttribute('type', 'text');
firstInput.setAttribute('name', 'first-name');
firstInput.setAttribute('id', 'first-name');
firstInput.setAttribute('placeholder', 'First name');

const secondInput = document.createElement('input');
firstInputFields.append(secondInput);
secondInput.setAttribute('type', 'text');
secondInput.setAttribute('name', 'last-name');
secondInput.setAttribute('id', 'last-name');
secondInput.setAttribute('placeholder', 'Last name');

const secondInputFields = document.createElement('div');
secondInputFields.className = 'input-field';
inputContainer.append(secondInputFields);

const thirdInput = document.createElement('input');
secondInputFields.append(thirdInput);
thirdInput.setAttribute('type', 'text');
thirdInput.setAttribute('name', 'first-name');
thirdInput.setAttribute('id', 'first-name');
thirdInput.setAttribute('placeholder', 'First name');

const fourthInput = document.createElement('input');
secondInputFields.append(fourthInput);
fourthInput.setAttribute('type', 'text');
fourthInput.setAttribute('name', 'last-name');
fourthInput.setAttribute('id', 'last-name');
fourthInput.setAttribute('placeholder', 'Last name');

const thirdInputFields = document.createElement('div');
thirdInputFields.className = 'input-field';
inputContainer.append(thirdInputFields);

const fifthInput = document.createElement('input');
thirdInputFields.append(fifthInput);
fifthInput.setAttribute('type', 'text');
fifthInput.setAttribute('name', 'first-name');
fifthInput.setAttribute('id', 'first-name');
fifthInput.setAttribute('placeholder', 'First name');

const sixthInput = document.createElement('input');
thirdInputFields.append(sixthInput);
sixthInput.setAttribute('type', 'text');
sixthInput.setAttribute('name', 'last-name');
sixthInput.setAttribute('id', 'last-name');
sixthInput.setAttribute('placeholder', 'Last name');

// Radiobutton 1
const radioContainer = document.createElement('div');
radioContainer.className = 'radio-container';
form.append(radioContainer);

const firstRadionContainer = document.createElement('div');
firstRadionContainer.className = 'radiobutton';
radioContainer.append(firstRadionContainer);

const radioButtonNameFirst = document.createElement('div');
radioButtonNameFirst.className = 'rb-name';
firstRadionContainer.append(radioButtonNameFirst);

const radioInputFirst = document.createElement('input');
radioButtonNameFirst.append(radioInputFirst);
radioInputFirst.setAttribute('type', 'radio');
radioInputFirst.setAttribute('name', 'join-as');
radioInputFirst.setAttribute('id', 'join-as-buyer');

const radioLabelFirst = document.createElement('label');
radioButtonNameFirst.append(radioLabelFirst);
radioLabelFirst.textContent = 'Join as a buyer';
radioLabelFirst.setAttribute('for', 'join-as-buyer');

const radioTextFirst = document.createElement('div');
radioTextFirst.className = 'rb-text';
firstRadionContainer.append(radioTextFirst);

const radioTextContentFirst = document.createElement('p');
radioTextContentFirst.textContent =
	'I am looking for a Name, Logo or Tagline for my business, brand or product';
radioTextFirst.append(radioTextContentFirst);

// Radio button 2
const secondRadioConteiner = document.createElement('div');
secondRadioConteiner.className = 'radiobutton';
radioContainer.append(secondRadioConteiner);

const radioButtonNameSecond = document.createElement('div');
radioButtonNameSecond.className = 'rb-name';
secondRadioConteiner.append(radioButtonNameSecond);

const radioinputSecond = document.createElement('input');
radioButtonNameSecond.append(radioinputSecond);
radioinputSecond.setAttribute('type', 'radio');
radioinputSecond.setAttribute('name', 'join-as');
radioinputSecond.setAttribute('id', 'join-as-creative');

const radioInputSecond = document.createElement('label');
radioButtonNameSecond.append(radioInputSecond);
radioInputSecond.textContent = 'Join as a creative or marketplace seller';
radioInputSecond.setAttribute('for', 'join-as-creative');

const formDivRadioTextSecond = document.createElement('div');
formDivRadioTextSecond.className = 'rb-text';
secondRadioConteiner.append(formDivRadioTextSecond);

const radioTextContentSecond = document.createElement('p');
radioTextContentSecond.textContent =
	'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace';
formDivRadioTextSecond.append(radioTextContentSecond);

// Checkbox
const checkboxContainer = document.createElement('div');
checkboxContainer.className = 'checkbox-continer';
form.append(checkboxContainer);

const checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('name', 'offers');
checkboxInput.setAttribute('id', 'offers');
checkboxContainer.append(checkboxInput);

const checkboxLabel = document.createElement('label');
checkboxLabel.textContent =
	'Allow Squadhelp to send marketing/promotional offers from time to time';
checkboxLabel.setAttribute('for', 'offers');
checkboxContainer.append(checkboxLabel);

// Button
const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
form.append(buttonContainer);

const button = document.createElement('button');
button.textContent = 'Create account';
button.setAttribute('type', 'submit');
buttonContainer.append(button);
