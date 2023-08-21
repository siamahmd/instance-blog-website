// Initialize Swiper

var swiperOne = new Swiper(".SwiperSlideLeft", {
    slidesPerView: 1,
    spaceBetween: 2,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      loop: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
         
        },
        768: {
          slidesPerView: 3,
         
        },
        1024: {
          slidesPerView: 4,
         
        },
      }
  });


  var swiperTwo = new Swiper(".SwiperSlideRight", {
    slidesPerView: 1,
    spaceBetween: 2,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
         
        },
        768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
         
        },
      }
  });




// Tab Buttons

var tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex) {
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  
}
