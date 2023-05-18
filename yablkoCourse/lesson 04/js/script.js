(function ($) {

	var list = $(".jokes");
	
	list.find("dd").hide();
	
	list.find("dt").on("click", function(event) {
		$(this).next().slideToggle()
			   .siblings("dd").slideUp();
	})
	list.find("a").on("click", function(event) {
				event.preventDefault();
	})
	
})
(jQuery)