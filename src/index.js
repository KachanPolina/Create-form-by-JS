'use strict';

const divFormContainer = document.createElement('div');
divFormContainer.className = 'form-container';
document.body.append(divFormContainer);

const divTitle = document.createElement('div');
divTitle.className = 'title';
divFormContainer.append(divTitle);

const titleH2 = document.createElement('h2');
titleH2.textContent = 'CREATE AN ACCOUNT';
divTitle.append(titleH2);

const titleP = document.createElement('p');
titleP.textContent = 'We always keep your name and email adress private';
divTitle.append(titleP);

const form = document.createElement('form');
divFormContainer.append(form);


const formDivInputContainer = document.createElement('div');
formDivInputContainer.className = 'input-container';
form.append(formDivInputContainer);

const formInputFieldFirst = document.createElement('div');
formInputFieldFirst.className = 'input-field';
formDivInputContainer.append(formInputFieldFirst);

const firstInput = document.createElement('input');
formInputFieldFirst.append(firstInput);
firstInput.setAttribute('type', 'text');
firstInput.setAttribute('name', 'first-name');
firstInput.setAttribute('id', 'first-name');
firstInput.setAttribute('placeholder', 'First name');

const secondInput = document.createElement('input');
formInputFieldFirst.append(secondInput);
secondInput.setAttribute('type', 'text');
secondInput.setAttribute('name', 'last-name');
secondInput.setAttribute('id', 'last-name');
secondInput.setAttribute('placeholder', 'Last name');


const formInputFieldSecond = document.createElement('div');
formInputFieldSecond.className = 'input-field';
formDivInputContainer.append(formInputFieldSecond);

const thirdInput = document.createElement('input');
formInputFieldSecond.append(thirdInput);
thirdInput.setAttribute('type', 'text');
thirdInput.setAttribute('name', 'first-name');
thirdInput.setAttribute('id', 'first-name');
thirdInput.setAttribute('placeholder', 'First name');

const fourthInput = document.createElement('input');
formInputFieldSecond.append(fourthInput);
fourthInput.setAttribute('type', 'text');
fourthInput.setAttribute('name', 'last-name');
fourthInput.setAttribute('id', 'last-name');
fourthInput.setAttribute('placeholder', 'Last name');


const formInputFieldThird = document.createElement('div');
formInputFieldThird.className = 'input-field';
formDivInputContainer.append(formInputFieldThird);

const fifthInput = document.createElement('input');
formInputFieldThird.append(fifthInput);
fifthInput.setAttribute('type', 'text');
fifthInput.setAttribute('name', 'first-name');
fifthInput.setAttribute('id', 'first-name');
fifthInput.setAttribute('placeholder', 'First name');

const sixthInput = document.createElement('input');
formInputFieldThird.append(sixthInput);
sixthInput.setAttribute('type', 'text');
sixthInput.setAttribute('name', 'last-name');
sixthInput.setAttribute('id', 'last-name');
sixthInput.setAttribute('placeholder', 'Last name');


const formDivRadioContainer = document.createElement('div');
formDivRadioContainer.className = 'radio-container';
form.append(formDivRadioContainer);


const firstRadioButtonContainer = document.createElement('div');
firstRadioButtonContainer.className = 'radiobutton';
formDivRadioContainer.append(firstRadioButtonContainer);

const radioButtonNameFirst = document.createElement('div');
radioButtonNameFirst.className = 'rb-name';
firstRadioButtonContainer.append(radioButtonNameFirst);

const radioButtonFirstInput = document.createElement('input');
radioButtonNameFirst.append(radioButtonFirstInput);
radioButtonFirstInput.setAttribute('type', 'radio');
radioButtonFirstInput.setAttribute('name', 'join-as');
radioButtonFirstInput.setAttribute('id', 'join-as-buyer');

const radioButtonFirstLabel = document.createElement('label');
radioButtonNameFirst.append(radioButtonFirstLabel);
radioButtonFirstLabel.textContent = 'Join as a buyer';
radioButtonFirstLabel.setAttribute('for', 'join-as-buyer');


const formDivRadioTextFirst = document.createElement('div');
formDivRadioTextFirst.className = 'rb-text';
firstRadioButtonContainer.append(formDivRadioTextFirst);

const formDivRadioTextContentFirst = document.createElement('p');
formDivRadioTextContentFirst.textContent = 'I am looking for a Name, Logo or Tagline for my business, brand or product';
formDivRadioTextFirst.append(formDivRadioTextContentFirst);

// Radio button 2 
const secondRadioButtonContainer = document.createElement('div');
secondRadioButtonContainer.className = 'radiobutton';
formDivRadioContainer.append(secondRadioButtonContainer);

const radioButtonNameSecond = document.createElement('div');
radioButtonNameSecond.className = 'rb-name';
secondRadioButtonContainer.append(radioButtonNameSecond);

const radioButtonSecondInput = document.createElement('input');
radioButtonNameSecond.append(radioButtonSecondInput);
radioButtonSecondInput.setAttribute('type', 'radio');
radioButtonSecondInput.setAttribute('name', 'join-as');
radioButtonSecondInput.setAttribute('id', 'join-as-creative');

const radioButtonSecondLabel = document.createElement('label');
radioButtonNameSecond.append(radioButtonSecondLabel);
radioButtonSecondLabel.textContent = 'Join as a creative or marketplace seller'; 
radioButtonSecondLabel.setAttribute('for', 'join-as-creative');


const formDivRadioTextSecond = document.createElement('div');
formDivRadioTextSecond.className = 'rb-text';
secondRadioButtonContainer.append(formDivRadioTextSecond);

const formDivRadioTextContentSecond = document.createElement('p');
formDivRadioTextContentSecond.textContent = 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace';
formDivRadioTextSecond.append(formDivRadioTextContentSecond);

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
checkboxLabel.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time'; 
checkboxLabel.setAttribute('for', 'offers');
checkboxContainer.append(checkboxLabel);

// Button 
const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
form.append(buttonContainer);

const button = document.createElement('button');
button.textContent = 'Create account'; 
checkboxLabel.setAttribute('type', 'submit');
buttonContainer.append(button);