String.prototype.capitalize = function() { 
	return this.charAt(0).toUpperCase() + this.slice(1);
};


(function($) {

	// najdeme si vsetky galerie
	var galleries = $('.gallery-set');

	// skryjeme vsetky 
	galleries.hide();

	// v menu najdeme link, ktory je selected
	var selected = $('.menu').find('.selected');
	
	// vytvorim funkciu show gallery, ktora akceptuje selectnuty prvok menu na zaklade ktoreho vyberieme a zobrazime galeriu
	function showGallery( selected ) {

		// ak takyto element existuje, najdeme z jeho linku idcko elementu
		// toto idcko pouzijeme na najdeme galerie, ktoru chceme zobrazit
		if ( selected.length ) {
			var id = selected.find('a').attr('href');
			selectedGallery = $(id);
		} 
		
		// ak tato galeria existuje bude to nasa newGallery, inak new Gallery bude prva galeria v zozname
		var newGallery = selectedGallery.length ?  selectedGallery : galleries.eq(0);

		// vsetky galerie ktore nie su nasa nova galeria schovame
		galleries.not( newGallery ).hide();
		
		// zobrazime nasu novu galeriu
		newGallery.show().addClass( selected.data('class') || 'fadeInLeft' );
	}

	// hned ju zavolame
	showGallery( selected );

	// ak klikneme na link v menu, nastavime mu class selected a vsetky surodencom ho odoberieme
	// aby vzdy bol selected iba jeden
	// nasledne zobrazime aktualnu galeriu
	$('.menu li').on('click', function(event) {
		var fadeClass = 'fadeIn' + $(this).data('from').capitalize();

		$(this)
			.data('class', fadeClass)
			.addClass('selected')
			.siblings().removeClass('selected');

		showGallery( $(this) );
		event.preventDefault();
	});


	// ----------------------------------------------

	var gallery = $('.gallery'),
		startingOpacity = gallery.find('img').css('opacity');

	// animujeme opacity na hover
	gallery.find('img').on('mouseenter mouseleave', function(event){
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
	gallery.find('a').on('click', function(event)
	{
		var href = $(this).attr('href'),
			image = $('<img>', { src: href, attr: 'learn2code' });

		overlay.html( image )
			   .show();

		event.preventDefault();
	});

})(jQuery);