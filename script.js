// ================================
// ANIMASI SCROLL (Fade Up)
// ================================
const elements = document.querySelectorAll(
  ".Visi-card, .news-card, .kontak-card, .kontak-box, .kontak-form, .gallery-item"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => {
  observer.observe(el);
});


// ================================
// NAVBAR SCROLL EFFECT
// ================================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 30) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("hide");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);

  }, 1500); // 1.5 detik
});

