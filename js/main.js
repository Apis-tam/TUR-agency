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
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    //validation

    let btn = document.querySelector(".form__button");
    btn.onclick = function validation(event) {
      event.preventDefault();

      jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
      });
      $("input:blank").css("background-color", "rgba(255, 0, 0, 0.486)");
      $(".forma").validate({
        focusCleanup: true,
        rules: {
          name: "required",
          minlenght: 2
        },
        email: {
          required: "введите email",
          minlenght: 5,
          email: true
        },
        messages: {
          name: "Введите свое имя Кирилицей",
          required: "Заполните это поле",
          minlength: "2"
        }
      });
    };
  });
})(jQuery);
