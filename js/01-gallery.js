import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector('.gallery');

const addImages = images.map((picture) =>
  `<li><img src='${picture.url}' alt='${picture.alt}'> </li>`);

imagesList.insertAdjacentHTML("beforeend", addImages.join(''));

console.log(galleryItems);
