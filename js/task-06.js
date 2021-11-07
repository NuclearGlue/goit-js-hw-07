const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', fieldValidation)

function fieldValidation (event){
    if (inputField.value.length == inputField.dataset.length) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    }
    else {
 inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
}