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
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        var hash = this.hash;
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({ scrollTop: target.offset().top }, 500, function (){
            location.hash = hash;
        });
        return false;
    });
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
