console.log('apiDocs started');

// Sticky navbar and set lang

$(window).on("load resize scroll", function(e) {
        if (window.matchMedia('(min-width: 768px)').matches) {
          $("#navInner").stick_in_parent();
          $(".setLang").stick_in_parent();
        } else {

          // var navHeight = $("nav.nav").height();
            $(".setLang").stick_in_parent({offset_top: 50});
        }

});

// Make the code beautiful
hljs.initHighlightingOnLoad();





//smoothscroll
$('a[href^="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top-80
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


///menu toggle
$('#navInner .menu-toggle a').on('click', function (ev) {
  ev.preventDefault();
  if ($('.docsNav').hasClass('active')) {
    $('.docsNav').removeClass('active');
  } else {
    $('.docsNav').addClass('active');
  }
});



//scrollspy


$(window).on("load resize scroll", function(e) {
  if($(window).width() > 768)
      {
        $('body').scrollspy({ target: '.docsNav', offset:0 })
      } else {
        $('body').scrollspy({ target: '.docsNav', offset:120 })
      }
  });


// Language position
$(window).on("load resize scroll", function(e) {
  if($(window).width() > 768)
      {
        var widthss = $(".method-example").outerWidth();
        $(".setLang").width(widthss);
      } else {

      }
  });


// Language tabs
$(document).ready(function() {
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $('[data-tab="' + tab_id + '"]').addClass('current');
        $("." + tab_id).addClass('current');
    })
});
