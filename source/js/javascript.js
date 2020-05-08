 //Слайдер sckick.   Обертка  jq  только для него. 
 $(document).ready(function () {
     $('.team__slider').slick({
         dots: true,
         arrows: false,
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 3,

         responsive: [{
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                 }
             },
         ]
     });
 });
 /* ===========================================================================================================================*/
 //Мобильное меню
 const modalWindow = document.querySelector('.modal-window');
 const telBtn = document.querySelector('.tel__btn');
 const modalClose = document.querySelector('.modal__close');
 const close = document.querySelector('.close');

 telBtn.addEventListener("click", function () {
     modalWindow.classList.toggle('hidden-modal'); 
     modalClose.classList.toggle('close');
 });

 modalClose.addEventListener("click", function () {
     modalWindow.classList.toggle('hidden-modal'); 
     modalClose.classList.toggle('close');
 });