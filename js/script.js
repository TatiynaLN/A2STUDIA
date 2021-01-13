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
//GAMBURGER

$(".toggle-icon").click(function () {
    $('#nav-container').toggleClass("pushed");
});