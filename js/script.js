const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.querySelector('.nav-menu');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})