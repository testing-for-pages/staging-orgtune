/*  ---------------------------------------------------
  Template Name: Deerhost
  Description:  Deerhost Hosting HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Canvas Menu
  $(".canvas__open").on("click", function () {
    $(".offcanvas__menu__wrapper").addClass("show__offcanvas__menu");
    $(".offcanvas__menu__overlay").addClass("active");
  });

  $(".canvas__close, .offcanvas__menu__overlay").on("click", function () {
    $(".offcanvas__menu__wrapper").removeClass("show__offcanvas__menu");
    $(".offcanvas__menu__overlay").removeClass("active");
  });

  /*------------------
        Accordin Active
    --------------------*/
  $(".collapse").on("shown.bs.collapse", function () {
    $(this).prev().addClass("active");
  });

  $(".collapse").on("hidden.bs.collapse", function () {
    $(this).prev().removeClass("active");
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
        Carousel Slider
    --------------------*/
  var hero_s = $(".hero__slider");
  hero_s.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });

  /*------------------
        Testimonial Slider
    --------------------*/
  $(".testimonial__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      320: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  /*------------------
        Radio btn
    --------------------*/
  $(".pricing__swipe-btn label").on("click", function (e) {
    $(".pricing__swipe-btn label").removeClass("active");
    $(this).addClass("active");

    if (e.target.htmlFor == "month") {
      $(".yearly__plans").removeClass("active");
      $(".monthly__plans").addClass("active");
    } else if (e.target.htmlFor == "yearly") {
      $(".monthly__plans").removeClass("active");
      $(".yearly__plans").addClass("active");
    }
  });
  /*------------------
        Achieve Counter
    --------------------*/
  $(".achieve-counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  // COUNTER

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function startCounters(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".number");
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-number"));
          animateValue(counter, 0, target, 2000); // Adjust duration as needed
        });
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(startCounters, { threshold: 0.2 });
  const section = document.getElementById("section-counter");

  if (section) {
    const observer = new IntersectionObserver(startCounters, {
      threshold: 0.2,
    });
    observer.observe(section);
  }

  // Function to get the current year
  function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const spanElement = document.getElementById("currentYear");
    if (spanElement) {
      spanElement.textContent = currentYear;
    }
  }
  document.addEventListener("DOMContentLoaded", setCurrentYear);

  //function for logo to redirect on homepage
  var headerLogos = document.getElementsByClassName("header__logo");
  for (var i = 0; i < headerLogos.length; i++) {
    var logoText = headerLogos[i].querySelector("span");
    logoText.addEventListener("click", function () {
      window.location.href = "/";
    });
  }
})(jQuery);
