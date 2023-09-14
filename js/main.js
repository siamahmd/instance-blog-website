const sideNav = document.getElementById('side-nav');
const menuIcon = document.getElementById('menu-icon');

// Initialize Swiper

var swiperOne = new Swiper('.SwiperSlideLeft', {
  slidesPerView: 1,
  spaceBetween: 2,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  loop: true,
  autoplay: {
    delay: 1000,
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
  },
});

var swiperTwo = new Swiper('.SwiperSlideRight', {
  slidesPerView: 1,
  spaceBetween: 2,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  loop: true,
  autoplay: {
    delay: 1000,
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
  },
});

// Tab Buttons

var tabButtons = document.querySelectorAll(
  '.tabContainer .buttonContainer button'
);
var tabPanels = document.querySelectorAll('.tabContainer  .tabPanel');

function showPanel(panelIndex) {
  tabPanels.forEach(function (node) {
    node.style.opacity = 0;
    node.style.display = 'none';
  });
  tabPanels[panelIndex].style.display = 'block';
  tabPanels[panelIndex].style.opacity = 1;
}
showPanel(3);
// Side Nav Options

function openNav() {
  sideNav.style.width = '350px';
}

function closeNav() {
  sideNav.style.width = '0';
}

menuIcon.addEventListener('click', openNav);
document.getElementById('close-nav').addEventListener('click', closeNav);
