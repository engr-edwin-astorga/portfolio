// ── Dynamic footer year ──
document.querySelectorAll(".footer-year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ── Image loader utility ──
function tryLoad(imgEl, fallbackEl, options, index) {
  if (!imgEl) return;
  if (index >= options.length) {
    if (fallbackEl) {
      fallbackEl.style.display = "flex";
      imgEl.style.display = "none";
    }
    return;
  }
  const t = new Image();
  t.onload = () => {
    imgEl.src = options[index];
    imgEl.style.display = "block";
    if (fallbackEl) fallbackEl.style.display = "none";
  };
  t.onerror = () => tryLoad(imgEl, fallbackEl, options, index + 1);
  t.src = options[index];
}

// ── Profile photo ──
const profileOptions = [
  "assets/images/profile.jpg",
  "assets/images/profile.jpeg",
  "assets/images/profile.png",
  "assets/images/profile.webp",
  "assets/images/Profile.jpg",
  "assets/images/Profile.jpeg",
  "assets/images/Profile.png",
];
tryLoad(
  document.getElementById("profile-img"),
  document.getElementById("photo-fallback"),
  profileOptions,
  0,
);

// ── Expertise — Image 1 ──
const expertiseImg1Options = [
  "assets/images/expertiseimg.jpg",
  "assets/images/expertiseimg.jpeg",
  "assets/images/expertise-bg-photo.jpg",
];
tryLoad(
  document.getElementById("expertise-img-1"),
  null,
  expertiseImg1Options,
  0,
);

// ── Expertise — Image 2 ──
const expertiseImg2Options = [
  "assets/images/expertiseimg2.jpg",
  "assets/images/expertiseimg2.jpeg",
  "assets/images/expertise-bg-photo2.jpg",
];
tryLoad(
  document.getElementById("expertise-img-2"),
  null,
  expertiseImg2Options,
  0,
);

// ── Affiliations — Image 1 ──
const affiliationsImg1Options = [
  "assets/images/aff1.png",
  "assets/images/affiliations-bg-photo.jpeg",
  "assets/images/affiliations-bg-photo.png",
];
tryLoad(
  document.getElementById("affiliations-img-1"),
  null,
  affiliationsImg1Options,
  0,
);

// ── Affiliations — Image 2 ──
const affiliationsImg2Options = [
  "assets/images/affiliations-bg-photo.jpg",
  "assets/images/affiliations-bg-photo2.jpeg",
  "assets/images/affiliations2.jpg",
];
tryLoad(
  document.getElementById("affiliations-img-2"),
  null,
  affiliationsImg2Options,
  0,
);

// ── Mobile menu toggle ──
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

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
