$(document).ready(function () {

  var toggle_primary_button = $(".nav_toggle_button"),
    toggle_primary_icon = $(".nav_toggle_button i"),
    toggle_secondary_button = $(".page_nav li span"),
    primary_menu = $(".page_nav"),
    secondary_menu = $(".page_nav ul ul"),
    webHeight = $(document).height(),
    window_width = $(window).width();

    //Multi-line Tab
  toggle_secondary_button.click(function () {
    $(this)
      .parent("li")
      .siblings("li")
      .children("ul")
      .slideUp(400, function () {
        $(this).removeAttr("style");
      });

    $(this)
      .parent("li")
      .siblings("li")
      .find(".fa")
      .removeClass("fa-caret-up")
      .addClass("fa-caret-down");

    $(this).parent("li").children("ul").slideToggle();
    $(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");
  });

  // Basic functionality for nav_toggle

  var hamburger = $(".hamburger");
  // hamburger.each(function(){
  // $(this).click(function(){
  // $(this).toggleClass("is-active");
  // });
  // });

  hamburger.click(function () {
    primary_menu.addClass("toggle_right_style");
    $(".toggle_right_nav").addClass("toggle_right_cont");
    $(".nav_toggle_button").toggleClass("active");
    $(".hamburger").toggleClass("is-active");
    $("body").addClass("active");
  });

  $(".toggle_nav_close, .menu_slide_right .hamburger").click(function () {
    primary_menu.removeClass("toggle_right_style");
    secondary_menu.removeAttr("style");
    toggle_secondary_button.children().removeClass("fa-caret-up").addClass("fa-caret-down");
    $(".toggle_right_nav").removeClass("toggle_right_cont");
    $(".nav_toggle_button").removeClass("active");
    $(".hamburger").removeClass("is-active");
    $("body").removeClass("active");
  });


    // Swap Elements

  function swap_this(){
    if(window_width <= 600){
        // Default
        $('.main_logo').insertAfter('.logo_wrap');
        $('#nav_area').appendTo('.header_right_holder');
      } else if(window_width <= 800){
        $('.main_logo').insertAfter('.logo_wrap');
        $('#nav_area').appendTo('.header_right_holder');
  
      } else if(window_width > 800 && window_width <= 1000){
        $('.main_logo').insertBefore('.head_info');
        $('#nav_area').insertBefore('header');
      } else {
        $('.main_logo').insertBefore('.head_info');
        $('#nav_area').insertAfter('.header_logo');
      }
  }

	swap_this();

   // Reset all configs when width > 800
  $(window).resize(function () {
    window_width = $(this).width();

    swap_this();

    if (window_width > 800) {
      $(".nav_toggle_button").removeClass("active");
      $(".hamburger").removeClass("is-active");
      primary_menu.removeClass("toggle_right_style");
      $(".toggle_right_nav").removeClass("toggle_right_cont");
      $("body").removeClass("active");
    } else {
      secondary_menu.removeAttr("style");
      toggle_secondary_button.children().removeClass("fa-caret-up").addClass("fa-caret-down");
    }
  });

  // Get the header account element
  const headerAccount = document.getElementById('headerAccount');

  // Add click event listener
  headerAccount.addEventListener('click', function() {
      // Toggle the text-hidden class
      headerAccount.classList.toggle('text-hidden');
  });

});
