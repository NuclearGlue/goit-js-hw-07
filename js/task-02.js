const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingrList = document.querySelector('#ingredients');

ingredients.forEach(el => {
 const ingrLine =  document.createElement('li');
  ingrLine.textContent = el;
   ingrList.append(ingrLine);
})
