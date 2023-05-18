// Homework 11

(function ($) {
    var pt = $(".post-title"), // post-title
        loader = $(".loading"),
        siteWidth = $("body").width(),
        ptWidth = pt.width();
        console.log(pt); 
        console.log(loader); 
        
    pt.on("click", function() {
        loader.fadeIn();
        $(this).animate(
            {left: (siteWidth - ptWidth - 450) }, 4000, function() {
            loader.fadeOut();
        })
    })


    pt.on("contextmenu", function(event) {
        loader.fadeIn()
        $(this).animate(
            { left: (siteWidth - ptWidth - 450) }, 4000);
        setTimeout(function() {
            loader.fadeOut();
        }, 2000);
        event.preventDefault();
    })
        








})(jQuery)