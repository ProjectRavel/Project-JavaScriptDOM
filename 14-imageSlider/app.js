const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  changeSlider();
  console.log(slides.length)
  console.log(counter)
});

prevBtn.addEventListener("click", () => {
  counter--;
  changeSlider();
  console.log(slides.length);
  console.log(counter);
});

window.addEventListener("DOMContentLoaded", changeSlider)
function changeSlider() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  if(counter == slides.length - 1){
    nextBtn.style.display = "none"
  }if(counter < slides.length - 1 && counter > 0){
    prevBtn.style.display = "inline-block"
    nextBtn.style.display = "inline-block";
  }
    prevBtn.style.display = "none"
}
