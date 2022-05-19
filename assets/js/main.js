
$(document).ready(function () {
  $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+1M +10D" });


})


const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:{

    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });