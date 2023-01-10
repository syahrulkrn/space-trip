const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('header nav ul');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
