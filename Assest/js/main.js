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


/* ========================= PROJECT POPUP SHOW AND HIDE =====================*/

document.addEventListener('DOMContentLoaded', function() {
  const projectData = document.querySelectorAll('.projects__data');
  const overlaySwipers = document.querySelectorAll('.overlay__swiper');
  const overlayBlur = document.getElementById('overlay__blur'); // Added overlayBlur reference
  const closeBtns = document.querySelectorAll('#popup__close-btn');

  // Function to toggle the visibility of the overlay swiper
  function toggleOverlaySwiper(overlay) {
      overlaySwipers[overlay].classList.toggle('active');
      overlayBlur.classList.toggle('active'); // Toggle background blur
  }

  // Add event listeners to project data elements
  for (let i = 0; i < projectData.length; i++) {
      projectData[i].addEventListener('click', function() {
          toggleOverlaySwiper(i);
      });
  }

  // Add event listeners to close buttons
  for (let i = 0; i < closeBtns.length; i++) {
      closeBtns[i].addEventListener('click', function() {
          toggleOverlaySwiper(i);
      });
  }

  overlayBlur.addEventListener('click', function() {
    // Loop through overlaySwipers to find the active one and close it
    for (let i = 0; i < overlaySwipers.length; i++) {
        if (overlaySwipers[i].classList.contains('active')) {
            toggleOverlaySwiper(i);
            break; // Exit loop once the active overlay swiper is found and closed
        }
    }
});
});
  
/* ============== SWIPER SLIDE JS =============== */
let swiperProject = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    effect: 'fade',

    mousewheel: true,
    keyboard: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

/* ========================= SCROLL SECTION ACTIVE LINKS ======================= */

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);


/* ========================= SCROLL SECTION ACTIVE LINKS ======================= */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);


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


/* ========================= CHANGE BACKGROUND HEADER ====================== */

const scrollHeader = () =>{
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);


/* ========================= SCROLL TO REVEAL ====================== */   

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: false /* Animation repeat */
});

sr.reveal(`.home__data, .footer__container`);
sr.reveal(`.home__info div`, {delay: 100,origin: 'bottom',interval: 100});
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'});
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'});
sr.reveal(`.qualification__content, .services__card`, {interval: 100});
sr.reveal(`.projects__data`, {distance: '100px', origin: 'bottom',interval: 100});

const gsr = ScrollReveal({
    origin: 'left',
    distance: '500px',
    duration: 3000,
    delay: 600,
    reset: true
});

gsr.reveal(`.mygallery`);

// PROGRESS BAR ANIMATION ON SCROLL
gsap.from(".language__main-contain .lan", {
    scrollTrigger: ".language__main-contain",
    width: "0px",
    ease: Power2.easeInOut,
    duration: 1.8,
    stagger: 0.1
});













