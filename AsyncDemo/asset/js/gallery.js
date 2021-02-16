
let carouselBtns = document.querySelector('.carouselBtns');
let carousel = document.querySelector('.carousel-inner');

let id = Math.floor(Math.random() * 1000);
let fetchImage = function () {

    const div = document.createElement('div');

    div.className = 'carousel-item';

    div.innerHTML = `<img src=https://picsum.photos/id/${id}/200/300 class="d-block w-100 h-50" alt="..."></img>`;

    carousel.appendChild(div);
    id += 1;


}

carouselBtns.addEventListener('click', fetchImage);