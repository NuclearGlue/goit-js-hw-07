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
    const imageUrl = event.target.dataset.source;
const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)
  
    lightbox.classList.add('is-open');
    lightboxImage.src = imageUrl;
    lightboxImage.alt = event.target.alt;
     
window.addEventListener('keydown', keyPress);
}

closeButton.addEventListener('click', modalClose);

function modalClose(event) {
    lightbox.classList.remove('is-open');

    lightboxImage.src = '';
    lightboxImage.alt = '';

    window.removeEventListener('keydown', keyPress);
}

overlayBox.addEventListener('click', modalClose);






