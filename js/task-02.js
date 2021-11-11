const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingrList = document.querySelector('#ingredients');

 ingredients.map((ingredient) => {
  const ingrElem = document.createElement('li');
   ingrElem.textContent = `${ingredient}`;
   ingrElem.className = 'list__item'
   ingrList.append(ingrElem);
});
 
