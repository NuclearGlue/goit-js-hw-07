let counterValue = 0;
let valueField = document.querySelector('#value');

const increaseButton = document.querySelector('button[data-action="increment"]');
const decreaseButton = document.querySelector('button[data-action="decrement"]');

increaseButton.addEventListener("click", () => {
    
    counterValue += 1;
     valueField.innerHTML = counterValue;
});
decreaseButton.addEventListener("click", () => {
   
    counterValue -= 1;
    valueField.innerHTML = counterValue;
});