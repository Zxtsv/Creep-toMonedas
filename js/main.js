$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('navbar-scrolled');
    }

    else {
          $('nav').removeClass('navbar-scrolled');
    }
});

ScrollReveal().reveal('.dashboard-foro', { delay: 20 });
