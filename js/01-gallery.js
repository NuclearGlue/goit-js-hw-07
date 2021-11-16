import { galleryItems } from './gallery-items.js';
// Change code below this line

 
const imagesList = document.querySelector('.gallery');

const addImages = galleryItems.map((picture) =>
  `<div class="gallery__item"><a
    class="gallery__link"
    href="${picture.original}"
  ><img  class="gallery__image" src='${picture.preview}' alt='${picture.description}' data-source = '${picture.original}'> </a>
  </div>`);
imagesList.insertAdjacentHTML("beforeend", addImages.join(''));


imagesList.addEventListener('click', bigPicture);

function bigPicture(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
   
const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}">
`)
    instance.show();

 window.addEventListener('keydown', keyPress);

    function keyPress(event) {
    if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', keyPress);
    }
    }
    
}








