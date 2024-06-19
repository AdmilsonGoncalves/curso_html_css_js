let mainMenu = document.querySelector(' .main-menu');
let menuIcon = document.querySelector('.menu-icon');
let closeIcon = document.querySelector('.close-icon');

function openMenu() {
  mainMenu.classList.add('open');
}

function closeMenu() {
  mainMenu.classList.remove('open');
}

menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);


function checkScreenWidth() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    mainMenu.classList.remove('open');
  }
}

// Add an event listener to check the screen width on resize
window.addEventListener('resize', checkScreenWidth);

// Run the function on initial load
checkScreenWidth();


