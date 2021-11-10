const categoriesElem = document.querySelectorAll("ul#categories .item");
const categoriesQuantity = `Number of categories: ${categoriesElem.length}`
console.log(categoriesQuantity);


let itemQuantity = '';
categoriesElem.forEach(el => {
     itemQuantity += (`Category:  ${el.querySelector('h2').textContent}, \n Elements: ${el.querySelectorAll('ul>li').length} \n \n`);
    
})
console.log(itemQuantity);
