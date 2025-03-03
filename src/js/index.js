import '../styles.css';

import initial from "./homePage.js";
import initialBallet from './balletPage.js';
import initialMotor from './motorPage.js';
import initialSchedule from './schedulePage.js';
import initialGallery from './galleryPage.js';
import initialContact from './contactPage.js';

function setupNavbar() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    burgerMenu.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
        } else {
            navLinks.classList.add('nav-active');
        }
    });

    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active'); 
        });
    });

    const home = document.querySelector(".logo");
    const ballet = document.querySelector(".ballet-link");
    const motor = document.querySelector(".motor-link");
    const schedule = document.querySelector(".schedule-link");
    const gallery = document.querySelector(".gallery-link");
    const contact = document.querySelector(".contact-link");

    document.querySelector(".logo")?.addEventListener('click', initial);
    document.querySelector(".ballet-link")?.addEventListener('click', initialBallet);
    document.querySelector(".motor-link")?.addEventListener('click', initialMotor);
    document.querySelector(".schedule-link")?.addEventListener('click', initialSchedule);
    document.querySelector(".gallery-link")?.addEventListener('click', initialGallery);
    document.querySelector(".contact-link")?.addEventListener('click', initialContact);

}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    setupNavbar()
    initial();

});

