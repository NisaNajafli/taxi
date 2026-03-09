let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {

  slides.forEach(slide => slide.classList.remove("active"));

  slides[index].classList.add("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

}, 30000000);

// Компактный header при скролле
const header = document.querySelector("header");
const scrollThreshold = 80;

function updateHeaderScroll() {
  if (window.scrollY > scrollThreshold) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
}

window.addEventListener("scroll", updateHeaderScroll, { passive: true });
updateHeaderScroll();

// Год в футере
const yearEl = document.getElementById("footer-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Модальное окно заявки по клику на кнопки в слайдере
const applyModal = document.querySelector(".apply-modal");
const applyModalClose = document.querySelector(".apply-modal-close");
const applyModalOverlay = document.querySelector(".apply-modal-overlay");

document.querySelectorAll(".hero-slider .btn").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (applyModal) applyModal.classList.add("active");
  });
});

document.querySelectorAll(".advantages .btn").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (applyModal) applyModal.classList.add("active");
  });
});

document.querySelectorAll(".topbar .arrow-btn").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (applyModal) applyModal.classList.add("active");
  });
});

if (applyModalClose) {
  applyModalClose.addEventListener("click", function () {
    if (applyModal) applyModal.classList.remove("active");
  });
}
if (applyModalOverlay) {
  applyModalOverlay.addEventListener("click", function () {
    if (applyModal) applyModal.classList.remove("active");
  });
}

// FAQ аккордеон
document.querySelectorAll(".faq-question").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var item = this.closest(".faq-item");
    var wasActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach(function (i) { i.classList.remove("active"); });
    if (!wasActive) item.classList.add("active");
  });
});

new Swiper(".reviews-slider", {

slidesPerView:1.2,
spaceBetween:30,

loop:true,

breakpoints:{

768:{
slidesPerView:1.4
},

1024:{
slidesPerView:1.2
}

}

});

const modal = document.querySelector(".review-modal")
const modalBody = document.querySelector(".review-modal-body")
const closeBtn = document.querySelector(".review-close")

document.querySelectorAll(".review-card").forEach(card=>{

card.addEventListener("click",()=>{

modalBody.innerHTML = card.innerHTML

modal.classList.add("active")

})

})

closeBtn.onclick = ()=>{
modal.classList.remove("active")
}

modal.onclick = (e)=>{
if(e.target === modal){
modal.classList.remove("active")
}
}
document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const closeBtn = document.querySelector(".mobile-close");

  if (!burger) return;

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

});