let mainMenu = document.querySelector(' .main-menu');

function openMenu() {
  mainMenu.classList.add('open');
}

function closeMenu() {
  mainMenu.classList.remove('open');
}

function checkScreenWidth() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    mainMenu.classList.remove('open');
  }
}

// Run the function on initial load
checkScreenWidth();

// Add an event listener to check the screen width on resize
window.addEventListener('resize', checkScreenWidth);
