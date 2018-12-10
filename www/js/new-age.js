(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Change logo, and collapse the navbar when page is scrolled
  var changeOnScroll = function() {
    changeLogo();
    navbarCollapse();
  };

  // Check if element is visible, used when scrolling
  var isElementInView = function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
  }

  // Change the logo-image when scrolling over different sections
  // Sections: planet_container, download, features, timeline, faqs, vision, contact
  var changeLogo = function() {
    if (isElementInView($('#planet_container'), false)) {
      $("#logo-image").attr("src","img/logo.png");
    } else if (isElementInView($('#download'), false)) {
      $("#logo-image").attr("src","img/p1.png");
    } else if (isElementInView($('#cta'), false)) {
      $("#logo-image").attr("src","img/p2.png");
    } else if (isElementInView($('#timeline'), false)) {
      $("#logo-image").attr("src","img/p3.png");
    } else if (isElementInView($('#vision'), false)) {
      $("#logo-image").attr("src","img/p4.png");
    } else if (isElementInView($('#contact'), false)) {
      $("#logo-image").attr("src","img/p5.png");
    }
  };

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#info_container").addClass("container-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#info_container").removeClass("container-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();

  // Change things on scroll
  $(window).scroll(changeOnScroll);
  
  // Set the copyright year
  var currentYear = (new Date).getFullYear(),
  copyRight = document.getElementById("copyRightYear");
  copyRight.innerHTML=currentYear;

})(jQuery); // End of use strict
