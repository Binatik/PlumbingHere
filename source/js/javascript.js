 //Слайдер sckick.   Обертка  jq  только для него. 
 $(document).ready(function () {
     $('.slider-banner').slick({
         dots: false,
         arrows: false,
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
     });

     $('.slider-p').slick({
         dots: false,
         arrows: false,
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 2,

         responsive: [{
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                 }
             },

             {
                 breakpoint: 900,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
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

 const offLoader = document.querySelector('.offloader');
 window.addEventListener("load", function () {
     offLoader.classList.add('loader');
     /* ===========================================================================================================================*/
     //Мобильное меню
     const modalWindow = document.querySelector('.modal-window');
     const telBtn = document.querySelector('.tel__btn');
     const modalClose = document.querySelector('.modal__close');
     const body = document.querySelector('body');

     telBtn.addEventListener("click", function () {
         modalWindow.classList.toggle('hidden-modal');
         modalClose.classList.toggle('close');
         body.classList.toggle('lock');
     });

     modalClose.addEventListener("click", function () {
         modalWindow.classList.toggle('hidden-modal');
         modalClose.classList.toggle('close');
         body.classList.toggle('lock');
     });




     const proposalRating = document.querySelectorAll('.proposal__rating');
     proposalRating.forEach(function (list) {
         const proposalSvg = list.querySelectorAll('.proposal__svg');
         proposalSvg.forEach(function (item, i) {
             item.addEventListener("click", function () {
                 for (var j = 0; j < proposalSvg.length; j++)
                     if (j <= i) proposalSvg[j].classList.add("proposal__svg_active");
                     else proposalSvg[j].classList.remove("proposal__svg_active");
             });
         });
     });

     /*
     const proposalContainerSvg = document.querySelectorAll('.proposal__container-svg');
     proposalContainerSvg.forEach(function (list) { 
         const proposalSvgLike = list.querySelectorAll('.proposal__svg-like'); 
         proposalSvgLike.forEach(function (item) {
             item.addEventListener("click", function () {
                 item.classList.toggle('proposal__svg-like_acive');
             });
         });
     });      
     */

     const proposalSvgLike = document.querySelectorAll('.proposal__svg-like');
     proposalSvgLike.forEach(function (item) {
         item.addEventListener("click", function () {
             item.classList.toggle('proposal__svg-like_acive');
         });
     });


     const bottomLink = document.querySelector('.bottom-link');
     window.addEventListener('scroll', function () {
         if (window.pageYOffset >= 1800) {
             bottomLink.classList.add('bottom-link_visible'); 
             bottomLink.style.transform = "rotate(-90deg)";
         } 
         
         else {
             bottomLink.classList.remove('bottom-link_visible'); 
             bottomLink.style.transform = "rotate(90deg)";
         }
     });
 });