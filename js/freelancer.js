/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Initialize Masonry
$(window).on('load', function() {
    var $grid = $('.masonry-grid');
    
    if (typeof Masonry !== 'undefined' && $grid.length) {
        // First initialize Masonry
        var msnry = new Masonry('.masonry-grid', {
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-item',
            percentPosition: true,
            gutter: 30,
            fitWidth: false,
            transitionDuration: 0,
            initLayout: false
        });

        // Then handle images loading
        var $items = $grid.find('.masonry-item');
        $items.find('img').each(function() {
            var img = this;
            if (img.complete) {
                msnry.layout();
            } else {
                img.addEventListener('load', function() {
                    msnry.layout();
                });
            }
        });

        // Re-layout Masonry when window is resized
        $(window).on('resize', function() {
            msnry.layout();
        });

        // Initial layout
        msnry.layout();
    }
});
