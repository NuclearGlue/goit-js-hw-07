import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector('.gallery');

const addImages = galleryItems.map((picture) =>
  `<a
    class="gallery__item"
    href="${picture.original}"
  ><img  class="gallery__image" src='${picture.preview}' title='${picture.description}'> </a>
  `);
imagesList.insertAdjacentHTML("beforeend", addImages.join(''));

var lightbox = new SimpleLightbox('.gallery');

imagesList.addEventListener('click', openGaleryModal);

function openGaleryModal(event) {
    event.preventDefault();

    lightbox.options.captionsData = `${event.target.getAttribute('alt')}`;
    lightbox.options.captionType = 'text';
    lightbox.options.captionsDelay = 250;

    console.log(lightbox.options.captionsData);
}