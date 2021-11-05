const categoriesElem = document.querySelectorAll("ul#categories .item");
const categoriesQuantity = `Number of categories: ${categoriesElem.length}`
console.log(categoriesQuantity);


const itemQuantity = [];
categoriesElem.forEach(el => {
    itemQuantity.push({Category:  el.querySelector('h2').textContent, Elements: el.querySelectorAll('ul>li').length});
    
})
console.log(itemQuantity);
