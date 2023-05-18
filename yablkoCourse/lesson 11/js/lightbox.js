(function($) {

	var gallery = $('.gallery'),
		startingOpacity = gallery.find('img').css('opacity');

	// animujeme opacity na hover
	gallery.on('mouseenter mouseleave', 'img', function(event){
		var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
		$(this).fadeTo(200, opacity);
	});


	// vytvorime si overlay
	var overlay = $('<div>', { id: 'overlay' });
		overlay.appendTo('body').hide();

	overlay.on('click', function() {
		$(this).fadeOut('fast');
	});


	// skryjeme overlay na escape
	$(document).on('keyup', function(event) {
		if ( event.which === 27 ) overlay.fadeOut('fast');
	});


	// po kliknuti zobrazime lightbox
	gallery.on('click', 'a', function(event)
	{
		var href = $(this).attr('href'),
			image = $('<img>', { src: href, attr: 'learn2code' });

		overlay.html( image )
			   .show();

		event.preventDefault();
	});

})(jQuery);