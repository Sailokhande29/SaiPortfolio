var type = new Typed('.typing-text', {
  strings: ['Student','Maker', 'Innovator','Programmer','Designer','Thinker'],
  typeSpeed: 120,
  loop: true
});

$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }
  });
  
  //smooth scroll
  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      1000, 
      'linear'
    );

  });
});

// Instagram Carousel Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("carousel-item").length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = document.getElementsByClassName("carousel-item").length}
    showSlidesManually();
}

function showSlidesManually() {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

AOS.init({
  duration: 1000,
  once: true,
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("anim");
    }
    else {
      reveals[i].classList.remove("anim");
    }
  }
}

// Set an interval to auto-scroll every 3 seconds
setInterval(autoScroll, 3000);
window.addEventListener("scroll", reveal);
reveal();