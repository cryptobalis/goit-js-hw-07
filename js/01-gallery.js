import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

(function (){
    const markup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`)
    list.insertAdjacentHTML('beforeend', markup.join(''))

})()

list.addEventListener('click', onclick);

function onclick(evt){
    evt.preventDefault();
    
    if(!evt.target.classList.contains('gallery__image')) {
        return;
    }
    
    const imgCard = evt.target.closest('.gallery__image');
    const imgUrl = imgCard.dataset.source;
    const data = galleryItems.find(({original}) => original === imgUrl);


    const instance = basicLightbox.create(`
    <img src="${data.original}" width="800" height="600">
`,
{
  onShow: () => window.addEventListener("keydown", onCloseByEsc),
  onClose: () => window.removeEventListener("keydown", onCloseByEsc),
});


const onCloseByEsc = (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
}

instance.show()

}



