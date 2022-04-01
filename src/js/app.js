const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
