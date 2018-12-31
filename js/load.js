
$(document).ready(function () {
    //Preloader
    $(window).on("load", function () {
        preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });
});

$(document).ready(function () {
    $('a#filter-a').click(function () {
        //hide all works by default 
        $(".work-one").addClass('filter-hide');
        //show slected works based on the menu clicked
        $(".work-one[data-filter='" + $(this).attr('data-filter') + "']").removeClass("filter-hide");
        //remove selected class to the link      
        $('a#filter-a').removeClass('selected');
        //add selected class to the active link
        $(this).addClass('selected');
        return false;
    });
    //show all works for "all" menu
    $('a[data-filter="*"]').click(function (event) {
        $(".work-one").removeClass('filter-hide');
        return false;
    });
});

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll() {
    // var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
    var startY = $('#particles-js').height();

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}


