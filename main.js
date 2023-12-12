var swiper = new Swiper(".mySwiper", {
      direction: 'vertical',
      loop: true,
      slidesPerView: 4,
      
      
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });