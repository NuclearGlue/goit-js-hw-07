const textInput = document.querySelector('#name-input');
let textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', onTextInput);



function onTextInput(event) {
        textOutput.textContent = event.currentTarget.value;
    if (textOutput.textContent === '') {
        textOutput.textContent = 'Anonymous';
    }   
    
}




