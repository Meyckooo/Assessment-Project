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

   // Utility functions to replace the Utils object
        const Utils = {
            CHART_COLORS: {
                red: 'rgb(255, 99, 132)',
                orange: 'rgb(255, 159, 64)',
                yellow: 'rgb(255, 205, 86)',
                green: 'rgb(75, 192, 192)',
                blue: 'rgb(54, 162, 235)',
                purple: 'rgb(153, 102, 255)',
                grey: 'rgb(201, 203, 207)'
            },
            
            transparentize: function(color, opacity) {
                const alpha = 1 - opacity;
                return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
            },
            
            numbers: function(config) {
                const count = config.count || 7;
                const min = config.min || 0;
                const max = config.max || 100;
                const result = [];
                for (let i = 0; i < count; i++) {
                    result.push(Math.floor(Math.random() * (max - min + 1)) + min);
                }
                return result;
            },
            
            months: function(config) {
                const count = config.count || 7;
                const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                               'July', 'August', 'September', 'October', 'November', 'December'];
                return months.slice(0, count);
            },
            
            namedColor: function(index) {
                const colors = Object.values(this.CHART_COLORS);
                return colors[index % colors.length];
            },
            
            rand: function(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        };

        // Configuration
        const NUMBER_CFG = {count: 7, min: -100, max: 100};
        const labels = Utils.months({count: 7});

        // Data configuration
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: Utils.numbers(NUMBER_CFG),
                    borderColor: Utils.CHART_COLORS.red,
                    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Dataset 2',
                    data: Utils.numbers(NUMBER_CFG),
                    borderColor: Utils.CHART_COLORS.blue,
                    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
                    fill: false,
                    tension: 0.4
                }
            ]
        };

        // Chart configuration
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 6,
                        hoverRadius: 8
                    }
                }
            }
        };

        // Initialize the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const chart = new Chart(ctx, config);

});
