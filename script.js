// ===== FORCE DARK MODE =====
const htmlElement = document.documentElement;
htmlElement.classList.add("dark-mode");

// If theme toggle exists, disable it visually
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.style.pointerEvents = "none";
  themeToggle.style.opacity = "0.4";
}

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ===== CURSOR GLOW =====
const cursorGlow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX - 25 + "px";
  cursorGlow.style.top = e.clientY - 25 + "px";
  cursorGlow.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursorGlow.style.opacity = "0";
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(
  ".about-text, .stat-card, .skill-card, .project-card, .contact-link"
);

revealElements.forEach((el) => el.classList.add("reveal"));

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const visibleOffset = 150;
    if (elementTop < window.innerHeight - visibleOffset) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== PARALLAX SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".blob-1, .blob-2, .blob-3");

  parallaxElements.forEach((el, index) => {
    const speed = 0.5 + index * 0.1;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===== MAGNETIC BUTTON =====
const ctaButton = document.querySelector(".cta-button");
if (ctaButton) {
  ctaButton.addEventListener("mousemove", (e) => {
    const rect = ctaButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.3;
    const moveY = (y - rect.height / 2) * 0.3;

    ctaButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  ctaButton.addEventListener("mouseleave", () => {
    ctaButton.style.transform = "translate(0, 0)";
  });
}

// ===== CARD PARALLAX HOVER =====
document.querySelectorAll(".skill-card, .project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 10;
    const rotateY = (rect.width / 2 - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });
});

// ===== NAVBAR SHADOW =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.style.boxShadow =
    window.pageYOffset > 50
      ? "0 10px 30px rgba(0, 0, 0, 0.1)"
      : "none";
});

console.log("[v1] Dark mode locked. UI animations loaded.");
