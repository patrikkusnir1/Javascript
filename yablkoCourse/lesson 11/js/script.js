String.prototype.capitalize = function() { 
	return this.charAt(0).toUpperCase() + this.slice(1);
};


(function($) {

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


	// -----------

	/*var fb = [
		'http://graph.facebook.com/learn2codesk',
		'http://graph.facebook.com/spaceunicorn',
		'http://graph.facebook.com/bedroomssk'
	];

	var requests = [];

	$.each(fb, function(index, value) {

		$.ajax({
			url: value,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				console.log( data );
			}
		});

	});*/

	/*var fb = [
		'http://graph.facebook.com/learn2codesk',
		'http://graph.facebook.com/spaceunicorn',
		'http://graph.facebook.com/bedroomssk'
	]

	function getData( index ) {
		return $.ajax({
			url: fb[index],
			type: 'GET',
			dataType: 'json'
		}).promise(); 
	}

	$.when( getData(0), getData(1), getData(2) ).then(function() {
		console.log( 'all finished!' );
	});*/

})(jQuery);