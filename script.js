var type = new Typed('.typing-text', {
    strings: ['Student', 'Maker', 'Innovator', 'Programmer', 'Designer', 'Thinker'],
    typeSpeed: 120,
    loop: true
});

$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 1000, 'linear');
    });
});

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
        } else {
            reveals[i].classList.remove("anim");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

function sendMail() {
    (function() {
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
        .then(res => {
            alert("Email Sent Successfully!");
        })
        .catch(() => {
            alert("Error sending email!");
        });
}
