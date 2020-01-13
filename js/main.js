"use strict";

(function($) {
  $(document).ready(function() {
    // Code
    $(".head-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,

      infinite: true,
      arrows: false,
      lazyLoad: "ondemand",
      mobileFirst: true
    });
    $(".slider-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
    });
  });
})(jQuery);
