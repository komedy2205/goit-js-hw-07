import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUl = document.querySelector(".gallery");


const galleryItemHtml = galleryItems.map((galItem) => 
    `<li><a class="gallery__item" href="${galItem.original}">
  <img class="gallery__image" src="${galItem.preview}" alt="${galItem.description}" />
</a></li>`).join("");

// galleryDivHtml
galleryUl.insertAdjacentHTML("beforeend", galleryItemHtml);

// Create LightBox 
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});
//

console.log(galleryItems);
