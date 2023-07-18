//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = $(".mySlides");
  let dots = $(".dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000);
}

//dropdown button//
function dropDownMenuBtn () {
  $('#aboutUsDropBtn').classList.toggle('show');
}

window.onclick = function(event) {
  var dropdowns = $('.dropdown-content');
  var i; 
  for (i = 0; i < dropdowns.length; i++) {
    var openDropMenu = dropdowns[i];
    if (openDropMenu.classList.contains('show')) {
      openDropMenu.classlist.remove('show');
    }
  }
}