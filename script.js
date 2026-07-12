console.log("JS WORKING 🚀");

/* =========================
   BUTTON (Reservation)
========================= */
const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", () => {
        alert("Réservation envoyée 🍽️");
        console.log("Button clicked 🚀");
    });
}

/* =========================
   MENU MOBILE
========================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* =========================
   DARK MODE
========================= */
const darkBtn = document.querySelector(".dark-btn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        console.log("Dark mode clicked 🌙");
    });
}

console.log("JS IS CONNECTED 🚀");

/* =========================
   TYPING TEXT
========================= */
const typingText = document.querySelector(".typing-text");

if (typingText) {
    const text = "Bienvenue au Restaurant Délice 🍽️";
    let index = 0;

    function writeText() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(writeText, 80);
        }
    }

    writeText();
}

/* =========================
   SLIDER
========================= */
const images = [
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "https://images.unsplash.com/photo-1550547660-d9450f859349",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
];

const sliderImage = document.querySelector("#slider-image");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let current = 0;

function showImage(index) {
    if (!sliderImage) return;

    sliderImage.classList.add("fade");
    sliderImage.src = images[index];

    setTimeout(() => {
        sliderImage.classList.remove("fade");
    }, 500);
}

/* NEXT */
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        current++;
        if (current >= images.length) current = 0;
        showImage(current);
    });
}

/* PREV */
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        current--;
        if (current < 0) current = images.length - 1;
        showImage(current);
    });
}

/* AUTO SLIDER */
if (sliderImage) {
    setInterval(() => {
        current++;
        if (current >= images.length) current = 0;
        showImage(current);
    }, 3000);
}

const hiddenElements = document.querySelectorAll(".hidden");

function showOnScroll() {
    hiddenElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

const images = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});