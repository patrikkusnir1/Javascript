String.prototype.capitalize = function() { 
	return this.charAt(0).toUpperCase() + this.slice(1);
};

(function($) {

	$('.gallery a').lightbox({
		speed: 300,
		hideEffect: 'slideUp',
		complete: function() {
			// alert('AHAHAHAH!!');
		}	
	});

	// -----

	// vytiahneme si gallery element 
	var gallery  = $('.gallery'),
		selected = $('.menu').find('.selected');

	// po kliknuti na link v menu 
	$('.menu a').on('click', function(event) {
		
		// nechceme byt presmerovani na stranku
		event.preventDefault();

		// vytiahneme url adresu ktoru chceme ist prezriet ajaxom
		var a      = $(this),
			href   = a.attr('href'),
			parent = a.parent('li');

		// ak chceme zobrazit uz zobrazene, kasleme na to
		if ( selected.is( parent ) ) return;

		// vyznacime noveho parenta
		selected = parent;

		// oznacime link na ktory sme klikli ako selected
		parent.addClass('selected')
			  .siblings().removeClass('selected');

		// nechame zmiznut aktualnu galeriu
		gallery.find('.gallery-set').fadeOut();

		// ajax request, vytiahneme iba .gallery-set
		$.ajax({
			url: href,
			type: 'GET',
			dataType: 'html',
			success: function(data) {
				
				// najdeme novy gallery set a vlozime ho do .gallery
				var newGallery = $(data).find('.gallery-set');
					gallery.html( newGallery );
				
				// pridame gallery setu class s fejdovanim
				newGallery.addClass('fadeIn' + selected.data('from').capitalize());

			}
		});
	});

})(jQuery);