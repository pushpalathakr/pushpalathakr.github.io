// Mini profile + big profile behavior
const mini = document.getElementById("miniProfile");
const big = document.getElementById("profilePic");
const homeSection = document.getElementById("home");
const sections = document.querySelectorAll("section");

// Show mini photo when scrolled below home, hide big photo
function handleScroll() {
  if (homeSection && mini && big) {
    const homeHeight = homeSection.offsetHeight;

    if (window.scrollY > homeHeight - 100) {
      mini.style.display = "block";
      big.classList.add("hide-big");
    } else {
      mini.style.display = "none";
      big.classList.remove("hide-big");
    }
  }

  // Reveal sections on scroll
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 120) {
      sec.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
// ABOUT TABS FUNCTION
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

  event.target.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}
function showSection(id) {
  const active = document.querySelector(".section.active");
  const next = document.getElementById(id);

  // If already on same section, do nothing
  if (active === next) return;

  // Fade out current
  if (active) {
    active.classList.remove("active");
  }

  // Small delay for smoother switch
  setTimeout(() => {
    next.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 120);
}
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}
showSection("home");
