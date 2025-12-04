
// Mini profile + big profile behavior
const mini = document.getElementById("miniProfile");
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
// ABOUT TABS FIXED
function showTab(tabId, el) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

  el.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// FINAL SECTION SWITCH FUNCTION (ONLY ONE)
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// Default load
showSection("home");
