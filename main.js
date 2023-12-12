var swiper = new Swiper(".mySwiper", {
      direction: 'vertical',
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      
      
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });