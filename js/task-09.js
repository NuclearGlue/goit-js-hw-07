function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorNumber = document.querySelector('.color');
const colorChangeButton = document.querySelector('.change-color');
const docBody = document.querySelector('body');
colorChangeButton.addEventListener('click', bodyColorChange);

function bodyColorChange(event) {
console.log(getRandomHexColor());
 colorNumber.textContent = `- ${getRandomHexColor()}`;

  docBody.style.backgroundColor = getRandomHexColor();
  
  
}