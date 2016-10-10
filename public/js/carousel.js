var homepageCarousel = new Swiper('.homepage-carousel', {
  pagination: '.swiper-pagination',
  // nextButton: '.swiper-button-next',
  // prevButton: '.swiper-button-prev',
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 0,
  loop: true
});

var partnersCarousel = new Swiper('.partners-carousel', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});
