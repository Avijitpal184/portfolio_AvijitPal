/*=============== SWIPER JS GALLERY ===============*/
var swiper = new Swiper(".gallery-thumbs", {
    loop: false,
    loopedSlides: 5,
    spaceBetween: 2,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    slideToClickedSlide: true,
  });
  
  var swiper2 = new Swiper(".gallery-cards", {
    loop: false,
    loopedSlides: 5,
    spaceBetween: 10,
    mousewheel: true,
    keyboard: true,

    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
  });

  swiper2.controller.control = swiper;

/* ================ SHOW MENU ==============*/
function showMenu() {
  var navMenu = document.getElementById('nav-menu');

  // Add 'show-menu' class when click the toggle button
  navMenu.classList.add('show-menu');
}

/* ================ HIDE MENU ==============*/
function hideMenu() {
  var navMenu = document.getElementById('nav-menu');

  // Remove 'show-menu' class when click the close button
  navMenu.classList.remove('show-menu');
}


/* ================ WHEN CLICKING ON ANY MENU LINK, THE MENU IS HIDDEN ==============*/
function linkAction() {
  var navMenu = document.getElementById('nav-menu');

  // when we click on eace nav__link, we remove the 'show-mwnu' class
  navMenu.classList.remove('show-menu');
}

// event listener for each nav__link
var navLinks = document.querySelectorAll('.nav__link');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', linkAction);
}


/* ========================= CHANGE BACKGROUND HEADER ====================== */

const scrollHeader = () =>{
  const header = document.getElementById('header');
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

/* ========================= LIGHT AND DARK THEME TOGGLE ======================= */

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';


// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
};

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});






















