// ── Load profile image ──
const profileImg = document.getElementById("profile-img");
const fallback = document.getElementById("photo-fallback");

const imageOptions = [
  "assets/images/profile.jpg",
  "assets/images/profile.jpeg",
  "assets/images/profile.png",
  "assets/images/profile.webp",
  "assets/images/Profile.jpg",
  "assets/images/Profile.jpeg",
  "assets/images/Profile.png",
];

function tryLoadImage(index) {
  if (index >= imageOptions.length) {
    fallback.style.display = "flex";
    profileImg.style.display = "none";
    return;
  }
  const testImg = new Image();
  testImg.onload = () => {
    profileImg.src = imageOptions[index];
    profileImg.style.display = "block";
    fallback.style.display = "none";
  };
  testImg.onerror = () => tryLoadImage(index + 1);
  testImg.src = imageOptions[index];
}

tryLoadImage(0);

// ── Mobile menu toggle ──
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ── Close mobile menu on link click ──
document.querySelectorAll(".nav2-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
