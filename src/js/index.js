import '../styles.css';

function setupNavbar() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
        } else {
            navLinks.classList.add('nav-active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    setupNavbar();

    // initializeGaleria();
    // initializeBlog();
    // applyAnimations();
});

