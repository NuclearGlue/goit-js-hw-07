const value = document.querySelector('#value');
const counterValue = 0;
const increaseButton = document.querySelector('button[data-action="increment]');
const decreaseButton = document.querySelector('button[data-action="decrement]');

increaseButton.addEventListener("click", () => {
    counterValue += 1;
    value = counterValue;
});
decreaseButton.addEventListener("click", () => {
    counterValue -= 1;
    value = counterValue;
});