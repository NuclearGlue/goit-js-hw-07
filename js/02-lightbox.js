import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector('.gallery');

const addImages = galleryItems.map((picture) =>
  `<li><a
    class="gallery__item"
    href="${picture.original}"
  ><img  class="gallery__image" src='${picture.preview}' alt='${picture.description}'> </a></li>
  `);
imagesList.insertAdjacentHTML("beforeend", addImages.join(''));

var lightbox = new SimpleLightbox('.gallery a', { captionsData : 'alt',
    captionType : 'attr',
    captionsDelay : 250,});

