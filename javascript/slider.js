const swiper = new Swiper('.swiper', {
    // Optional parameters
   slidesPerView: 2,
   spaceBetween: 20,
   loop: true,
   slidesPerGroup: 1,
   grabCursor: true,
   keyboard: {
     enabled: true,
   },
   autoplay: {
     delay: 3000, // Waktu jeda antar slide (dalam milidetik, 3000 = 3 detik)
     disableOnInteraction: false, // Tetap autoplay meskipun pengguna berinteraksi
   },
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
     
      },
    breakpoints: {
        // Ketika layar lebih besar dari 768px
        768: {
          slidesPerView: 3, // Tampilkan 5 slide
        },
        // Ketika layar lebih besar dari 1024px
        1024: {
          slidesPerView: 4, // Tetap tampilkan 5 slide
          spaceBetween: 30, // Jarak antar slide lebih lebar
        },
    }
  });
