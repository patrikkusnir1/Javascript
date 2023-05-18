(function($) {
    var jb = $(".justin"),
        overlay = $("#overlay");

    jb.on("click", function() {
        
        $(this).fadeOut("fast"); // justin zmizne

        overlay.fadeIn("fast", function() { // show overlay
            overlay.find(".bar").animate({width: "50%" }, 2000, function() {
                overlay.fadeOut("slow", function() {
                    overlay.find(".bar").css({width: 0})
                });

                jb.fadeIn("fast");
            });
        });
    });


    // hybeme sa
    $(document).on("keydown", function(event) {
        
        switch (event.which) {
            case 38:  // up
                jb.css({
                    top: "-=5"
                })
                break;
            case 37: // left
                jb.css({
                    left: "-=5"
                })
                break;
            case 39: // right
                jb.css({
                    left: "+=5"
                })
                break;
            case 40:   //down
                jb.css({
                    top: "+=5"
                })
                break;
        }
    })

}) (jQuery)


