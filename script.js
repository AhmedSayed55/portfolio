let btn = document.querySelector(".up-button");

window.onscroll = function (){
    if(window.scrollY >= 200){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
}

btn.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

document.addEventListener("DOMContentLoaded", function() {
    const skillsSlides = document.querySelectorAll(".skills-slide");
    let skillsCurrentSlide = 9;
      
    function skillsShowSlide() {
      skillsSlides[skillsCurrentSlide].classList.remove("active");
      skillsCurrentSlide = (skillsCurrentSlide + 1) % skillsSlides.length;
      skillsSlides[skillsCurrentSlide].classList.add("active");
    }
      
setInterval(skillsShowSlide, 2000);});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




    