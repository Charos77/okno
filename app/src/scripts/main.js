const swiper = new Swiper('.complex', {
  loop: true,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.complex__pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.complex__btn-next',
    prevEl: '.complex__btn-prev',
  },
});

const swiper2 = new Swiper('.complex2', {
  loop: true,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.complex__pagination2',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.complex__btn-next2',
    prevEl: '.complex__btn-prev2',
  },
});

const swiper3 = new Swiper('.complex3', {
  loop: true,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.complex__pagination3',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.complex__btn-next3',
    prevEl: '.complex__btn-prev3',
  },
});

let dots = document.querySelectorAll(".complex__pagination .swiper-pagination-bullet")
let dots2 = document.querySelectorAll(".complex__pagination2 .swiper-pagination-bullet")
let dots3 = document.querySelectorAll(".complex__pagination3 .swiper-pagination-bullet")

let procents = ["ПОДАРОК", "-10%", "-20%", "-30%", "-40%", "-50%"]

for (let i = 0; i < procents.length; i++) {
  dots[i].innerHTML = procents[i]
  dots2[i].innerHTML = procents[i]
  dots3[i].innerHTML = procents[i]
}