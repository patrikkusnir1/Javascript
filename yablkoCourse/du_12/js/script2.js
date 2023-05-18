(function($) {
    var jb = $(".justin"),
        loader = $(".loadin"),
        siteWidth = $("body").width(),
        justinWidth = jb.width();

    jb.on("click", function() {
        loader.fadeIn();

        $(this).animate({
            left: (siteWidth - justinWidth)
        }, 4000, function () {
            loader.fadeOut();
        
        });
    
    });
    
})(jQuery);