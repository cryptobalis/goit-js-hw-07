import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector('.gallery');

(function (){
    const markup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
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


    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
 });

}