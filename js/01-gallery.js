import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector(".gallery");
console.log(galleryDiv);

// galleryItemsHtml adding to div.gallery
const galleryItemHtml = galleryItems.map((galItem) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${galItem.original}">
    <img
      class="gallery__image"
      src="${galItem.preview}"
      data-source="${galItem.original}"
      alt="${galItem.description}"
    /></a>
</div>`).join("");

galleryDiv.insertAdjacentHTML("beforeend", galleryItemHtml);

// addEventListener on div.gallery with Delegation
const galleryItem = document.querySelector(".gallery");

galleryItem.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.className !== "gallery__image") {
        console.log(event.target.className);
        return;
    };

    let srcLink = event.target.getAttribute("data-source");
    const instance = basicLightbox.create(
        `<img src="${srcLink}" width="800" height="600">`
    );
    instance.show();

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            instance.close();
        };
    });
});

//
console.log(galleryItems);