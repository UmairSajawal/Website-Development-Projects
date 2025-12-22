    /* =================== Toggle Icon Navbar ===================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

    /* =================== Scroll Section ===================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
    /* =================== Sticky Navbar ===================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* =================== Remove toggle icon and navbar when click navbar link (scroll) ===================== */

});

    /* =================== Scroll Reveal ===================== */

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

    /* =================== Typed JS ===================== */

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Software Engineer', 'IT And Networking'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});