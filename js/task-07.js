const textField = document.querySelector('#text');

const textSize = document.querySelector('#font-size-control');
console.log(textSize);

textSize.addEventListener('input', setTextSize);

function setTextSize() {
   textField.style.fontSize = `${textSize.value}px` 
}