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
 /* ===========================================================================================================================*/
 //Мобильное меню
 const modalWindow = document.querySelector('.modal-window');
 const telBtn = document.querySelector('.tel__btn');
 const modalClose = document.querySelector('.modal__close');
 const close = document.querySelector('.close');
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