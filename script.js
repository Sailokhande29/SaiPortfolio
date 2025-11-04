// Typed.js
var type = new Typed('.typing-text', {
  strings: ['Student','Maker', 'Innovator','Programmer','Designer','Thinker'],
  typeSpeed: 120,
  loop: true
});

// Menu and scroll
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
    } else {
      $('.top').hide();
    }
  });

  // Smooth scroll
  $('a[href*="#"]').on('click',function(e){
    const anchor = $(this).attr('href');
    if(anchor.length > 1 && anchor.startsWith('#')) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop : $(anchor).offset().top,
      }, 1000, 'linear');
    }
  });
});

AOS.init({
  duration: 1000,
  once: true,
});

// Reveal effect
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
window.addEventListener("scroll", reveal);
reveal();

// Carousel Logic
function moveSlide(trackId, step) {
  const track = document.getElementById(trackId);
  const totalItems = track.children.length;
  let index = parseInt(track.getAttribute('data-index')) || 0;

  index += step;
  if (index < 0) index = totalItems - 1;
  if (index >= totalItems) index = 0;

  track.style.transform = `translateX(-${index * 100}%)`;
  track.setAttribute('data-index', index);
}

// Auto-scroll carousels
setInterval(() => moveSlide('cert-track', 1), 4000);
setInterval(() => moveSlide('machine-track', 1), 5000);
setInterval(() => moveSlide('projects-track', 1), 4200);

// EmailJS sendMail function
function sendMail() {
    (function () {
        emailjs.init("ZMftIU4zwjSjXXAff");
    })();
    var params = {
        sendername: document.querySelector("#sendername").value,
        phone: document.querySelector("#phone").value,
        subject: document.querySelector("#subject").value,
        replyto: document.querySelector("#reply_to").value,
        message: document.querySelector("#message").value,
    };
    var serviceID = "service_n2qdpdd";
    var templateID = "template_mos01mx";
    emailjs.send(serviceID, templateID, params)
        .then(res =>{
            alert("Email Sent Successfully!");
        })
        .catch(()=>{ alert("Error!"); });
}
