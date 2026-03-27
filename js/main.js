// ── Dynamic footer year ──
document.getElementById("footer-year").textContent = new Date().getFullYear();

// ── Profile image loader ──
const imageOptions = [
  "assets/images/profile.jpg",
  "assets/images/profile.jpeg",
  "assets/images/profile.png",
  "assets/images/profile.webp",
  "assets/images/Profile.jpg",
  "assets/images/Profile.jpeg",
  "assets/images/Profile.png",
];

function tryLoad(imgEl, fallbackEl, options, index) {
  if (index >= options.length) {
    fallbackEl.style.display = "flex";
    imgEl.style.display = "none";
    return;
  }
  const t = new Image();
  t.onload = () => {
    imgEl.src = options[index];
    imgEl.style.display = "block";
    fallbackEl.style.display = "none";
  };
  t.onerror = () => tryLoad(imgEl, fallbackEl, options, index + 1);
  t.src = options[index];
}

// Profile photo
tryLoad(
  document.getElementById("profile-img"),
  document.getElementById("photo-fallback"),
  imageOptions,
  0,
);

// Expertise section photo
const expertiseOptions = [
  "assets/images/expertise-bg-photo.jpg",
  "assets/images/expertise-bg-photo.jpeg",
  "assets/images/expertise-bg-photo.png",
];
tryLoad(
  document.getElementById("expertise-img"),
  document.getElementById("expertise-fallback"),
  expertiseOptions,
  0,
);

// Affiliations section photo
const affiliationsOptions = [
  "assets/images/affiliations-bg-photo.jpg",
  "assets/images/affiliations-bg-photo.jpeg",
  "assets/images/affiliations-bg-photo.png",
];
tryLoad(
  document.getElementById("affiliations-img"),
  document.getElementById("affiliations-fallback"),
  affiliationsOptions,
  0,
);

// ── Mobile menu toggle ──
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// ── Scroll fade-in ──
const fadeSections = document.querySelectorAll(".fade-in-section");
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

fadeSections.forEach((s) => fadeObserver.observe(s));
