(function ($) {
  "use strict";

  // Background Image Js
  const bgSelector = $("[data-bg-img]");
  bgSelector.each(function (index, elem) {
    let element = $(elem),
      bgSource = element.data("bg-img");
    element.css("background-image", "url(" + bgSource + ")");
  });

  // Background Color Js
  const Bgcolorcl = $("[data-bg-color]");
  Bgcolorcl.each(function (index, elem) {
    let element = $(elem),
      Bgcolor = element.data("bg-color");
    element.css("background-color", Bgcolor);
  });

  // Margin Top Js
  $("[data-margin-top]").each(function () {
    $(this).css("margin-top", $(this).data("margin-top"));
  });

  // Margin Bottom Js
  $("[data-margin-bottom]").each(function () {
    $(this).css("margin-bottom", $(this).data("margin-bottom"));
  });

  // Offcanvas Nav Js
  var $offCanvasNav = $(".mobile-menu-items"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="mobile-menu-expand"></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on(
    "click",
    "li a, li .mobile-menu-expand, li .menu-title",
    function (e) {
      var $this = $(this);
      if ($this.parent().attr("class")) {
        if (
          $this
            .parent()
            .attr("class")
            .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
          ($this.attr("href") === "#" || $this.hasClass("mobile-menu-expand"))
        ) {
          e.preventDefault();
          if ($this.siblings("ul:visible").length) {
            $this.parent("li").removeClass("active-expand");
            $this.siblings("ul").slideUp();
          } else {
            $this.parent("li").addClass("active-expand");
            $this.closest("li").siblings("li").find("ul:visible").slideUp();
            $this.closest("li").siblings("li").removeClass("active-expand");
            $this.siblings("ul").slideDown();
          }
        }
      }
    }
  );

  $(".sub-menu").parent("li").addClass("menu-item-has-children");

  // Menu Activeion Js
  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf("/") + 1);
  var hash = window.location.hash.substr(1);
  if (
    (curpage === "" || curpage === "/" || curpage === "admin") &&
    hash === ""
  ) {
  } else {
    $(".header-navigation-area li").each(function () {
      $(this).removeClass("active");
    });
    if (hash != "")
      $(".header-navigation-area li a[href='" + hash + "']")
        .parents("li")
        .addClass("active");
    else
      $(".header-navigation-area li a[href='" + curpage + "']")
        .parents("li")
        .addClass("active");
  }

  // Popup Quick View JS
  var popupProduct = $(".product-quick-view-modal");
  $(".btn-product-quick-view-open").on("click", function () {
    popupProduct.addClass("active");
    $("body").addClass("fix");
  });
  $(".btn-close, .canvas-overlay").on("click", function () {
    popupProduct.removeClass("active");
    $("body").removeClass("fix");
  });

  // Product Single Thumb Slider Js
  var ProductNav = new Swiper(".single-product-nav-slider", {
    spaceBetween: 21,
    slidesPerView: 4,
  });
  var ProductThumb = new Swiper(".single-product-thumb-slider", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: ProductNav,
    },
  });

  // Swiper Default Hero Slider Js
  var mainlSlider = new Swiper(".default-slider-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 500,
    spaceBetween: 0,
    effect: "fade",
    autoHeight: true, //enable auto height
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".default-slider-container .swiper-btn-next",
      prevEl: ".default-slider-container .swiper-btn-prev",
    },
  });

  // Product Slider Col4 Js
  var productSliderCol4 = new Swiper(".product-slider-col4-container", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 30,
    speed: 600,
    navigation: {
      nextEl: ".default-arrows .product-swiper-btn-next",
      prevEl: ".default-arrows .product-swiper-btn-prev",
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
        },
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
        },
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
        },
      },
    },
  });

  // Product Slider Best Seller Col4 Js
  var productSliderCol4 = new Swiper(
    ".product-slider-col4-container-best-seller",
    {
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowTouchMove: true,
      autoplay: {
        delay: 3000,
      },
      spaceBetween: 8,
      speed: 600,
      navigation: {
        nextEl: ".product-swiper-btn-next.best-seller-arrows",
        prevEl: ".product-swiper-btn-prev.best-seller-arrows",
      },
      breakpoints: {
        1919: {
          slidesPerView: 4,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        1399: {
          slidesPerView: 3,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
      },
    }
  );

  // Product Recommended Items Slider Js
  var productSliderCol4 = new Swiper(
    ".product-slider-col4-container-recommended-items",
    {
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowTouchMove: true,
      autoplay: {
        delay: 3000,
      },
      spaceBetween: 8,
      speed: 600,
      navigation: {
        nextEl: ".product-swiper-btn-next.recommended-items-arrows",
        prevEl: ".product-swiper-btn-prev.recommended-items-arrows",
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 8,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
      },
    }
  );

  // Product Categories Slider Col4 Js
  var productSliderCategories = new Swiper(
    ".product-slider-col4-container-categories",
    {
      slidesPerView: 6,
      slidesPerGroup: 1,
      allowTouchMove: true,
      autoplay: {
        delay: 2250,
      },
      spaceBetween: 16,
      speed: 600,
      navigation: {
        nextEl: " .categories-arrows .product-swiper-btn-next",
        prevEl: " .categories-arrows .product-swiper-btn-prev",
      },
      breakpoints: {
        1400: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
          allowTouchMove: true,
          autoplay: {
            delay: 2250,
          },
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 16,
          allowTouchMove: true,
          autoplay: {
            delay: 2250,
          },
        },
        734: {
          slidesPerView: 3,
          spaceBetween: 15,
          allowTouchMove: true,
          autoplay: {
            delay: 2250,
          },
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
          allowTouchMove: true,
          autoplay: {
            delay: 2250,
          },
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
          allowTouchMove: true,
          autoplay: {
            delay: 2250,
          },
        },
      },
    }
  );

  //Slider Departments JS
  var productSliderDepartments = new Swiper(
    ".product-slider-col4-container-departments",
    {
      slidesPerView: 8,
      slidesPerGroup: 1,
      loop: true,
      allowTouchMove: true,
      autoplay: {
        delay: 3000,
      },
      spaceBetween: 30,
      speed: 600,
      breakpoints: {
        2520: {
          slidesPerView: 8,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
      },
    }
  );

  //Slider Galleries Page JS
  var productSliderGallery = new Swiper(
    ".product-slider-col4-container-gallery",
    {
      slidesPerView: 6,
      slidesPerGroup: 1,
      loop: true,
      allowTouchMove: true,
      autoplay: {
        delay: 3000,
      },
      spaceBetween: 30,
      speed: 600,
      navigation: {
        nextEl: ".gallery-arrows .product-swiper-btn-next",
        prevEl: ".gallery-arrows .product-swiper-btn-prev",
      },
      breakpoints: {
        1400: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
          allowTouchMove: true,
          autoplay: {
            delay: 3000,
          },
        },
      },
    }
  );

  // Fancybox Js
  $(".image-popup").fancybox();
  $(".video-popup").fancybox();

  // Aos Js
  AOS.init({
    once: true,
    duration: 1200,
  });

  // Parallax Scene Js
  $(".scene").each(function () {
    new Parallax($(this)[0]);
  });
  // Parallax Js
  $(".parallax").jarallax({
    // Element jarallax Parallax
  });

  // Product Quantity JS
  var proQty = $(".pro-qty");
  proQty.append('<div class= "dec qty-btn">-</div>');
  proQty.append('<div class="inc qty-btn">+</div>');
  $(".qty-btn").on("click", function (e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  // Slider Range Js
  $("#price-range").slider({
    range: true,
    min: 0,
    max: 350,
    values: [16, 300],
    slide: function (event, ui) {
      $(".ui-slider-handle:eq(0)").html(
        "<span>" + "$" + ui.values[0] + "</span>"
      );
      $(".ui-slider-handle:eq(1)").html(
        "<span>" + "$" + ui.values[1] + "</span>"
      );
    },
  });
  $(".ui-slider-handle:eq(0)").html(
    "<span>" + "$" + $("#price-range").slider("values", 0) + "</span>"
  );
  $(".ui-slider-handle:eq(1)").html(
    "<span>" + "$" + $("#price-range").slider("values", 1) + "</span>"
  );

  // Review Form JS
  $(".review-write-btn").on("click", function () {
    $(".reviews-form-area, .review-write-btn").toggleClass("show").focus();
  });

  // Ajax Contact Form JS
  var form = $("#contact-form");
  var formMessages = $(".form-message");

  $(form).submit(function (e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: formData,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("alert alert-danger");
        $(formMessages).addClass("alert alert-success fade show");

        // Set the message text.
        formMessages.html(
          "<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>"
        );
        formMessages.append(response);

        // Clear the form.
        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("alert alert-success");
        $(formMessages).addClass("alert alert-danger fade show");

        // Set the message text.
        if (data.responseText === "") {
          formMessages.html(
            "<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>"
          );
          formMessages.append(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occurred and your message could not be sent."
          );
        }
      });
  });

  // scrollToTop Js
  function scrollToTop() {
    var $scrollUp = $("#scroll-to-top"),
      $lastScrollTop = 0,
      $window = $(window);
    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 120) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });
    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 50);
      evt.preventDefault();
    });
  }
  scrollToTop();
})(window.jQuery);

function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetY = e.touches[0].pageY);

  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}
