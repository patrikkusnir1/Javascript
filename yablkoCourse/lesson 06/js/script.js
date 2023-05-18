(function ($) {

	var gallery = $(".gallery"),
		startingOpacity = gallery.find("img").css("opacity")

	gallery.find("img").on("mouseenter mouseleave", function(event) {

		var opacity = event.type === "mouseenter" ? 1 : startingOpacity;
		$(this).stop().fadeTo(200, opacity);
	});
	// --------

	var overlay = $("<div/>", { id: "overlay"});
		overlay.appendTo("body").hide();

	gallery.find("a").on("click", function(event) {
		
		var href = $(this).attr("href"),
			image = $("<img>", {src: href, alt: "learn2code" })

		overlay.html( image )
			   .show();
		//overlay.show();
		event.preventDefault();	
	});

	// skryjeme overlay
	overlay.on("click", function() {
		overlay.hide();
	});
	

	$(document).on("keyup", function() {
		if (event.which === 27) overlay.hide();

	})
}) (jQuery);