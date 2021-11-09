const inputForm = document.querySelector('.login-form');
const emailContent = inputForm.querySelector('input[name="email"]').textContent;
const passwordContent = inputForm.querySelector('input[name="password"]').textContent;

inputForm.addEventListener('submit', checkForm)

function checkForm(event) {
    event.preventDefault();
    const formObject = {};
    if ( emailContent === '' || passwordContent === '') {
        alert('Some fields are unfilled, please fill them and proceed')
    }
    else {
        formObject.email = `${emailContent}`;
        formObject.password = `${passwordContent}`;
        console.log(formObject);
    }
}