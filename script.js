// Mobile menu placeholder
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "20px";
    navLinks.style.background = "#1e293b";
    navLinks.style.padding = "20px";
    navLinks.style.borderRadius = "10px";
  } else {
    navLinks.style.display = "none";
  }
});

// Smooth reveal animation
const cards = document.querySelectorAll(
  ".skill-card, .project-card"
);

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial card styles
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease";
});