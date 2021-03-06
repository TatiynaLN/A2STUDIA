

// jQuery.noConflict();
// jQuery(window).load(function () {
//     jQuery('#vt_nivo_slider106').nivoSlider({
//         effect: 'fold', // Specify sets like: 'fold,fade,sliceDown'
//         slices: 15, // For slice animations
//         boxCols: 8, // For box animations
//         boxRows: 4, // For box animations
//         animSpeed: 500, // Slide transition speed
//         pauseTime: 3000, // How long each slide will show
//         startSlide: 3, // Set starting Slide (0 index)
//         directionNav: true, // Next & Prev navigation
//         controlNav: true, // 1,2,3... navigation
//         controlNavThumbs: false, // Use thumbnails for Control Nav
//         pauseOnHover: true, // Stop animation while hovering
//         manualAdvance: false, // Force manual transitions
//         prevText: 'Prev', // Prev directionNav text
//         nextText: 'Next', // Next directionNav text
//         randomStart: true, // Start on a random slide
//         beforeChange: function () { }, // Triggers before a slide transition
//         afterChange: function () { }, // Triggers after a slide transition
//         slideshowEnd: function () { }, // Triggers after all slides have been shown
//         lastSlide: function () { }, // Triggers when last slide is shown
//         afterLoad: function () { } // Triggers when slider has loaded
//     });
// });

$(window).load(function () {
    $('#slider').nivoSlider({
        effect: 'boxRainGrowReverse',//random использовать все переходы
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 1000,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,// поменять на false
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function () { },
        afterChange: function () { },
        slideshowEnd: function () { },
        lastSlide: function () { },
        afterLoad: function () { }
    });
});




// active menu

var mn = document.getElementById('cllu');
var i;
for (i = 0; i < mn.children.length - 1; i++) {
    // mn.children[i].querySelector('a').classList.remove('active');
    mn.children[i].querySelector('a').onclick = addp;
}
function addp() {
    for (i = 0; i < mn.children.length - 1; i++) {
        mn.children[i].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
}


// SLICK SLIDER
// SLICK SLIDER MODELING
$(document).ready(function () {
    $('.uralmin').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        asNavFor: ".ural",
        focusOnSelect: true,//слайдится по клику
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    autoplay: false,
                    slidesToShow: 5,
                }
            }
        ],
        mobileFirst: true
    });
    $('.ural').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        asNavFor: ".uralmin",
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: true,
                }
            }
        ],
        mobileFirst: true
    });
});


$(document).ready(function () {
    $('.similar').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        // initialSlide: 0,
        // autoplay: true,
        autoplaySpeed: 1500,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        draggable: true,//не перетаскивается
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    autoplay: false,
                    slidesToShow: 4,
                }
            }
        ],
        mobileFirst: true
    });
});

(function () {
    let panel = document.querySelector('body');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('oh');
    });
})();