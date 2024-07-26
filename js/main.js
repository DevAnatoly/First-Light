// init slider of product section
const productSlider = new Swiper('.product-slider', {
    effect: "fade",
    fadeEffect: {
        crossFade: true
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //init slider of product-musthave section
const mustHaveSlider = new Swiper('.product-musthave-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 32,
      }
    }
});

//init accordeon

let questionItem = document.querySelectorAll('.faq__content-question');

questionItem.forEach(
  (item)=>{
    item.addEventListener('click', ()=>{
      item.parentNode.classList.toggle('faq__content-item--active');
    });
  }
);

//init cookies

let cookiesWindow = document.querySelector('.cookies');
let agreeButton = document.querySelector('.cookies__btn');

if (document.cookie.indexOf('acceptCookie') == -1) {
  cookiesWindow.style.display = 'block';
}


agreeButton.addEventListener('click', () => {
  setCookie('acceptCookie', 'true', 365);
  cookiesWindow.style.display = 'none';
});

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}