const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
document.body.classList.add(isMobile ? "mobile" : "desktop");


const btn = document.getElementById("langBtn");
let currentLang = localStorage.getItem("lang") || "en";

/* ✅ FUNCTION TO APPLY LANGUAGE */

function applyLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  btn.textContent = lang === "en" ? "ES" : "EN";
  localStorage.setItem("lang", lang);
}

/* ✅ APPLY ON PAGE LOAD */

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
});

/* ✅ SWITCH LANGUAGE */

btn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  applyLanguage(currentLang);
});


/* CAROUSEL (unchanged) */

const track = document.getElementById("carousel");

if (track) {
  const slides = track.children;
  const prev = document.querySelector(".car-btn.prev");
  const next = document.querySelector(".car-btn.next");

  let index = 0;
  const slideWidth = () => slides[0].offsetWidth + 15;

  function updateCarousel(){
    track.style.transform = `translateX(-${index * slideWidth()}px)`;
  }

  if (next) {
    next.onclick = () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    };
  }

  if (prev) {
    prev.onclick = () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    };
  }
}
