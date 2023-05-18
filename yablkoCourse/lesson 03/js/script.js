 var icons  = $('.social-icon');
     styles =   {
         position: "relative",
         color: "black",
         background: "yellow",
         zIndex: 10
     },
     settings = { top: 1000 },
     speed = 2000;
     



icons.css(styles);


icons.on("mouseenter", function() {
    $(this).animate(settings, speed)
});
