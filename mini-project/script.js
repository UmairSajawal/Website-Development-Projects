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
    strings: ['Web Developer', 'CCTV Installer', 'Software Engineer'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const successMsg = document.getElementById("success-msg");

    // Immediately hide button and show success message
    submitBtn.style.display = "none";
    successMsg.style.display = "block";

    emailjs.sendForm(
        "service_qr8ccpw",
        "template_rv039vt",
        this
    ).then(() => {
        // email sent successfully, nothing else needed
    }, (error) => {
        // if email fails, show alert
        alert("Message failed to send. Please try again.");
        console.log(error);

        // revert button and hide success message
        submitBtn.style.display = "block";
        successMsg.style.display = "none";
    });

    // Reset the form instantly
    this.reset();
});








