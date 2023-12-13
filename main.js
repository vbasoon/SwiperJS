var swiper = new Swiper(".mySwiper", {
      direction: 'vertical',
      //loop: true,
      slidesPerView: 4,
      
      
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: false,
      freemode: true,
      effect: 'fade',
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      mouseWheel: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });