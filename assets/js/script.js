// Custom JavaScript for the Side Menu and Smooth Scrolling
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Main script
$(function() {
  jsonGallery('assets/data/gallery.json', 5, 2, 1);
  $("#contact-info").html('&#99;&#32;&#111;&#32;&#100;&#32;&#101;&#32;&#110;&#32;&#97;&#32;&#109;&#32;&#101;&#32;&#121;&#32;&#97;&#32;&#117;&#32;&#32;&#32;&#64;&#32;&#32;&#32;&#103;&#32;&#109;&#32;&#97;&#32;&#105;&#32;&#108;&#32;&#46;&#32;&#99;&#32;&#111;&#32;&#109;');

  // Calculate year for copyright
  var year = (new Date()).getFullYear();
  $('.years-programmed').html(year - 2009);
  $(".copyright-year").html(year);
});

// Transition
$(".tagline").hover(
  function() {
    $(this).transition({scale: 1.2});
  },
  function() {
    $(this).transition({scale: 1.0});
  }
);

$(".service-icon, .lg-icon").hover(
  function() {
    $(this).transition({rotate: '45deg'});
  },
  function() {
    $(this).transition({rotate: '0deg'});
  }
);

$(".service-icon, .lg-icon").click(function() {
  $(this).transition({rotate: '0deg'});
});

// GA Event tracking
$("#menu-toggle").click(function() {
  ga('send', 'event', 'button', 'click', 'nav menu');
});

$("#start-btn").click(function() {
  ga('send', 'event', 'button', 'click', 'start btn');
});

$("#portfolio-btn").click(function() {
  ga('send', 'event', 'button', 'click', 'portfolio btn');
});

$("#projects-btn").click(function() {
  ga('send', 'event', 'button', 'click', 'projects btn');
});

$(".projects-list a").click(function() {
  ga('send', 'event', 'button', 'click', 'project item');
});

$("#github-link").click(function() {
  ga('send', 'event', 'button', 'click', 'github link');
});

$("#bitbucket-link").click(function() {
  ga('send', 'event', 'button', 'click', 'bitbucket link');
});

$("#linkedin-link").click(function() {
  ga('send', 'event', 'button', 'click', 'linkedin link');
});
