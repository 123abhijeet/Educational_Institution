if ($("#hidden_script").val() != 1) {
  //Over organizations section slider
  jQuery("#organizations-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    lazyLoad: true,
    margin: 0,
    center: true,
    nav: false,
    responsiveClass: true,
    responsiveBaseElement: 'body',
    items: 5,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      767: {
        items: 3,
      },
      991: {
        items: 5,
      },
    }
  })

  // Learn at Your Ease learnEase
  jQuery("#learnEase").owlCarousel({
    loop: true,
    center: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 100,
    lazyLoad: true,
    margin: 30,
    nav: false,
    responsive: {
      320: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      }
    }
  })

  // Explore Course
  jQuery("#exploreCourse").owlCarousel({
    loop: true,
    center: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 400,
    lazyLoad: true,
    slideTransition: 'linear',
    margin: 30,
    nav: true,
    responsiveClass: true,
    autoplayHoverPause: true,
    navText: ["<div class='nav-btn prev-slide'><img alt='arrow-img' width='17' height='17' src='images/arrow-left-white.png' class='arr-left-white' /><img alt='arrow-img' width='17' height='17' src='images/arrow-left-blue.png' class='arr-left-blue' /></div>", "<div class='nav-btn next-slide'><img alt='arrow-img' width='17' height='17' src='images/arrow-right-white.png' class='arr-right-white' /><img alt='arrow-img' width='17' height='17' src='images/arrow-right-blue.png' class='arr-right-blue' /></div>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.2,
      }
    }
  })

  jQuery("#workshopevents").owlCarousel({
    loop: false,
    center: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 400,
    lazyLoad: true,
    slideTransition: 'linear',
    margin: 30,
    nav: true,
    responsiveClass: true,
    autoplayHoverPause: true,
    navText: ["<div class='nav-btn prev-slide'><img alt='arrow-img' width='17' height='17' src='images/arrow-left-white.png' class='arr-left-white' /><img alt='arrow-img' width='17' height='17' src='images/arrow-left-blue.png' class='arr-left-blue' /></div>", "<div class='nav-btn next-slide'><img alt='arrow-img' width='17' height='17' src='images/arrow-right-white.png' class='arr-right-white' /><img alt='arrow-img' width='17' height='17' src='images/arrow-right-blue.png' class='arr-right-blue' /></div>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 2,
      }
    }
  })

  // ourAlumini
  jQuery("#ourAlumini").owlCarousel({
    loop: true,
    center: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 300,
    lazyLoad: true,
    slideTransition: 'linear',
    margin: 30,
    dots: true,
    nav: false,
    responsiveClass: true,
    autoplayHoverPause: true,
    slideToScroll: 1,
    responsive: {
      320: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      }
    }
  })

  jQuery("#testimonial-review").owlCarousel({
    loop: true,
    // rewind: true,
    center: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 300,
    lazyLoad: true,
    slideTransition: 'linear',
    margin: 30,
    dots: true,
    nav: false,
    autoplayHoverPause: true,
    responsiveBaseElement: 'body',
    focusOnSelect:false,
    pauseOnFocus: false,
    responsive: {
      320: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      }
    }
  })

  // Winner Awards
  jQuery("#winnerAwards").owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 100,
    lazyLoad: true,
    margin: 30,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      }
    }
  })

  // Other relevant Course
  jQuery("#relevantCourse").owlCarousel({
    loop: true,
    center: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 400,
    lazyLoad: true,
    slideTransition: 'linear',
    margin: 30,
    nav: true,
    responsiveClass: true,
    autoplayHoverPause: true,
    navText: ["<div class='nav-btn prev-slide'><img alt='arrow-img' width='17' height='17' src='images/arrow-left-white.png' class='arr-left-white' /><img alt='arrow-img' width='17' height='17' src='images/arrow-left-blue.png' class='arr-left-blue' /></div>", "<div class='nav-btn next-slide'><img alt='arrow-img' width='17' height='17' src='images/arrow-right-white.png' class='arr-right-white' /><img alt='arrow-img' width='17' height='17' src='images/arrow-right-blue.png' class='arr-right-blue' /></div>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.2,
      }
    }
  })

  jQuery("#centerpages").owlCarousel({
    loop: true,
    center: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 400,
    lazyLoad: true,
    slideTransition: 'linear',
    margin: 30,
    nav: true,
    responsiveClass: true,
    autoplayHoverPause: true,
    navText: ["<div class='nav-btn prev-slide'><img alt='arrow-img' width='17' height='17' src='images/arrow-left-white.png' class='arr-left-white' /><img alt='arrow-img' width='17' height='17' src='images/arrow-left-blue.png' class='arr-left-blue' /></div>", "<div class='nav-btn next-slide'><img alt='arrow-img' width='17' height='17' src='images/arrow-right-white.png' class='arr-right-white' /><img alt='arrow-img' width='17' height='17' src='images/arrow-right-blue.png' class='arr-right-blue' /></div>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  })

}