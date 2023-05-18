(function ($) {

	var list = $(".jokes");
		copy = $(".copy");


	//  copy.before($("<h1>JA MAM NAJVACSI ... HEADING</h1>"));
	// copy.after($("<h1>JA MAM TIEZ NAJVACSI ... HEADING</h1>"));		

	// $('<h2 class="btn-primary"> Ja mam druhy najvacsi</h2 >').insertAfter(".copy");
	// $("<h3> ja nemam az tak velky </h3>").prependTo("#content");


	list.find("dd").slideUp();

	list.find("dt").on("click", function (event) {
		
		var dt = $(this),
			dd = dt.next();
		
		dd.slideToggle()
			.siblings("dd").slideUp();

		var newContent = dd + dd.html();

		copy.prepend(newContent + "<hr>");
		// console.log( $(this).text() );
		event.preventDefault();

		dt.add(dd)
			.clone(true)
			.css({ backgroundColor: "#bada55" })
			.hide()
			.prependTo(list)
			.fadeIn()
	})

	var ul = $(".list");
	
	ul.on("click", "li", function() {
		ul.append("<li>JA SOM TU NOVY!!!</li>")
	})
	
})(jQuery)