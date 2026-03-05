let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {

  slides.forEach(slide => slide.classList.remove("active"));

  slides[index].classList.add("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

}, 3000);

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