//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = $(".mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000);
}


//full page tabs
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = $(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = $(".tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
$("#defaultOpen").click();


//Bible verse API
function dailyBibleVerse() {
  $('#dailyBibleVerse').onClick(window.open('https://www.christianity.com/bible/daily-bible-verse/'));
  return;
}
function christianityDotCom() {
  $('#ChristianityDotCom').onClick(window.open('https://www.christianity.com/bible/'));
  return;
}

