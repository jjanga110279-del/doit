const swiper1 = new Swiper(".swiper1", {
  //객체표기법
  autoplay: {
    delay: 500,
    pauseOnMouseEnter: true,
  },
  loop: true,
  pagination: {
    el: ".swiper1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper1 .swiper-button-next",
    prevEl: ".swiper1 .swiper-button-prev",
  },
  effect: "fade",
  speed: 1200,
});
// 멀티슬라이드 swiper2
const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 500,
    pauseOnMouseEnter: true,
  },
  loop: true,
  pagination: {
    el: ".swiper2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper2 .swiper-button-next",
    prevEl: ".swiper2 .swiper-button-prev",
  },
  speed: 1200,
  slidesPerView: 3,
  spaceBetween: 10,
});

// 반응형슬라이드 swiper3
const swiper3 = new Swiper(".swiper3", {
  loop: true,
  pagination: {
    el: ".swiper3 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper3 .swiper-button-next",
    prevEl: ".swiper3 .swiper-button-prev",
  },
  speed: 1200,
  // 기본값 0~767
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
