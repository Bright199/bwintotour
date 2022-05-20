
$(document).ready(function () {
  $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+1M +10D" });
  $( "#hotel-arrival-date" ).datepicker({ minDate: 0, maxDate: "+1M +10D" });
  $( "#hotel-exit-date" ).datepicker({ minDate: 0, maxDate: "+1M +10D" });
  $('#header').load('../pages/header.html')
  $('#footer').load('../pages/footer.html')

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