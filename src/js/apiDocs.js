console.log('apiDocs started');

// Sticky navbar and set lang

$(window).on("load resize scroll", function(e) {
        if (window.matchMedia('(min-width: 768px)').matches) {
          $("#navInner").stick_in_parent();
          $(".setLang").stick_in_parent();
        } else {

          var navHeight = $("nav.nav").outerHeight();
            $(".setLang").stick_in_parent({offset_top: navHeight});
        }

});

// Make the code beautiful
hljs.initHighlightingOnLoad();




//
// //smoothscroll
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
                    scrollTop: target.offset().top
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
//
// // Scroll spy - http://jsfiddle.net/mekwall/up4nu/
// var lastId,
//     topMenu = $(".docsNav"),
//     topMenuHeight = topMenu.outerHeight() + 15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function() {
//         var item = $($(this).attr("href"));
//         if (item.length) {
//             return item;
//         }
//     });
//
// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e) {
//     var href = $(this).attr("href"),
//         offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
//     $('html, body').stop().animate({
//         scrollTop: offsetTop
//     }, 300);
//     e.preventDefault();
// });
//
// // Bind to scroll
// $(window).scroll(function() {
//     // Get container scroll position
//     var fromTop = $(this).scrollTop() + topMenuHeight;
//
//     // Get id of current scroll item
//     var cur = scrollItems.map(function() {
//         if ($(this).offset().top < fromTop)
//             return this;
//     });
//     // Get the id of the current element
//     cur = cur[cur.length - 1];
//     var id = cur && cur.length ? cur[0].id : "";
//
//     if (lastId !== id) {
//         lastId = id;
//         // Set/remove active class
//         menuItems
//             .parent().removeClass("active")
//             .end().filter("[href='#" + id + "']").parent().addClass("active");
//     }
//
// });

// gumshoe.init();


///menu toggle
$('#navInner .menu-toggle a').on('click', function (ev) {
  ev.preventDefault();
  if ($('.docsNav').hasClass('active')) {
    $('.docsNav').removeClass('active');
  } else {
    $('.docsNav').addClass('active');
  }
});



//
$('body').scrollspy({ target: '.docsNav' })

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
